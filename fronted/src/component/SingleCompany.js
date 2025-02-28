// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { Link } from "react-router-dom"
// import axios from "axios"
// function SingleCompany(){
//     const [data,setData]=useState({})
//     let param=useParams()
//     const id=param.id
//     // const departmentId=param.departmentId
//     // const courseId=param.courseId
//     useEffect(()=>{
//         let data={
//             _id:id,
//     //         departmentId:departmentId,
//     //         courseId:courseId

//         }
//         axios.post("http://localhost:1000/api/getsingle/company",data)
//         .then((res)=>{
//             console.log(res.data.data)
//             setData(res.data.data)
            
//         })
//     },[])
//     return(
//         <>
//           <div className="container">
//                 <div className="row text-center">
//                     <div className="col-md-4"></div>
//                     <div className="col-md-4 py-2"><h2>Single Stundent</h2></div>
//                     <div className="col-md-4 py-2 text-end">
//                         <Link to={"/adminmaster/managecompany"} className="btn btn-primary btn-lg ">Back</Link>
//                     </div>
//                 </div>
//                 <table class="table table-bordered table-hover">
//                     <tbody>
//                         <tr>
                        
//             <th>Name</th>
//             <th>Email</th>
//             <th>Description</th>
//             <th>Logo</th>
//             <th>Contact</th>
         
//             <th>Address</th>
//                         </tr>
//                         <tr>
//                             <td>{data.name}</td>
//                             <td>{data.email}</td>
//                             <td>{data.Description}</td>
//                             <td><img src={"http://localhost:1000/"+data.Logo} style={{maxWidth:200,}}></img></td>

//                             <td>{data.contact}</td>
//                             <td>{data.address}</td>


//                             {/* <td>{data.departmentId?.departmentName}</td>
//                             <td>{data.courseId?.courseName}</td>
//                             <td>{data.contact}</td>
//                             <td><img src={"http://localhost:1000/"+data.profile} style={{maxWidth:200}} /></td>
//                             <td>{data.address}</td> */}

                            



//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }
// export default SingleCompany