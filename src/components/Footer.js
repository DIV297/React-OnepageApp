import React from 'react'


const Footer = () => {
  return (
    <>
    <div>
<footer className="text-center text-lg-start bg-light text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block mx-5">
      <span>Get connected with us on social networks:</span>
    </div>
    

    <div>
      <a href="" className="me-4 mx-5 text-reset">
      <i className='fa fa-facebook'></i>
      </a>
      <a href="" className="me-4 mx-5 text-reset">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="" className="me-4 mx-5 text-reset">
        <i className="fa fa-google"></i>
      </a>
      <a href="" className="me-4 mx-5 text-reset">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="" className="me-4 mx-5 text-reset">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="" className="me-4 mx-5 text-reset">
        <i className="fa fa-github"></i>
      </a>
    </div>
  </section>
  
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 mx-2"></i>Company name
          </h6>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur enim nisi doloremque quaerat est soluta, laborum aut exercitationem eius eligendi dolore, ullam nostrum necessitatibus nobis quas sequi magnam a similique unde obcaecati.
          </p>
        </div>
     
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 mx-2"></i> Chandigarh, 133301, India</p>
          <p>
            <i className="fas fa-envelope me-3 mx-2"></i>
            divbajaj297@gmail.com
          </p>
          <p><i className="fas fa-phone me-3 mx-2"></i> +917837526322</p>
          <p><i className="fas fa-print me-3 mx-2"></i> +917696524373</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
    © 2022 Copyright
  </div>
</footer>
    </div>
    </>
  )
}

export default Footer
