import { Link } from 'react-router-dom';
import logo from '../../Asserts/logofooter.png'
import "./Footer.css" 
export default function Footer(){
    return(
  
        <div className=" footer-01 ">
            <div className="row foot ">
                <div className='col-sm-1'></div>
                <div className="col-md-4 d-flex justify-content-start align-items-around  ">
              <span> <img src={logo} alt="not found" className='ms-3 w-75  me-0 img-fluid'/><br/>
              <i class="fa fa-close fs-2 ms-4 px-3 mt-4  ms-3 text-secondary"></i>  <i class="fa fa-facebook-square fs-3 text-secondary "></i>
              </span>

             {/* <div> <h4 className='fw-bolder font-monospace text-white'>TRINITY SKY</h4>
              <p className='text-white'>تثلیث آسمان<br/>Trade Simplified</p></div> */}

                               </div>
                <div className='col-md-3'>
                    <ul className='product-items list-unstyled'>
                        <li className="  headpart   fs-4 fw-semibold ">
                        Quick Links
                        </li>
                        <li className='  fs-4 fw-semibold pt-4 '>
                        <Link to ="./Product" className="text-secondary text-decoration-none ">Products</Link>
                        </li>
                        <li className=' fs-4 fw-semibold pt-4'>
                        <Link to ="./About" className="text-secondary text-decoration-none ">About</Link>
                             </li>
                        <li className='fs-4  fw-semibold pt-4'>
                        <Link to ="./contact" className="text-secondary text-decoration-none ">Contact</Link>
                        </li>
                    </ul>
                    </div>
                  
                    <div className='col-md-4 pe-4 '>
                    <ul className='product-items list-unstyled'>
                        <li className=' headpart fs-4 fw-semibold px-2'>
                      Contact Info
                        </li>
                        <li className=' fs-4  d-flex  fw-semibold pt-3 '>
                       <span> <i class="lni lni-map-marker fs-5  px-3 text-secondary"></i></span>
                        <p className='text-secondary'> 73111 PO box,Business Centre,<br/> Sharjah Publishing City Freezone,<br/>Sharjah UAE</p>
                        
                        </li>
                        <li className='  d-flex fs-6 fw-semibold pt-3 '>
                        <span><i class="lni lni-phone fs-4 px-3 text-secondary"> </i></span>
                            <p className='text-secondary fs-4'>UAE : +971 568669466<br/>
                            IND : +91 6385941787</p>
                        </li>
                        <li className=' fs-6 d-flex   fw-semibold  pt-3'>
                       <span> <i class="lni lni-envelope px-3  pt-2 fs-4 text-secondary fw-bold"></i></span>
                        <p className='text-secondary fs-4'>sales@trinity-sky.com</p>
                        </li>
                    </ul>
                   
                </div>
                <hr className='thick-line1 text-secondary '/>
       
            </div>
      
            <div>
                
      <h6 className='text-center fs-4 fw-semibold text-secondary m-0 p-3'>Copyright &#169; 2024 by Trinity-Sky</h6>
      </div>
        </div>

    );
}
