import { Link } from "react-router-dom"
function AdminHeader() {
  return (
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
            style={{ marginLeft: 70 }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/adminmaster/dashboard"}>
                  Home
                </Link>
              </li>

              
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Department
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to={"/adminmaster/adddep"}>Add</Link></li>
                  <li><Link class="dropdown-item" to={"/adminmaster/managedep"}>Manage</Link></li>


                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Course
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to={"/adminmaster/addcourse"}>Add</Link></li>
                  <li><Link class="dropdown-item" to={"/adminmaster/managecourse"}>Manage</Link></li>


                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Student
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to={"/adminmaster/addstudent"}>Add</Link></li>
                  <li><Link class="dropdown-item" to={"/adminmaster/managestudent"}>Manage</Link></li>


                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to={"/adminmaster/addcompany"}>Add</Link></li>
                  <li><Link class="dropdown-item" to={"/adminmaster/managecompany"}>Manage</Link></li>


                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/adminmaster/managejob"}>
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/adminmaster/manageapp"}>
                  Application
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/admin"}>
                  Logout
                </Link>
              </li>

              {/* <li className="nav-item">
                  <Link className="nav-link" to={""}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={""}>
                    Placed student
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={""}>
                    Course
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={""}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={""}>
                    Admin
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
export default AdminHeader