import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

export default function NewLogin(){
    //npm i react-hook-form
    //formik
    const {register, handleSubmit, reset, formState:{errors}}=useForm()
    const handleForm=(data)=>{
        // console.log(data);
        axios.post("https://kizaapi.ksesystem.com/api/user/add",data)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
                reset()
            }
        })
    }
    const handleError=(errors)=>{
        console.log(errors);
    }
    return(
        <>
        <form onSubmit={handleSubmit(handleForm,handleError)}>
            <label>Name</label>
            <input {...register("name",{required:true,pattern:/^[a-z]{1,9}$/})}/>
            {errors.name && errors.name.type=="required" ? <span className="text-danger">This is required</span>:""}
            {errors.name && errors.name.type=="pattern" ?<span className="text-danger">Length must be less than 10</span> :""}
            <br/>
            
            <label>Email</label>
            <input {...register("email")}/>
            <br/>
            <label>Password</label>
            <input {...register("password")}/>
            <br/>
            <button>Submit</button>
        </form>
        </>
    )
}