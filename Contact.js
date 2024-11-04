import  contact from '../../Asserts/contacct.jpg';
import React, { useState } from 'react';
import './Contact.css';
export default function Contact(){


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        address: '',
        message: ''
      });
 

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
   

      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
  
        const response = await fetch('http://localhost:4000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        
        });
      



    
  
      
      
    
        const result = await response.json();
        if (!result.success) {
          alert('  Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            subject: '',
            address: '',
            message: ''
          });
         
        } else {
          alert('Failed to send the message.');
         
        }
      };
     
    
    return(
        <div className="contact">
            <div className="row">
                <div className="col-md-12 mt-3 mb-1">
                    <img src={contact} alt="not found" className="w-100  img-fluid"/>

                </div>
                {/* <h2 className=" cont display-6 text-white fw-bold">
            Contact
          </h2> */}
            </div>
            <div className='row information'>
                <div className='col-md-6'>
                <h2 className='mt-4  fw-bold fs-1 p-4'>Contact Info</h2>
          <ul className="list-unstyled">
            <li className='mt-3 '>
              <i className="bi bi-geo-alt-fill p-2"></i><span className='text-secondary fw-semibold px-3'>73111 PO box, Business Centre, Sharjah Publishing</span><p className='text-secondary fw-semibold px-5'> City Freezone, Sharjah,UAE</p>
            </li>
            <li className='mt-3'>
              <i className="bi bi-whatsapp p-2"></i><span className='text-secondary  fw-semibold px-3'>UAE: +971 568669466</span>
            </li>
            <li className='mt-4 '>
            <i className="bi bi-telephone-fill p-2"></i><span className='text-secondary  fw-semibold px-3'>UAE: +971 568669466 </span> 
            <p className='px-5 text-secondary  fw-semibold '>IND: +91 6385941787</p>
            </li>
            <li className='mt-3'>
              <i className="bi bi-envelope-fill p-2"></i><span className='text-secondary  px-3 fw-semibold px-3'>sales@trinity-sky.com</span>
            </li>
          </ul>

                </div>
               
                <div className="col-md-6 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.0084654354414!2d55.451389276670354!3d25.333496428077055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5ffb301e5dbb9%3A0x3d2a3bc8b4b32c7c!2sDigital%20Marketing%20and%20Advisor!5e0!3m2!1sen!2sae!4v1597633914797!5m2!1sen!2sae"
            // width="100%"
            // height="400"
            // frameBorder="0"
            // style={{ border: 0 }}
            // allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            
            title="map" className="map w-100 h-100 p-4 "></iframe>
                </div>
            </div>
            <div className='row mt-4 '>
                <div className='txt col-md-12  p-5'>
                    <h1 className=' text-white text-center fw-bold pt-4'>Contact Us
                    </h1>
                    <h6 className='text-white text-center '>Have a question or Comment</h6>
                    <h6 className='text-white text-center mb-4'>Let us know by filling out the form below and we'll be in touch shortly</h6>               
                </div>
</div>   


                 
         <div className='cont-wrapper row w-100'  >
         
<div className='card concad  rounded-0 col-md-8 w-75 align-items-center h-100  '>
    <div className='card-body pt-4 pb-5'>
    <form onSubmit={handleSubmit} >
    <div className='row '>
        <div className='col-md-12 px-5 mt-3'>
    <label for="name" class="form-label fw-bold">Name*</label>
                     <input
          type="text"
           name="name"
         
           value={formData.name} onChange={handleChange} required
          placeholder="Enter Your Name"
         className='form-control form-control-lg  border border-3 rounded-4'
         formControlName="name" 
         id='name'/>
            </div>
      

            <div className='col-md-12 px-5 mt-3'>
            <label for="email" class="form-label fw-bold">Email*</label>
        <input
          type="email"
          name="email"
       
          placeholder="Enter Your Email"
          value={formData.email} onChange={handleChange} required 
          className='form-control form-control-lg border border-3 rounded-4'
         formControlName="email"
        id='email'
     
        />
        </div>
        
        <div className='col-md-12 px-5 mt-3'>
            <label for="tel" class="form-label fw-bold">PhoneNumber*</label>
        <input
          type="tel"
           
          name="phoneNumber"
          placeholder="Enter Your Phonenumber"
          value={formData.phoneNumber} onChange={handleChange} required
          className='form-control form-control-lg border border-3 rounded-4'
         formControlName="tel"
        id='phone'
     
        />
        </div>
        <div className='col-md-12 px-5 mt-3'>
    <label for="sub" class="form-label fw-bold">Subject*</label>
                     <input
          type="text"
           
           name="subject"
           value={formData.subject} onChange={handleChange} required
          placeholder="Please write your subject here..."
         className='form-control form-control-lg  border border-3 rounded-4'
         formControlName="subject"
         id='subject'/>
            </div>
      
        <div className='col-md-12 px-5 mt-3'>
            <label for="addres" class="form-label-lg fw-bold">Address*</label>
        <input
          type="text"
            
          name="address"
          placeholder="Enter Your Address"
          value={formData.address} onChange={handleChange} required
          className='form-control form-control border border-3 rounded-4'
         formControlName="address"
        id='address'
     
        />
        </div>
        <div className='col-md-12 px-5 mt-3'>
            <label for="msg" class="form-label fw-bold">Message</label>
        <textarea
          name="message"
          placeholder="write a message if any"
         
          className='form-control form-control-lg border border-3 rounded-4'
          value={formData.message} onChange={handleChange} 
         formControlName="msg"
        id='msg'
        rows={4}
        cols={3}
             />
        </div>
    <div className='col-md-12'>
    <button type="submit" className=" btn3 rounded-pill p-2  border-0 fs-5 fw-bold px-4 mx-5 mt-3 text-white">CONTACT NOW</button>
    </div>

</div>
</form>
</div>
</div>
</div>
<div className='row mb-4 pb-4'>
<div className='col-md-12 p-4 '>
    <p className='text-center fs-5 fw-semibold text-secondary'>At Trinity Sky, we value your feedback and appreciate your support. If you have suggestions for how we can <br/>improve our website or services, or simply want to say hello, please drop us a line using the form below.<br/> We look forward to hearing from you!</p>
</div>
</div>
</div>
    
    



          
    
    );
}