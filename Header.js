import { Link } from "react-router-dom";
import logo from "../../Asserts/logo1.png";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      {/* <div class=""> */}
      <div className="row align-items-center ms-4">
        <nav class="navbar navbar-expand-sm ">
  
          <div className="col-sm-4 d-flex justify-content-end ">
            <Link className="navbar-brand text-center" to="">
          
                <img
                  src={logo}
                  alt="not found"
                  className="w-80 img-fluid "
                />
                <br />

                <div>
              </div>
            </Link>
          </div>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
          {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">  */}
          {/* <div className='col-md-1'></div> */}
          <div className="col-md-7">
            <div className="row pt-2">
              <div className="col-sm-6  d-flex justify-content-end ">
                <i class="lni lni-whatsapp fs-5 px-3 "></i>
                <p className="fw-semibold fs-6"> UAE:+971 568669466</p>
              </div>
              <div className="col-sm-6   d-flex  justify-content-start ">
                {/* <i class="lni lni-phone fs-4 px-2"> </i> */}
                <i class="fa-solid fa-phone fs-5 px-3"></i>
                <p className=" fw-semibold fs-6"> UAE:+971 568669466</p>
              </div>
              
            </div>
           
            <div className="row  px-3">
            <hr class="thick-line"/>
        <div className="col-md-1"></div>
              <div class="col-md-3 col-lg-3 p-2 ">
                <Link
                  className="fs-5 fw-bold home text-decoration-none"
                  aria-current="page"
                  to="./"
                >
                  Home
                </Link>
              </div>
              <div class="col-md-3  col-lg-3 p-2">
                <Link
                  className="fs-5 fw-bold  text-black text-decoration-none "
                  aria-current="page"
                  to="./products"
                >
                  Products
                </Link>
              </div>
              <div class="col-md-3  col-lg-3 p-2">
                <Link
                  className="fs-5 fw-bold  text-black text-decoration-none "
                  aria-current="page"
                  to="./about"
                >
                  About
                </Link>
              </div>
              <div class="col-sm-2 col-lg-2 p-2">
                <Link
                  className=" fs-5 fw-bold text-black text-decoration-none "
                  aria-current="page"
                  to="./contact"
                >
                  Contact
                </Link>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
