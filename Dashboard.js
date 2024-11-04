import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SessionTimeout from '../Admin/Session';
 


export default function Dashboard(){
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated by looking for a token
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin'); // If not authenticated, redirect to the login page
    }
  }, [navigate]);

    return(

        <div className="dash">
        
 {/* <button type="button" class="btn2 btn-lg text-start bg-white border-text-white "  data-bs-toggle="offcanvas" 
  data-bs-target="#offcanvas-sidebar">
   <i class="fa-solid fa-bars fs-5"></i>
   </button> */}
  <div className='offcanvas offcanvas-start  d-flex-justify-content-center align-items-center   'data-bs-scroll="true" tabindex="-1" id="offcanvas-sidebar">
    
    <div className="offcanvas-header d-flex justify-content-between align-items-around p-0 bg-primary w-100" id="off-canvas-header">
    {/* <span> */}
   <h1 className='text-white ms-3'>Trade Simplified</h1>

    {/* <p className='text-black'>تثلیث آسمان</p> </span> */}
                  <div>
                          {/* <img src={logo} className="rounded-4  mt-4" width="50" height="50" alt="Logo" /> */}
                  
{/*               
                     <h4 className='mt-2 text-white display-6'>Trinity Sky</h4>
                    <h6 className='text-black ms-3'>Trade Simplified</h6>
                  */}
                  </div>
                  <button data-bs-dismiss="offcanvas" class="btn   mt-3 ms-4 bg-primary rounded-6  pt-2"> <i class="fa-solid fa-right-to-bracket fa-sm text-white text-end"></i></button>
                 
    </div>
  
    <div className='offcanvas-body w-100' id="off-canvas-body">

<nav className="nav d-flex justify-content-center text-start mt-2 flex-column ">
              <Link  className="sidebar-link d-flex align-items-center text-decoration-none text-black  fw-bold fs-1 "  aria-current="page">
              <i class="lni lni-grid-alt fs-4  ms-3 text-dark"></i>
                <h5 className=' ps-3 mb-0 text-black fw-semibold'>Dashboard</h5>
              </Link>
              <div className='dropdown pt-3'>
                <Link className="sidebar-link has-dropdown-collapsed text-decoration-none text-black d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#email" aria-expanded="false" aria-controls="email">
                  {/* <i className="fa-solid fa-user-tie text-dark ms-3"> </i> */}
                  <i class="lni lni-envelope ms-3 text-dark fs-4"></i>
                  <h5 className='ps-3 mb-0 text-black'>Email</h5>
                </Link>
                <ul id="email" className="sidebar-dropdown text-decoration-none list-unstyled collapse pt-3 px-3" data-bs-parent="#email">
                  <li className="sidebar-item">
                    <Link to="/inbox" className="sidebar-link-collapsed text-decoration-none text-black" aria-controls="mail">
                    {/* <i class="lni lni-inbox ps-3 text-dark"></i> */}
                   <h6 className='px-2 text-dark'><i class="lni lni-inbox ms-4 text-dark"></i> Inbox</h6>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="" className="sidebar-link-collapsed text-decoration-none text-black " aria-controls="mail">
                      <h6 className='px-2 text-dark'><i class="lni lni-checkmark-circle text-dark  ms-4"></i> Spam</h6>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="" className="sidebar-link-collapsed text-decoration-none text-black " aria-controls="mail">
                      <h6 className='px-2 text-dark'><i class="lni lni-popup  text-dark  ms-4"></i> Chat</h6>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="" className="sidebar-link-collapsed text-decoration-none text-black " aria-controls="mail">
                      <h6 className='px-2 text-dark'><i class="lni lni-trash-can ms-4 text-dark"></i> Trash</h6>
                    </Link>
                  </li>
                    <li className="sidebar-item">
                    <Link to="" className="sidebar-link-collapsed text-decoration-none text-black " aria-controls="mail">
                      <h6 className='px-2 text-dark'><i class="lni lni-envelope ms-4 text-dark"></i> All mail</h6>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='dropdown pt-3'>
                <Link to ='/productsupdate' className="sidebar-link has-dropdown-collapsed text-decoration-none text-black d-flex align-items-center" >
                <i class="lni lni-cog fs-4  ms-3 text-dark"></i>
                  <h5 className='ps-3  mb-0 text-black'>Products Updates</h5>
                </Link>
                </div>
              <div className='dropdown pt-3'>
                <Link className="sidebar-link has-dropdown-collapsed text-decoration-none text-black d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#setting" aria-expanded="false" aria-controls="setting">
                <i class="lni lni-cog fs-4  ms-3 text-dark"></i>
                  <h5 className='ps-3  mb-0 text-black'>Settings</h5>
                </Link>
                </div>

                <div className='dropdown pt-3'>
                <Link className="sidebar-link has-dropdown-collapsed text-decoration-none text-black d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#setting" aria-expanded="false" aria-controls="setting">
                <i class="lni lni-power-switch fs-4  ms-3 text-dark"></i>
                  <h5 className='ps-3  mb-0 text-black'>Logout</h5>
                </Link>
                </div>

              </nav>
  
    </div>
    <div className='offcanvas-footer'>
      <div className='d-flex justify-content-around align-items-around'>
   <button className='rounded-circle text-start m-2 p-2 bg-primary'><i className="fa-solid fa-user fs-6  text-white"  />
      </button>
      <h3 className='pt-3 text-black'>Admin</h3><br/>
          </div>
     
    </div>
    </div>
    <div className='container-fluid'>
    <nav class="navbar navbar-expand-lg  rounded-2 shadow-lg ">
<div class="container-fluid d-flex justify-content-between align-content-center text-start p-2 ">
<button type="button" class="btn2 btn-lg text-start bg-white  "  data-bs-toggle="offcanvas" 
  data-bs-target="#offcanvas-sidebar">
   <i class="fa-solid fa-bars fs-3 p-2"></i>
   </button>
<Link className="navbar-brand text-white px-2 " to=""></Link> 
      <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span></button>
<div class="collapse navbar-collapse mx-auto" id="navbarSupportedContent">

      <form class="me-3 w-100 m-2 px-sm-4" formGroup="headerForm">
      <div class="row">
      <div class="col-md-10 col-xs-8">
        <input type="text" className="form-control" placeholder="Search Here...." id="usersearch"/>
      </div>
            <div class="col-md-2 col-xs-4 text-xs-center">
              <button type="button" class="btn btn-primary">
              <i class="fa-solid fa-magnifying-glass"></i> Search</button>
     
            </div>
          </div>        
      </form>
            </div>
           
    </div>




</nav>

    </div>
          {/* card design  */}
       <div className='dash' style={{ padding :"100px"}}>
          <div class="row ">
  <div class="col-md-6  d-flex flex-wrap">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title "> Animal Husbandry Feed</h5>
        <p class="card-text">Your trusted partner for a complete spectrum of service in the animal husbandry feed</p>
        <Link href="#" class="btn btn-primary">More Details...</Link>
      </div>
    </div>
  </div>
  <div class="col-md-6  d-flex flex-wrap">
    <div className="card">
      <div class="card-body">
        <h5 class="card-title"> Oil Drilling Fluid</h5>
        <p class="card-text text-secondARY">We continuously refine our processes with rigorous quality control measures and leverage the expertise of our highly qualified engineers.</p>
        <Link href="#" class="btn btn-primary">More Details...</Link>
      </div>
    </div>
  </div>
  </div>
  <div className='row mt-4'>
  <div class="col-sm-6  d-flex flex-wrap ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Agriculture Products</h5>
        <p class="card-text">We are dedicated to empowering farmers and communities by providing them with the necessary resources to achieve food security and economic growth.</p>
        <Link href="#" class="btn btn-primary">More Details...</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6  d-flex flex-wrap">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Clients and Products</h5>
     <ul className='list-unstyled'>
      <li className='text-danger'>40 + Products Details </li>
      <li className='text-danger'>20 + Clients Details </li>
      <li className='text-danger'>10 + Team Members Details </li>

     </ul>
     <SessionTimeout />
 </div>
      </div>
    </div>
  </div>


</div>
</div>












    );
}