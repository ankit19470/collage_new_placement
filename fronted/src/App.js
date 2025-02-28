import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./component/layouts/Master";
import Contact from "./component/layouts/Contact";
import Error from "./component/layouts/Error";
import Home from "./component/layouts/Home";
import About from "./component/layouts/About";
import Placed from "./component/layouts/Placed";
import Admin from "./component/layouts/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import AdminMaster from "./component/admin/AdminMaster";
import AddStudent from "./component/admin/AddStudent";
import ManageStudent from "./component/admin/ManageStudent";
import UpdateStudent from "./component/admin/UpdateStudent";
import AddCompany from "./component/admin/company/AddCompany";
import ManageCompany from "./component/admin/company/ManageCompany";
import UpdateCompany from "./component/admin/company/UpdateCompany";
import AddCourse from "./component/admin/course/AddCourse";
import ManageCourse from "./component/admin/course/ManageCourse";
import UpdateCourse from "./component/admin/course/UpdateCourse";

import Dashboard from "./component/admin/dashboard/Dashboard";
import ManageJob from "./component/admin/jobs/ManageJob";
import ManageApp from "./component/admin/applicant/ManageApp";
import Company from "./component/layouts/Company";
import CompanyMaster from "./component/company/CompanyMaster";
import Addjobs from "./component/company/job/Addjob";
import ManageJobs from "./component/company/job/ManageJobs";
import UpdateJob from "./component/company/job/UpdateJob";
import ViewApplicant from "./component/company/application/ViewApplicant";
import StudentMaster from "./component/student/StudentMaster";
import ViewApplication from "./component/student/application/ViewApplication";
import Student from "./component/layouts/Student";
import CompanyHome from "./component/company/CompanyHome";
import StudentHome from "./component/student/StudentHome";
import ViewJob from "./component/student/job/ViewJob";

import AddDep from "./component/admin/department/AddDep";
import ManageDep from "./component/admin/department/ManageDep";
import UpdateDep from "./component/admin/department/UpdateDep";
import SingleView from "./component/SingleView";
import SingleCourse from "./SingleCourse";
import SingleStudent from "./component/SingleStudent";
import SingleCompany from "./component/SingleCompany";
import SingleJob from "./component/SingleJob";
import New from "./component/New";
import NewLogin from "./component/New";
import ChangePassword from "./component/ChangePassword";
import ChangePassCom from "./component/changePassCom";









function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

      </header>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Master />}>
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path='/placed' element={<Placed />} />
            {/* <Route path='/admin' element={<Admin />} /> */}
            {/* <Route path='/company' element={<Company />} /> */}
    

          </Route>
          <Route path='/student' element={<Student />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/company' element={<Company />}></Route>

          <Route path='/adminmaster' element={<AdminMaster />}>
            <Route path='/adminmaster/dashboard' element={<Dashboard />} />
            <Route path='/adminmaster/addstudent' element={<AddStudent />} />
            <Route path='/adminmaster/managestudent' element={<ManageStudent />} />
            <Route path='/adminmaster/updatestudent/:id' element={<UpdateStudent />} />
            <Route path='/adminmaster/addcompany' element={<AddCompany />} />
            <Route path='/adminmaster/managecompany' element={<ManageCompany />} />
            <Route path='/adminmaster/updatecompany/:id' element={<UpdateCompany />} />
            <Route path='/adminmaster/addcourse' element={<AddCourse />} />
            <Route path='/adminmaster/managecourse' element={<ManageCourse />} />

            <Route path='/adminmaster/updatecourse/:id' element={<UpdateCourse />} />
            <Route path='/adminmaster/adddep' element={<AddDep />} />
            <Route path='/adminmaster/managedep' element={<ManageDep />} />

            <Route path='/adminmaster/updatedep/:id' element={<UpdateDep />} />
            <Route path='/adminmaster/managejob' element={<ManageJob />} />
            <Route path='/adminmaster/manageapp' element={<ManageApp />} />


          </Route>
          {/* <Route path='/singlecourse/:id' element={<SingleCourse/>}></Route> */}
          {/* <Route path='/singleview/:id' element={<SingleView/>}></Route> */}
          {/* <Route path='/singlecourse/:id' element={<SingleCourse/>}></Route> */}
          {/* <Route path='/singlestudent/:id' element={<SingleStudent/>} ></Route> */}
          {/* <Route path='/singlecompany/:id' element={<SingleCompany/>} ></Route> */}
          {/* <Route path='/singlejob/:id' element={<SingleJob/>} ></Route> */}

          <Route path='/changepassword' element={<ChangePassword />}></Route>
          <Route path='/changepasswords' element={<ChangePassCom />}></Route>
          <Route path='/companymaster' element={<CompanyMaster />}>
            <Route path='/companymaster/home' element={<CompanyHome />} />

            <Route path='/companymaster/addjob' element={<Addjobs />} />
            <Route path='/companymaster/managejob' element={<ManageJobs />} />
            <Route path='/companymaster/updatejob/:id' element={<UpdateJob />} />


            {/* <Route path='/companymaster/viewapplication' element={<ViewApplicant />} /> */}

          </Route>

          <Route path='/studentmaster' element={<StudentMaster />}>
            <Route path='/studentmaster/home' element={<StudentHome />} />
            <Route path='/studentmaster/viewjob' element={<ViewJob />} />
            <Route path='/studentmaster/viewapplication' element={<ViewApplication />} />
          </Route>
          <Route path='/new' element={<NewLogin />} ></Route>





        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>

  );
}

export default App;
