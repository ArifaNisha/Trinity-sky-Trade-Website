import cal from "../../Asserts/calcium.jpg";
import { Link } from "react-router-dom";
import product from "../../Asserts/products.png";
import "./Calcium.css";
export default function Calcium(){

    
    return(
<div className="container-fluid">
<div className="row ">
        <div className="col-md-12 mt-4">
          <img
            src={product}
            alt="page not found"
            className=" img w-100 h-75 opacity-70"
          />
          <h2 className=" products1 display-6 text-white fw-bold opacity-80">
            Products
          </h2>
        </div>

        </div>
    <div className="row m-4 p-4">
 
        <div className="col-md-5 text-end">
            {/* <div className="card w-50 mx-4"> */}
            <img src={cal} alt="not found" className="img-fluid image "/>
            {/* </div> */}
        </div>
        <div className="col-md-6">
            <h1 className=" fw-semibold display-6 px-3">Calcium Chloride For Oil <br/> & Gas Drilling</h1>
            <p className="mt-4 text-secondary fw-semibold fs-5 lh-lg px-3">Pipe sockets, available in MS Black (mild steel black) and GI <br/>(galvanized iron) variants, are essential components in piping<br/> systems for their versatility and durability. Crafted from <br/>high-quality materials, MS Black sockets offer robustness and<br/> corrosion resistance suitable for various industrial applications.<br/> On the other hand, GI sockets are coated with a zinc layer,<br/> providing added protection against rust and corrosion, making<br/> them ideal for outdoor and water-related installations. Both <br/>variants boast precise threading, ensuring secure and <br/>leak-resistant connections, vital for plumbing, construction, and <br/>infrastructure projects where dependable pipe joints are crucial<br/> for seamless and long-lasting operations.
                </p>
                <hr className="text-secondary"/>
                <div className="row contactsection mt-4 mb-4">
                    <div className="col-md-4"> 
                        <Link to="/contact" className="btn1 btn text-white   text-decoration-none fw-semibold fs-5 px-4 p-2 rounded-0">Contact Now</Link>
                    </div>
                    <div className="col-md-4"> 
                        <Link to="" className=" text-black fw-semibold text-decoration-none  mt-5 fs-5 rounded-0"><i class="lni lni-delivery"></i> Free Delivery</Link>
                    </div>
                    <div className="col-md-4"> 
                        <Link to="" className=" text-black fw-semibold text-decoration-none  mt-5 fs-5 rounded-0">  <i class="fa fa-cube"></i> Non Returnable</Link>
               </div>
                </div>
</div>
{/* <div className="col-md-1"></div>  */}
</div>

        <div className="row mx-4 px-4 mt-4">
          
         <div className="col-md-2 "> 
            <h6 className="text-danger fs-5 fw-bold ps-4">Product Details</h6>
        </div>
        <div className="col-md-6 text-start">
            <h6 className="text-secondary  fs-5 fw-bold text-start">Additional Information of the Products</h6>
        </div>
      
        <hr/>
</div>
<div className="row details mx-4 px-4 mb-4 pb-4 mt-3">
    <div className="col-md-2 ">
        <h6 className="fw-bold fs-5 ps-4 ">Appearance </h6>
    </div>
    <div className="col-md-10">
        <h6 className="fs-5 text-secondary">White Powder Granules </h6>
    </div>
    <div className="row   mt-4 pb-4">
    <div className="col-md-2 ">
    <h6 className="fw-bold fs-5 ps-4">Purity</h6>
    </div>
    <div className="col-md-10 text-start">
        <h6 className=" fs-5 text-secondary">Min 93-94% (Powders & Granules),Min(74-75%) Only Powders</h6>
    </div>
    </div>
<div className="row   mb-4 ">
<div className="col-md-2 ">
        <h6 className="fw-bold fs-5 ps-4">Water Insoluble Content </h6>
    </div>
    <div className="col-md-10">
        <h6 className="fs-5 text-secondary"> <i class="fa-thin fa-less-than text-secondary">0.5</i> </h6>
    </div>
</div>
</div>
</div>

    );
}