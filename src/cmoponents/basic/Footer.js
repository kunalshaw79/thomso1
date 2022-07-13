import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Footer = () => {
    return (
        <>
            <footer id='foot'>
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="heading">
                                    N2O Gaming
                                </h6>
                                <p >
                                    Our online digital gaming entertainment solutions support a unique and unparalleled competition experience to achieve your business goals.
                                </p>
                                <br />
                                <i class="bi bi-instagram"></i>
                                <i class="bi bi-youtube"></i>
                                <i class="bi bi-facebook"></i>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Pages
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Feature</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Partner</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">About</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Company
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">About Us</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Booking</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Press</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
            </footer>
        </>
    )
}
export default Footer