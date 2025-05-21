require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const axios = require('axios');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname + '/public'));

// DB connection and seeder
const db = require('./config/db');
const seeder = require('./config/seeder');
seeder.adminRegister();

// Routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// Test Routes
app.get('/home', (req, res) => {
  res.send({ status: true, message: 'Home loaded' });
});

app.get('/', (req, res) => {
  res.send({ status: false, message: 'default loaded' });
});

// OpenAI Chat Endpoint
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('❌ OPENAI_API_KEY is missing. Check your .env file.');
  process.exit(1);
}

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'YourAppName',
        },
      }
    );

    const aiReply = response.data.choices?.[0]?.message?.content || 'No response from AI.';
    res.json({ reply: aiReply });
  } catch (error) {
    console.error('OpenRouter API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to communicate with OpenRouter API' });
  }
});

// Socket.IO
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('send_message', (data) => {
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server on a single port
const PORT = process.env.PORT || 1000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
