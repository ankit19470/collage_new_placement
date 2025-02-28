import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
function SingleJob(){
    const [data,setData]=useState({})
    let param=useParams()
    const id=param.id
 
    useEffect(()=>{
        let data={
            _id:id,
        }
        axios.post("http://localhost:1000/api/getsingle/jobpost",data)
        .then((res)=>{
            console.log(res.data.data)
            setData(res.data.data)
            
        })
    },[])
    return(
        <>
          <div className="container">
                <div className="row text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 py-2"><h2>Single Job</h2></div>
                    <div className="col-md-4 py-2 text-end">
                        <Link to={"/companymaster/managejob"} className="btn btn-primary btn-lg ">Back</Link>
                    </div>
                </div>
                <table class="table table-bordered table-hover">
                    <tbody>
                        <tr>
                        
            <th>job Title</th>
            <th>Description</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>company</th>

            
                        </tr>
                        <tr>
                         <td>{data.Title}</td>
                            <td>{data.Description}</td>
                            <td>{data.Salary}</td>
                            <td>{data.Experience}</td>
                            {/* <td>({data.companyId.name})-({data.companyId.email})-({data.companyId.Description})</td> */}



                          

                            



                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default SingleJob