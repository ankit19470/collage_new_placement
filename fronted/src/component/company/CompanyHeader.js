import { Link } from "react-router-dom"
function CompanyHeader(){
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
      <div className="container-fluid">
        <a className="navbar-brand px-5">
          <img
            src="/assets/logo/c2.jpeg"
            alt=""
            style={{ minWidth: 50, width: 80 }}
          />
        </a>
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
              <Link className="nav-link" to={"/companymaster/home"}>
                Home
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Jobs
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to={"/companymaster/addjob"}>Add</Link></li>
                <li><Link class="dropdown-item" to={"/companymaster/managejob"}>Manage</Link></li>


              </ul>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/changepasswords"}>
                Change Password
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/company"}>
                Logout
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
    {/*header end*/}
  </>
)
}
export default CompanyHeader