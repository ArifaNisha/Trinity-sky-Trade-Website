import './Experience.css';
import  map from '../../Asserts/map3.jpg';


export default function Experience() {
    return (
        <section className="map1  ">
            <div className="row ">
                <div className="col-sm-12 custom-height">
                    <div className="map2 ">
                        <img src={map} alt="Not found" className="map-image w-100" />
                       
                        <div className='icon-section d-flex justify-content-center'>
                            <div className="text-center">
                                <div className="row icons">
                                    <div className="col-sm-3 icon-container">
                                        <h3><i className="fas fa-shield-alt fa-2x text-white fs"></i></h3>
                                        <h3 className="text-white fs-4 fw-semibold">Reliability</h3>
                                    </div>
                                    <div className="col-sm-3 icon-container ">
                                        <h3><i className="fas fa-cogs fa-2x text-white fs"></i></h3>
                                        <h3 className="text-white fs-4 fw-semibold">Comprehensive Services</h3>
                                    </div>
                                    <div className="col-sm-3 icon-container ">
                                        <h3><i className="fas fa-dollar-sign fa-2x text-white fs"></i></h3>
                                        <h3 className="text-white fs-4 fw-semibold">Competitive<br />Pricing</h3>
                                    </div>
                                    <div className="col-sm-3 icon-container ">
                                        <h3><i className="fas fa-globe fa-2x  text-white "></i></h3>
                                        <h3  className="text-white fs-4 fw-semibold">Global Reach and Distribution</h3>
                                    </div>
                                </div>
                                <h1 className="text-white fw-semibold display-5 mt-4">The Benefits of Choosing our Expertise</h1>

                                {/* Card section for Experience, Products, Clients, and Team */}
                                <div className="centered-card bg-white text-black mt-4 mx-auto w-75 ">
                                    <div className="card-body">
                                        <div className="row text-center px-2">
                                            <div className="col-md-2 stat-box  px-2">
                                                <h1 className="text-success fw-bold  ">5+</h1>
                                                <p className="text-black fs-6 fw-semibold" >Years of Experience</p>
                                            </div>
                                            <div className='  col-md-1'>
                                                <hr className='vr   border-4 opacity-100  text-success '></hr>
                                            </div>
                                           
                                             <div className="col-md-2 stat-box">
                                                <h1 className="text-success fw-bold">40+</h1>
                                                <p className="text-black fw-semibold fs-6" >Products</p>
                                            </div>
                                            <div className='  col-md-1'>
                                                <hr className='vr   border-4 opacity-100  text-success '></hr>
                                            </div>
                                            <div className="col-md-3 stat-box ">
                                                <h1 className="text-success fw-bold ">20+</h1>
                                                <p className="text-black fw-semibold  fs-6">Satisfied Clients</p>
                                            </div>
                                            <div className='col-md-1'>
                                                <hr className='vr   border-4 opacity-100  text-success '></hr>
                                            </div>
                                            <div className="col-md-2 stat-box ">
                                                <h1 className="text-success fw-bold ">10+</h1>
                                                <p className="text-black fw-semibold fs-6">Team Members</p>
                                            </div>
                                        </div>
                                    </div>
                             
                                {/* End of Card Section */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             </section>
        
    );
}
