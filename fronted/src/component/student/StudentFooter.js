function StudentFooter(){
    return(
        <>
        {/*footer start*/}
        <div
          className="container-fluid"
          style={{
            backgroundImage:
              "linear-gradient(181.2deg, rgb(181, 239, 249) 10.5%, rgb(254, 254, 254) 86.8%)"
          }}
        >
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <h6 className="fs-3">
                  Top<span className="text-primary"> Colleges</span>
                </h6>
                <p>
                  <i className="bi bi-chevron-right" /> M.B.A
                </p>
                <p>
                  <i className="bi bi-chevron-right" /> B.TECH/B.E
                </p>
                <p>
                  <i className="bi bi-chevron-right" /> MCA
                </p>
                <p>
                  <i className="bi bi-chevron-right" /> BCA
                </p>
                <p>
                  <i className="bi bi-chevron-right" /> M.TECH
                </p>
              </div>
              <div className="col-md-3">
                <h6 className="fs-3">
                  Useful <span className="text-primary">Links</span>
                </h6>
                <p>
                  <i className="bi bi-chevron-right" /> Home
                </p>
                <p>
                  <i className="bi bi-chevron-right" /> About{" "}
                </p>
                <p>
                  <i className="bi bi-chevron-right" /> Services
                </p>
                <p>
                  <i className="bi bi-chevron-right" /> Term our Services
                </p>
                {/* <p><i class="bi bi-telephone"></i> 0181 500 965</p>
      <p><i class="bi bi-envelope"></i> info@group.in</p> */}
              </div>
              <div className="col-md-3">
                <h6 className="fs-3">
                  Our <span className="text-primary">Services</span>
                </h6>
                <p>
                  <i className="bi bi-chevron-right" /> Contact
                </p>
                <p>
                  <i className="bi bi-chevron-right" /> Courses
                </p>
                <p>
                  <i className="bi bi-chevron-right" /> Career
                </p>
                <p>
                  <i className="bi bi-chevron-right" /> Privacy Policy
                </p>
              </div>
              <div className="col-md-3">
                <h6 className="fs-3">
                  Get in <span className="text-primary">Touch</span>
                </h6>
                <p>
                  CT Group of institutions is among the best colleges for graduation
                  and post graduation degrees in Jalandhar, Punjab <br />
                  <br />
                  Greater Kailash, Grand Trunk Road, Maqsudan, Jalandhar, Punjab
                  144008
                </p>
                <p>
                  <i className="bi bi-telephone" /> 0181 500 965
                </p>
                <p>
                  <i className="bi bi-envelope" /> info@group.in
                </p>
              </div>
            </div>
            <hr />
            {/*copyright start*/}
            <div className="row text-center">
              <div className="col-sm-12">
                <p>
                  © Copyright CT Group. All Rights Reserved created by Ankit sharma
                </p>
                <p style={{ wordSpacing: 5 }}>
                  <i className="bi bi-twitter" /> <i className="bi bi-facebook" />{" "}
                  <i className="bi bi-instagram" /> <i className="bi bi-linkedin" />
                </p>
              </div>
            </div>
            {/*copyright end*/}
          </div>
        </div>
        {/*footer end*/}
      </>
    )
    }
    export default StudentFooter