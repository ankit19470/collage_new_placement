import { Link } from "react-router-dom"
function Placed(){
    return(
        <>
  {/*gallery start*/}
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Placed us<br/><Link to={"/home"} className="nav-link" style={{fontSize:"15px",marginLeft:"-20px"}}>HOME/PLACED</Link> </h1>
            </div>
          </div>
        </div>
      </div>
  <div className="container-fluid py-5 ">
    <div className="container-md">
      <div className="row px-5">
        <h1 className="fw-bold py-2">Our Placed Student</h1>
      </div>
      <div className="row px-5">
        <div className="col-md-4">
          <img src="assets/placed/p6.jpg" className="d-block w-100" alt="" />
        </div>
        <div className="col-md-4">
          <img src="assets/placed/p7.jpg" className="d-block w-100" alt="" />
        </div>
        <div className="col-md-4">
          <img src="assets/placed/p8.jpg" className="d-block w-100" alt="" />
        </div>
        <div className="col-md-4">
          <img src="assets/placed/p9.jpg" className="d-block w-100" alt="" />
        </div>
        <div className="col-sm-4 col-md-4 col-xl-4 py-2">
          <img src="assets/placed/p10.jpg" className="d-block w-100" alt="" />
        </div>
        <div className="col-sm-4 col-md-4 col-xl-4 py-2">
          <img src="assets/placed/p11.jpg" className="d-block w-100" alt="" />
        </div>
        <div className="col-sm-4 col-md-4 col-xl-4 py-2 px-">
          <img src="assets/placed/p1.jpg" className="d-block w-100" alt="" />
        </div>
        <div className="col-sm-4 col-md-4 col-xl-4 py-2">
          <img src="assets/placed/p2.webp" className="d-block w-100" alt="" />
        </div>
        <div className="col-sm-4 col-md-4 col-xl-4 py-2">
          <img src="assets/placed/p3.webp" className="d-block w-100" alt="" />
        </div>
        <div className="col-sm-4 col-md-4 col-xl-4 py-2">
          <img src="assets/placed/p4.webp" className="d-block w-100" alt="" />
        </div>
        <div className="col-sm-4 col-md-4 col-xl-4 py-2">
          <img src="assets/placed/p5.webp" className="d-block w-100" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/*gallery end*/}
</>

    )
}
export default Placed