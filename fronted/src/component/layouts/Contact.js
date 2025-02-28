import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ApiServices from "../ApiServices";
import { useForm } from "react-hook-form";
function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const handleForm = (data) => {
    ApiServices.addContact(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          reset()
        }
      })
  }
  return (
    <>
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Contact us<br /><Link to={"/home"} className="nav-link" style={{ fontSize: "15px", marginLeft: "-20px" }}>HOME/CONTACT</Link></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4">
        <div className="container">
          <p className="fs-1 fw-bold">Contact us</p>
          <form onSubmit={handleSubmit(handleForm)} >
            <div className="row">
              <div className="col-md-6">
                <div className="row py-3">
                  <div className="col-md-6 py-1">
                    <input className="form-control" placeholder="First name" {...register("firstName", { required: true, pattern: /^[A-Z]{1}[a-z]{1,9}$/ })}
                    />
                    {errors.firstName && errors.firstName.type == "required" ? <span className="text-danger">This is required</span> : ""}
                    {errors.firstName && errors.firstName.type == "pattern" ? <span className="text-danger">Firstletter Uppercase & Length must be less than 10</span> : ""}
                  </div>
                  <div className="col-md-6 py-1">
                    <input
                      className="form-control"
                      placeholder="Last name"
                      {...register("lastName", { required: true, pattern: /^[A-Z]{1}[a-z]{1,9}$/ })}
                    />
                    {errors.lastName && errors.lastName.type == "required" ? <span className="text-danger">This is required</span> : ""}
                    {errors.lastName && errors.lastName.type == "pattern" ? <span className="text-danger">Firstletter Uppercase & Length must be less than 10</span> : ""}
                  </div>
                </div>
                <input
                  className="form-control"
                  placeholder="Enter Email"
                  {...register("email", { required: true, pattern: /^[a-zA-z0-9\.\_\-]+\@+[a-zA-z0-9]+\.+[a-zA-z]{2,3}$/ })}
                />
                {errors.email && errors.email.type == "required" ? <span className="text-danger">This is required</span> : ""}
                {errors.email && errors.email.type == "pattern" ? <span className="text-danger">Please enter a valid Email Address </span> : ""}
                <br />
                <input
                  className="form-control"
                  placeholder="Address"
                  {...register("address", { required: true, maxLength: 30 })}
                />
                {errors.address && errors.address.type == "required" ? <span className="text-danger">This is required</span> : ""}
                {errors.address && errors.address.type == "maxLength" ? <span className="text-danger">Length must be less than 30</span> : ""}
                <br />
                <input
                  className="form-control"
                  placeholder="Contact"
                  {...register("contact", { required: true, pattern: /^[6-9]{1}[0-9]{9}$/ })}
                />
                {errors.contact && errors.contact.type == "required" ? <span className="text-danger">This is required</span> : ""}
                {errors.contact && errors.contact.type == "pattern" ? <span className="text-danger">Please enter valid Phone Number</span> : ""}
                <br />
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
              <div className="col-md-6 py-2" style={{ overflow: "hidden" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.037696741541!2d75.55768107532438!3d31.357938955149702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a50711d4986d3%3A0xed348b061524c132!2sCT%20Group%20Of%20Institutions!5e0!3m2!1sen!2sin!4v1696260795532!5m2!1sen!2sin"
                  width={600}
                  height={320}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Contact