import axios from "axios";
// import * as qs from "qs"
import * as qs from "qs"

export const BASE_URL = "http://localhost:1000/"

class ApiServices {
        // Department
        getToken() {
            let obj = {
                headers: {
                    Authorization: sessionStorage.getItem("token")
                }
            }
            return obj  
        }
    manageDepartment() {
        return axios.post(BASE_URL + "api/getall/department")
        // axios.post("http://localhost:1000/api/getall/department", deptIdData)

    }
    addDepartment(data) {
        return axios.post(BASE_URL + "api/add/department", data)
    }
    singleDep(data) {
        return axios.post(BASE_URL + "api/getsingle/department", data)
    }
    updateDep(data) {
        return axios.post(BASE_URL + "api/update/department", data)
    }
    deleteDep(data) {
        return axios.post(BASE_URL + "api/delete/department", data)
    }
    
    // course
    addCourse(data) {
        return axios.post(BASE_URL + "api/add/course", data)
    }
    manageCourse(data) {
        return axios.post(BASE_URL + "api/getall/course", data)
        // axios.post("http://localhost:1000/api/getall/course", courseIdData)

    }
    deleteCourse(data) {
        return axios.post(BASE_URL + "api/delete/course", data)
    }
    singleCourse(data) {
        return axios.post(BASE_URL + "api/getsingle/course", data)
    }
    updateCourse(data) {
        return axios.post(BASE_URL + "api/update/course", data)
    }

    //student

    addStudent(data) {
        return axios.post(BASE_URL + "api/add/student", data, this.getToken())
    }
    manageStudent() {
        return axios.post(BASE_URL + "api/getall/student")
    }
    singleStudent(data) {
        return axios.post(BASE_URL + "api/singleget/student", data)
    }
    updateStudent(data) {
        return axios.post(BASE_URL + "api/update/student", data)
    }

    loginStudent(data) {
        return axios.post(BASE_URL + "api/login/student", data)
    }
    // axios.post("http://localhost:1000/api/login/student", data)

    changeStatus(data) {
        return axios.post(BASE_URL + "api/delete/student", qs.stringify(data))

    }

    //axios.post("http://localhost:1000/api/delete/student", qs.stringify(data))

    // axios.post("http://localhost:1000/api/delete/company", qs.stringify(data))

    //job

    manageJob(data) {
        return axios.post(BASE_URL + "api/getall/jobpost", data)
    }

    addJob(data) {
        return axios.post(BASE_URL + "api/add/jobpost", data)
    }
    // axios.post("http://localhost:1000/api/getall/company",companyIdData)
    // axios.post("http://localhost:1000/api/delete/jobpost",data)
    deleteJob(data) {
        return axios.post(BASE_URL + "api/delete/jobpost", data)
    }


    // application
    manageApp(data) {
        return axios.post(BASE_URL + "api/getall/application", data)
    }
    addapp(data) {
        return axios.post(BASE_URL + "api/add/application", data, this.getToken())
    }


    //company
    //  axios.post("http://localhost:1000/api/add/company",data,{obj})
    addCompany(data) {
        return axios.post(BASE_URL + "api/add/company", data, this.getToken())

    }

    loginCompany(data) {
        return axios.post(BASE_URL + "api/login/company", data)
    }
    deleteCompany(data) {
        return axios.post(BASE_URL + "api/delete/company", qs.stringify(data))
    }
    manageCompany() {
        return axios.post(BASE_URL + "api/getall/company")
    }
    singleCompany(data) {
        return axios.post(BASE_URL + "api/getsingle/company", data)
    }
    updateCompany(data) {
        return axios.post(BASE_URL + "api/update/company", data)
    }
    dashBoard() {
        return axios.post(BASE_URL + "api/admin/dashboard")

    }
    jobChangeStatus(data) {
        return axios.post(BASE_URL + "api/changeStatus/application", data)
    }
    changePassword(data) {
        return axios.post(BASE_URL + "api/changepassword/user", data, this.getToken())
    }
    // axios.post("http://localhost:1000/api/login/student", data)


// contact
addContact(data){
    return axios.post(BASE_URL + "api/add/contact",data)
}

// axios.post("http://localhost:1000/api/add/contact",data)



}
export default new ApiServices