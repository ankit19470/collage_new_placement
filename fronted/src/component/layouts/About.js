import { Link } from "react-router-dom"
function About() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/logo/ctbanner.png"
              className="card-img-bottom"
              alt="..."
              style={{ minHeight: "350px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy", }}>About us<br/><Link to={"/home"} className="nav-link" style={{fontSize:"15px",marginLeft:"-20px"}}>HOME/ABOUT</Link> </h1>
           
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 py-2">
              <img
                src="assets/about/about3.jpeg"
                className="img-fluid"
                alt=""
                style={{ minWidth: 100 }}
              />
            </div>
            <div className="col-md-8">
              <p style={{ textAlign: "justify" }}>
                <b>Chairman- Mr. Charanjit Singh</b> <br />
                <br /> The establishment stones of CT Group are laid on the epitome
                of scholastic pursuit and excellence. Excellence in any work can be
                achieved with extreme commitment, hard work, and firmness. We, at
                CT, have made this maxim our axiom and our way of life in every
                single activity in the campus. As you desire to walk your journey of
                life in our institutions, which has a vibrant atmosphere and a
                vigorous environment, be constructive, be ingenious and be
                committed, for you will see yourself transformed with a new learning
                experience and develop your progressive skills. Our highly educated,
                experienced and motivated staff along with committed team of
                management will implement the most validated methods and means of
                Teaching-Learning Process to provide the quality education and
                academic excellence. <br />
                <br /> We are on an ambitious journey to become one of World's top
                research-intensive institutions. Join our portals, create new
                knowledge, find new portfolios, help thousands of students, define
                their future and change the world.
              </p>
            </div>
            <div className="col-md-8 py-5">
              <p style={{ textAlign: "justify" }}>
                <b>Managing Director- Dr. Manbir Singh </b>
                <br />
                <br />
                The establishment stones of CT Group are laid on the epitome of
                scholastic pursuit and excellence. Excellence in any work can be
                achieved with extreme commitment, hard work, and firmness. We, at
                CT, have made this maxim our axiom and our way of life in every
                single activity in the campus. As you desire to walk your journey of
                life in our institutions, which has a vibrant atmosphere and a
                vigorous environment, be constructive, be ingenious and be
                committed, for you will see yourself transformed with a new learning
                experience and develop your progressive skills. Our highly educated,
                experienced and motivated staff along with committed team of
                management will implement the most validated methods and means of
                Teaching-Learning Process to provide the quality education and
                academic excellence. We are on an ambitious journey to become one of
                World's top research-intensive institutions. Join our portals,
                create new knowledge, find new portfolios, help thousands of
                students, define their future and change the world.
              </p>
            </div>
            <div className="col-md-4 py-2">
              <img
                src="assets/about/about1.jpeg"
                className="img-fluid"
                alt=""
                style={{ minWidth: 100 }}
              />
            </div>
            <div className="col-md-4 py-2">
              <img
                src="assets/img2/vice.jpeg"
                className="img-fluid"
                alt=""
                style={{ minWidth: 100 }}
              />
            </div>
            <div className="col-md-8">
              <p style={{ textAlign: "justify" }}>
                <b>Vice Chairman- Mr. Harpreet Singh </b> <br />
                <br /> The mission of CT Group is to provide innovative and
                comprehensive educational services and resources to learners from
                various walks of life. We strive to create a positive learning
                environment where everyone has the opportunity to reach their full
                potential. We believe in the power of education and the importance
                of lifelong learning, and we are committed to helping our students
                To achieve this, we offer a holistic approach to education,
                incorporating both traditional and innovative learning styles. Our
                learning community is open to everyone who is invested in our vision
                of transforming lives through education, and we are constantly
                working to expand the resources that we offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default About