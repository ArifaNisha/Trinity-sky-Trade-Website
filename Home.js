import  car1 from '../../Asserts/Hero_Image.jpg';
// import  ship from '../../Asserts/ship.jpg';
import  car3 from '../../Asserts/ani.jpg';
// import  map from '../../Asserts/map1.jpg';
import { Link } from "react-router-dom";

import './Home.css'
export default function Home(){

    return(
   <div className="home row mt-1">
{/* <div className='full-wrapper'> */}
  {/* <div className='container'>
    <div className='row'> */}
      <div className=' col-sm-12'>
       <div id="carouselExampleCaptions4" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="1" className='' ></button>
          <button type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide-to="2" ></button>
          </div>
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img src={car1} class="d-block w-100 full-width opacity-100"  alt="not found"/>
            <div class="carousel-caption d-none d-sm-block text-start ">
              <h1 className="fw-semibold  ">WELCOME TO</h1>
              <h1 className='fw-bold display-3 logo'>TRINITY SKY</h1>
              <p className='fs-5'>Your trusted partner for a complete spectrum of service in<br/>the animal husbandry feed,oil drilling fluid and agdi products</p>
              <Link to="/contact" className="btn btn2 rounded-2 border-0 fw-bolder px-4 p-2 fs-5 text-white">CONTACT NOW</Link>
            </div>
            </div>
          {/* <div class="carousel-item ">
            <img src={car2} class="d-block w-100 carouselitem" alt="..." />
            <div class="carousel-caption d-none d-md-block d-sm-block d-lg-block position-absolute top-50 end-50">
                          </div>
            </div> */}
            
                       <div class="carousel-item ">
            <img src={car3} class="d-block w-100 carouselitem" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                     
                      </div>
                      </div>
                   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden ">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions4" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      </div>









  </div>




  





  


    );
}