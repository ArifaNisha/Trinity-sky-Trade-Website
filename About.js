import "./About.css";
import abt from "../../Asserts/about.jpg";
import marine from "../../Asserts/marine img.jpg";
import profile from "../../Asserts/story.jpg";
import vision from "../../Asserts/vision.jpg";
import mission from "../../Asserts/mission.jpg";
import value from "../../Asserts/values.jpg";
// import values from "../../Asserts/values.jpg";
import join from "../../Asserts/jointeam.jpeg";
export default function About(){
    return(
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 pb-0 mt-4">
            <img
              src={abt}
              alt="page not found"
              className=" w-100 img-fluid opacity-75"
            />
               <h2 className=" about text-white fw-bold ">
            About
          </h2>
</div>
</div>
<div className="  row ourstory mt-4 mb-5">

  <div className="col-md-5 d-flex justify-content-end align-items-center">
<div className="image-wrapper  ps-3 ms-4">
{/* <div className=" col-md-6 image-wrapper  ps-3 ms-4"> */}
<div className="square  rounded-end-5 rounded-bottom-5 px-3"></div>
     <img src={profile} className="prof  img-fluid pt-3 ps-5 mt-3  "alt="not found"/>  
  </div>
  </div>
  <div className="  col-md-7 text-start mt-4 px-4 ">
<h1 className="fw-bold pt-4">Our story and commitment</h1>
<p className="text-secondary fw-semibold lh-lg   fs-5 display-6">Welcome to Trinity Sky, where our story is one of dedication,<br/> innovation, and unwavering commitment to excellence. As a leader<br/> in the animal husbandry feed, oil drilling and agri products industry,<br/> we take great pride in not only providing high-quality products but<br/> also in embracing the values and vision that drive us. Get to know<br/> the essence of who we are, what we stand for, and how we aim to<br/> make a difference in our industry and beyond. Explore our journey,<br/> our mission, and our values as we invite you to be a part of our story.</p>
  </div>

  </div>
 
  <div className="row mb-5">
    <div className="col-lg-12">
      <div className="ship-container d-flex justify-content-center align-items-center">
    <img src={marine}  className="marine  img fluid opacity-50" alt="not-found"/>
 
   {/* vision page */}
  
     <div className=" vision row d-flex ">
      <div className=" image-wrapper col-md-6 px-3">
        <div className="ash bg-secondary"></div>
        <img src={vision} className=" visonimg1 img-fluid "alt="not-found"/>
      </div>

      <div className="col-md-6 mx-5 mb-4 ">
        <h1 className="fw-bolder text d-flex justify-content-start ">Our Vision<span className="text-white fw-normal px-2">&#8213;&#8213;</span> </h1>
        <h6 className="text-white lh-lg fs-5">We envision a world where sustainable, innovative, and responsible practices in the animal husbandry feed, oil drilling and agri products category to a healthier and more prosperous planet.<br/> Our vision is to be a catalyst for positive change, driving progress,<br/> and innovation that benefits not only our customers but also the<br/> environment we all share.
        </h6>
      </div>
 
    </div>

    {/* mision page */}
    <div className=" mission row d-flex ">
              
      <div className="  ms col-md-6 mb-4">
        <h1 className="fw-bolder text d-flex justify-content-end"><span className="text-white fw-normal px-2">&#8213;&#8213;</span>Our Mission </h1>
        <h6 className="text-white lh-lg fs-5 text-end">Our mission is to provide the highest quality fish feed and industrialm metal supply products while maintaining unwavering <br/>commitment to sustainability,excelling,and customer<br/> satisfaction.We strive to be a trusted partner to our customers,<br/>offering innovative solutions that enpower them to succed<br/>in their endeavors.
        </h6>
      </div>
      <div className=" image-wrapper col-md-6">
      <div className="ash1 bg-secondary"></div>
      <img src={mission} className="visonimg2 " alt="not found"/>
      </div>
    </div>

    {/* values page */} 
    <div className="val row d-flex">
      <div className="image-wrapper col-md-6 px-3">
      <div className="ash2 bg-secondary"></div>
      <img src={value} alt="notfound" className="visonimg3 img-fluid"/>
  </div>
    <div className="col-md-6 mx-4 px-4">
      <h1 className="text fw-bolder text d-flex justify-content-start">Our Values<span className="text-white fw-normal px-2">&#8213;&#8213;</span></h1>
      <h6 className="text-white lh-lg fs-5">We are dedicated to maintaining the highest standards of quality in every product we offer. Quality is not just a goal; it's a fundamental value that drives every aspect of our business. We conduct our business with honesty and integrity, fostering trust and transparency with our customers, partners, and employees.
      </h6>
      </div>
    </div> 

    </div>
    </div>
  </div>

<div className="row  group  mx-4 ">
  <div className="col-md-12">
    <h2 className="text-center fw-bold display-6">Join us on our journey</h2>
    <div className="row mt-4 mb-4 d-flex justify-content-center">
      <div className="col-md-6  mt-4">
        <img src={join} alt="not found" className=" w-100 h-100"/>
             </div>
             <div className="col-md-6 mt-4">
              <p className="lh-lg fs-5 text-secondary fw-semibold text-start">At Trinity Sky,our vision,mission,and values drive us forward <br/>everyday.We invite you to join us on this journey towards a <br/>more sustainable,responsible,and successful future.<br/>Together,we can make a positive impact on our industry<br/>and the world.Thank you for considering us as your partner.
              </p>
              <p className="lh-lg mt-3 fs-5 text-secondary fw-semibold">Thank you for considering our company as your partner in <br/>the animal husbandry feed, oil drilling and agri products <br/>industry. We are dedicated to building strong, enduring<br/> relationships with our customers and providing the highest<br/> level of service and expertise.
              </p>
             </div>
    </div>
    </div>
    <div className="row mt-4 pt-4">
   

           <div className="col-sm-2  d-flex flex-wrap">
        <div className="card  cardc1 text-center p-2 rounded-4 w-100 ">
       <h1> <i class="lni lni-cog large-icon fs-1 text-danger p-3"></i></h1>
       <div className="card-body">
        <h6 className="fs-6 fw-semibold">Engineers and Technicians</h6>
       </div>
        </div>
        </div>

        <div className="col-sm-2 d-flex flex-wrap">
        <div className="card  rounded-4 cardc1 text-center bgcl ">
       <h1> <i class="lni lni-network large-icon fs-1 text-white p-3 "></i></h1>
       <div className="card-body text-white">
        <h6>Skilled Workers</h6>
       </div>
        </div>
        </div>

        <div className="col-md-2 d-flex flex-wrap">
        <div className="card rounded-4 cardc1 text-center ">
       <h1> <i class="lni lni-target-revenue text-danger p-3"></i></h1>
       <div className="card-body">
        <h6>Sales and Marketting Experts</h6>
       </div>
        </div>
        </div>

        <div className="col-md-2 d-flex flex-wrap  ">
        <div className="card rounded-4 cardc1 text-center ">
       <h1> <i class="lni lni-cog large-icon fs-1 text-danger p-4"></i></h1>
       <div className="card-body">
        <h6>Quality Controllers</h6>
       </div>
        </div>
        </div>

        <div className="col-md-2 d-flex flex-wrap ">
        <div className="card  rounded-4 cardc1 text-center ">
       <h1> <i class="lni lni-cog large-icon fs-1 text-danger p-4"></i></h1>
       <div className="card-body">
        <h6>Warehouse Experts</h6>
       </div>
        </div>
        </div>

  


        </div>
        </div>
      </div>
 











 










    );
}