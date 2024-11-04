import admin1 from '../../Asserts/admin1.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import "./Signup.css"

export default function Signup(){
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Password: '',
    Confirmpassword:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Formdata",formData);
      const response = await axios.post('http://localhost:4000/submit', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error registering user',error);
    }
  };
  return(
// {/* <section className="vh-100 mb-3 cont1"> */}
    
        <div className="row  d-flex justify-content-center align-items-center  signin">
        <div className="col-md-6  ">
    <img src={admin1}
      className="img-fluid h-75 w-100" alt="Not found"/>
  </div>
  <div className="col-md-6  ">
       
        
              

                <h1 class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-danger">Sign up</h1>

                <form onSubmit={handleSubmit} class="mx-1 mx-md-4">
               
                  <div class="d-flex flex-row align-items-center mb-4">
                                   <i class="fas fa-user fa-lg mb-4 me-3 fa-fw "></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="text" id="Name" name="Name"  className="form-control"    formControlName="Name" value={formData.Name} onChange={handleChange} required placeholder='john due' />
                      <label class="form-label" for="form3Example1c">Enter Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 mb-4 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" name="Email" class="form-control" value={formData.Email} onChange={handleChange} required   placeholder="abc@gmail.com"/>
                      <label class="form-label " for="form3Example3c"> Enter Your Email</label>
                    </div>
                  </div>

             
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 mb-4 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" name="Password" class="form-control" value={formData.Password} onChange={handleChange} required  placeholder='password' />
                      <label class="form-label" for="form3Example4c">Enter Your Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3  mb-4 "></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" name="Confirmpassword" class="form-control" value={formData.Confirmpassword} onChange={handleChange} required  placeholder='Re-Enter your password' />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Register</button>
                  </div>
                  <p class="small fw-bold mt-2 pt-1 mb-4">Already have an account? <Link to ="/admin"
                class="link-danger">Sign in</Link></p>

                </form>

              </div>
              

             

              </div>
         
    
   
// </section>

    );
}




  