// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Link, useParams } from "react-router-dom"
// function SingleView(){
// let param=useParams()
//            console.log(param.id)
//            const [data,setData]=useState({})
//            const id=param.id
//            useEffect(()=>{
//             let data={
//                 _id:id
//             }
//             axios.post("http://localhost:1000/api/getsingle/department",data)
//             .then((res)=>{
//                 console.log(res)
//                 setData(res.data.data)
//             })
//            },[])

//     return(


//     <>

//   <div className="container">
//       <div className="row text-center">
//           <div className="col-md-4"></div>
//           <div className="col-md-4 py-2"><h2>Single Department</h2></div>
//           <div className="col-md-4 py-2 text-end">
//               <Link to={"/adminmaster/managedep"} className="btn btn-primary btn-lg ">Back</Link>
//           </div>


//       </div>
      

//   <table class="table table-bordered table-hover">
// <tbody>
//   <tr>

//       <th>Department Name</th>
 
//   </tr>
  
    
//                   <tr>
       
//                       <td>{data.departmentName}</td>


//                   </tr>

  
// </tbody>
// </table>  
//   </div>

// </>
        
//     )
// }
// export default SingleView