import ser1 from "../../Asserts/Services_1.jpg";
import ser2 from "../../Asserts/Services_2.jpg";
import ser3 from "../../Asserts/Services_3.jpg";
import ship from "../../Asserts/Quality Policy_2.jpg";
import "./Servicess.css";
export default function Servicess() {
  return (
    <div className="services">
      <h5 className="text-center"> Our Services</h5>
      <h4 className="display-6 fw-bolder text-center">
        Your Partner in Quality Solutions
      </h4>
      <div className="row cards d-flex justify-content-center">
            <div className="col-sm-4">
          <div class="card rounded-0 ">
            <img src={ser1} class="card-img-top  rounded-0" alt="..." />

            <h5 className="position-absolute bottom-0 pb-3 px-3 text-white">
              Animal Husbandry Feed
            </h5>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card rounded-0">
            <img src={ser2} class="card-img-top  rounded-0" alt="..." />
            <h5 className="position-absolute bottom-0 pb-3 px-3 text-white">
              Oil Drilling Fluid
            </h5>
          </div>
        </div>
        <div className="col-md-4 ">
          <div class="card rounded-0">
            <img src={ser3} class="card-img-top rounded-0 " alt="..." />
            <h5 className="position-absolute bottom-0 pb-3 px-3 text-white">
              Agri Products
            </h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h6 className=" text-center mt-5">Quality Policy</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h1 className=" display-6 fw-bold text-center">
            Exceeding Expectations, Every Time
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div class=" d-flex justify-content-center ">
            <div class="d-flex align-items-center w-50 mt-4 pb-4">
              <div class="step rounded-circle px-1 bg-secondary  text-white">01</div>
              <div class="line flex-grow-1   bg-secondary mx-2"></div>
              <div class="step rounded-circle px-1 bg-success text-white">02</div>
              <div class="line flex-grow-1  bg-secondary mx-2"></div>
              <div class="step rounded-circle px-1  bg-secondary text-white">03</div>
            </div>
          </div>
        </div>
      </div>
      <div className="green-component row">
            <div className="image-wrapper col-md-6 ">
                <div className="green-square"></div>
                <img src={ship} alt="Ship" className="ship-image img-fluid" />
            </div>
            <div className='col-md-6 '>
                <h5 className="fs-6 fw-semibold text-secondary quotes  lh-lg ">We continuously refine our processes with rigorous quality<br/>control measures and leverage the expertise of our highly<br/>qualified engineers.Our aim is to provide innovative solutions<br/>that stand as a benchmark in the industry.</h5>
            </div>
        </div>
      </div>
   
  );
}
