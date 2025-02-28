import Footer from "./Footer"
import Header from "./Header"
import CountUp from 'react-countup';

function Home() {
  
  return (
    <>


      {/*section start*/}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ overflow: "hidden", paddingTop: 100 }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/img/section1.png"
              className="d-block w-100"
              alt="..."
              style={{ minWidth: 500 }}
            />
            <div className="carousel-caption d-none d-xl-block">
              <h2 style={{ fontSize: 80 }} id="para">
                Learning <span>Today</span>
              </h2>
              <h2 style={{ fontSize: 80 }} id="para1">
                Leading <span>Tomorrow</span>
              </h2>
              <a href="" className="btn btn-primary">
                GET INFO
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="assets/img/ctbanner2.png"
              className="d-block w-100"
              alt="..."
              style={{ minWidth: 500 }}
            />
            <div className="carousel-caption d-none d-xl-block">
              <h2 style={{ fontSize: 80 }} id="para">
                Learning <span>Today</span>
              </h2>
              <h2 style={{ fontSize: 80 }} id="para1">
                Leading <span>Tomorrow</span>
              </h2>
              <a href="" className="btn btn-primary">
                GET INFO
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="assets/img/section1.png"
              className="d-block w-100"
              alt="..."
              style={{ minWidth: 500 }}
            />
            <div className="carousel-caption d-none d-xl-block">
              <h2 style={{ fontSize: 80 }} id="para">
                Learning <span>Today</span>
              </h2>
              <h2 style={{ fontSize: 80 }} id="para1">
                Leading <span>Tomorrow</span>
              </h2>
              <a href="" className="btn btn-primary">
                GET INFO
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*section end*/}
      {/* counter start */}
      <div className="container py-5 fs-1 fw-bold text-center">
      <div className="row">
        <div className="col-md-3 my-3 py-2 shadow" >
          <CountUp start={501} end={1520} duration={4} /><br/>
          <h1 className="bi bi-person fs-2 py-2"><span className="fs-4">Student</span></h1>
        </div>
        <div className="col-md-3 my-3 py-2 shadow">
        <CountUp start={20} end={60} duration={4} />
        <br/>
          <h1 className="bi bi-search fs-2 py-2"><span className="fs-4"> Job Posted</span></h1>
        </div>
        <div className="col-md-3 my-3 py-2 shadow">
        <CountUp start={30} end={120} duration={4} />
        <br/>
          <h1 className="bi bi-bag-check-fill fs-2 py-2"><span className="fs-4"> Job Filled</span></h1>
        </div>
        <div className="col-md-3 my-3 py-2 shadow">
        <CountUp start={300} end={550} duration={4} />
          <br/>
          <h1 className="bi bi-building fs-2 py-2"><span className="fs-4"> Companies</span></h1>

        </div>

      </div>
    </div>
      {/* counter end */}
      {/*courses start*/}
      <div className="container-fluid">
        <div className="container py-2">
          <h2 className="fw-bold">POPULAR COURSES</h2>
          <div className="row py-4">
            <div className="col-md-4 py-2">
              <div className="card">
                <img
                  src="assets/img/ct7.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ height: 259 }}
                />
                <div className="card-body">
                  <h5 className="btn btn-primary">B.tech CSE</h5>
                  <h5 className="card-title text-dark">
                    Computer science &amp; Engineering
                  </h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    {" "}
                    Computer Science Engineering is a course that deals with the
                    design, implementation, and management of information systems of
                    both software and hardware processes
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" />
                    <li className="list-group-item">
                      <p>
                        <img
                          src="assets/testimonials/testimonials-1.jpg"
                          alt=""
                          style={{ width: 60, borderRadius: 40 }}
                        />
                        <span style={{ paddingLeft: 200 }}>
                          <i className="bi bi-person" /> 65
                        </span>{" "}
                        <span>
                          <i className="bi bi-heart" /> 50
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2">
              <div className="card" style={{ maxWidth: 500 }}>
                <img
                  src="assets/img/cfd1.jpg"
                  className="card-img-top"
                  alt="..."
                  height="260px"
                />
                <div className="card-body" style={{height:"330px",}}>
                  <h5 className="btn btn-primary">BHM</h5>
                  <h5 className="card-title text-dark">
                    {" "}
                    Bachelor of Hotel management
                  </h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    {" "}
                    This can include managing hotel services, overseeing events,
                    devising strategies, solving problems, and meeting with business
                    partners.{" "}
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" />
                    <li className="list-group-item">
                      <p>
                        <img
                          src="assets/testimonials/testimonials-4.jpg"
                          alt=""
                          style={{ width: 60, borderRadius: 40 }}
                        />
                        <span style={{ paddingLeft: 200 }}>
                          <i className="bi bi-person" /> 70
                        </span>{" "}
                        <span>
                          <i className="bi bi-heart" /> 56
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2">
              <div className="card" style={{ maxWidth: 500 }}>
                <img src="assets/img/bn.jpg" className="card-img-top" height="260px" alt="..." />
                <div className="card-body"  style={{height:"330px",}}>
                  <h5 className="btn btn-primary">M.tech CSE</h5>
                  <h5 className="card-title text-dark">Master of Technology</h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    {" "}
                    It is the process of planning,implementing the plan for
                    designing a website in a way that is functional and offers a
                    good user experience
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" />
                    <li className="list-group-item">
                      <p>
                        <img
                          src="assets/testimonials/testimonials-5.jpg"
                          alt=""
                          style={{ width: 60, borderRadius: 40 }}
                        />
                        <span style={{ paddingLeft: 200 }}>
                          <i className="bi bi-person" /> 80
                        </span>{" "}
                        <span>
                          <i className="bi bi-heart" /> 96
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="assets/trainers/trainer-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>Mr.Inderapl singh</h5>
                  <p className="text-dark">
                    <i>HOD</i>
                  </p>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    You are the best lecturer I have ever come across. I thank you
                    very much and will always remember you.{" "}
                  </p>
                  <p style={{ color: "black" }}>
                    <a href="https://www.twitter.com" id="lp">
                        <i className="bi bi-twitter" />
                    </a>
                    <a href="https://www.facebook.com" id="lp">
                      
                       <i className="bi bi-facebook" />
                    </a>
                    <a href="https://www.instagram.com" id="lp">
                      
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="https://www.facebook.com" id="lp">
                      
                      <i className="bi bi-linkedin" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2">
              <div className="card">
                <img
                  src="assets/trainers/trainer-2.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>Mrs.Mamta Devi</h5>
                  <p>
                    <i>Assistant Professor</i>
                  </p>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    {" "}
                    You are the best lecturer I have ever come across. I thank you
                    very much and will always remember you.
                  </p>
                  <p>
                    <a href="https://www.twitter.com" id="lp">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="https://www.facebook.com" id="lp">
                      
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="https://www.instagram.com" id="lp">
                      
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="https://www.facebook.com" id="lp">
                      
                      <i className="bi bi-facebook" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-2">
              <div className="card">
                <img
                  src="assets/trainers/trainer-3.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>Mr.vikas </h5>
                  <p>
                    <i>Copywriting</i>
                  </p>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    {" "}
                    You are the best lecturer I have ever come across. I thank you
                    very much and will always remember you.
                  </p>
                  <p>
                    <a href="https://www.twitter.com" id="lp">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="https://www.facebook.com" id="lp"> 
                     
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="https://www.instagram.com" id="lp">
                     
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="https://www.facebook.com" id="lp">
                     
                      <i className="bi bi-facebook" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*courses end*/}
      {/*gallery start*/}
      <div className="container-fluid">
        <div className="container py-4">
          <h1 className="fw-bold ">Image Gallery</h1>
          <div className="row py-3  text-center">
            <div className="col-md-4 py-2">
              <img
                src="assets/img2/i2.jpg"
                className="img-fluid"
                width="515px"
                alt=""
                style={{ minWidth: 200 }}
              />
            </div>
            <div className="col-md-4 py-2">
              <img
                src="assets/img2/i1.jpg"
                className="img-fluid"
                width="515px"
                alt=""
                style={{ minWidth: 200 }}
              />
            </div>
            <div className="col-md-4 py-2">
              <img
                src="assets/img2/i4.jpg"
                className="img-fluid"
                width="515px"
                alt=""
                style={{ minWidth: 200 }}
              />
            </div>
            <div className="col-md-4 py-2 ">
              <img
                src="assets/img2/ct-group-of-institutions-jalandhar-105166.jpg"
                className="img-fluid"
                alt=""
                style={{ minWidth: 200 }}
              />
            </div>
            <div className="col-md-4 py-2 ">
              <img
                src="assets/img2/ct-group-of-institutions-jalandhar-105169.jpg"
                className="img-fluid"
                alt=""
                style={{ minWidth: 200 }}
              />
            </div>
            <div className="col-md-4 py-2">
              <img
                src="assets/img2/ct-group-of-institutions-jalandhar-105165.jpg"
                className="img-fluid"
                alt=""
                style={{ minWidth: 200,width:"390px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/*gallery end*/}
    </>






  )
}
export default Home