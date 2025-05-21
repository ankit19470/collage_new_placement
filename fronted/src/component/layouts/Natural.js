// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Natural() {
//   const [file, setFile] = useState(null);
//   const [analysis, setAnalysis] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       toast.error("Please upload a resume!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("resume", file);

//     try {
//       const res = await axios.post("http://localhost:1000/analyze-resume", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setAnalysis(res.data.analysis);
//       toast.success("Resume analyzed successfully!");
//     } catch (error) {
//       toast.error("Error analyzing resume");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container" style={{paddingTop:"130px"}}>
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>AI-Powered Resume Analyzer</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Analyze Resume</button>
//       {analysis && <p><strong>Analysis:</strong> {analysis}</p>}
      
//       {/* ✅ Add ToastContainer Here */}
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//     </div>
//   );
// }

// export default Natural;

