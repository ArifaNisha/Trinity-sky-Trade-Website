import  ship from '../../Asserts/ship.jpg';
import "./Content.css"
export default function Content(){
    return(

<div className='content '> 
<div className='row '>

  <div className='col-md-6'>
    <h1 className=' fw-bold pt-3 text-black '>WHO WE ARE</h1>
    <p className=' fw-semibold lh-lg text-secondary fs-5 text-justify'>At Trinity Sky, we're more than just an exporter.We are <br/>your trusted partner for a complete spectrum of<br/> services in the animal husbandry feed, oil drilling <br/> fluid and agri products. With a rich history of excellence<br/> and a commitment to quality, we offer comprehensive<br/> solutions that span the entire supply chain, including <br/> upstream, midstream, and downstream services.</p>
    <p  className='fw-semibold  lh-lg text-secondary fs-5 '>Quality is at the core of our operations. We adhere to <br/> strict quality control processes and hold<br/> industry-recognized certifications to ensure that <br/>every product we deliver meets the highest standards.
</p>
  </div>   
  <div className='col-md-6'>
    <img src={ship} alt="Not found" className='img-thumbnail w-100 h-100'/>
  </div>
   
  </div>
  </div>

  
);

}