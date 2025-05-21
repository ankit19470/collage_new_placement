import { Link } from "react-router-dom"
function Header(){
    return(
<>
  {/*header start*/}
  <nav
    className="navbar navbar-expand-lg"
    style={{
      position: "fixed",
      zIndex: 1,
      width: "100%",
      backgroundColor: "white"
    }}
  >
    <div className="container-fluid ">
      <Link to={"/home"} className="navbar-brand px-5">
        <img
          src="/assets/logo/c2.jpeg"
          alt=""
          style={{ minWidth: 50, width: 80 }}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse px-5"
        id="navbarSupportedContent"
        style={{ marginLeft: 150 }}
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to={"/home"}>
              Home
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to={"/chat"}>
              Chat
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/placed"}>
              Placed student
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              Course
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/chat"}>
              ChatBot
            </Link>
          </li>
                  <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Login
                  </Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to={"/admin"}>Admin</Link></li>
                    <li><Link class="dropdown-item" to={"/company"}>Company</Link></li>
                    <li><Link class="dropdown-item" to={"/student"}>Student</Link></li>

                  </ul>
                </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to={"/company"}>
              Compnay
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
  {/*header end*/}
</>

    )
}
export default Header