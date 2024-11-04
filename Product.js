import product from "../../Asserts/products.png";
import bet from "../../Asserts/bethonide1.jpg";
import cal from "../../Asserts/calcium.jpg";
import chlo from "../../Asserts/chlorine.jpg";
import gil from "../../Asserts/gilsonide.jpeg";
import salt from "../../Asserts/industrial-salts.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import "./Product.css";

export default function Product() {
 
    const [products, setProducts] = useState([]);
  
    // Fetch all products from the backend
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:4000/products');
          setProducts(response.data); // Set the products state with the data from the backend
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      fetchProducts();
    }, []);
  
    if (products.length === 0) {
      return <p>No products uploaded yet.</p>;
    }
  

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <img
            src={product}
            alt="page not found"
            className="  img-fluid w-100 h-100 opacity-70"
          />
          <h2 className=" product text-white fw-bold">
            Products
          </h2>
        </div>
        <div className="row">
          <div className="col-md-12 cardss">
            <div className="row">
            <ul class="nav nav-tabs p-1 "> 
          {/* nav used for oil agri,animal field */}
               <div className="col-md-4">
                <h5 className="fs-1 fw-bold mb-0  ">Categories</h5>
              </div>       
        <div className="col-md-2">
             <li class="nav-item">
                <button className="nav-link pb-3  fw-semibold fs-6 active" href="#">Oil & Gas</button>
            </li>
            </div>
            <div className="col-md-2">
            <li class="nav-item">
                <button className="nav-link fs-6  fw-semibold text-secondary" href="#">Animal Feed</button>
            </li>
            </div>
            <div className="col-md-2">
            <li class="nav-item">
                <button className="nav-link fs-6  fw-semibold text-secondary" href="#">Agri Products</button>
            </li>
            </div>
            <div className="col-md-2">
            <li class="nav-item sort-by">
                <div class="form-inline">
                    <label for="sort" className=" fs-6 pt-2 fw-semibold text-black">Sort By:</label>
                  <span> <select className=" " id="sort">
                        <option>A-Z</option>
                        <option>Z-A</option>
                    </select></span>
                </div>
            
            </li>
            </div>
        </ul>
    </div> 
    <div className="items">
<div className="row ">
    <div className="col-md-4 col-sm-4">
        <div className="card  ">
            <img src={bet} className="img-fluid" alt="not found"/>
        </div>
        <div class="card  pt-2  card1 rounded-0 d-flex flex-wrap">
    <h5 class="card-title text-center fw-bold  mt-4 pt-2 ">Betonide</h5>
    
    <Link to="./Calcium" class="btn btn-success w-100 position-absolute bottom-0 rounded-0 betonide">View Details</Link>
  </div>
    </div>
    <div className="col-md-4">
        <div className="card d-flex-flex-wrap ">
            <img src={cal} className="img-fluid"alt="not found"/>
        </div>
        <div class="card  pt-2 card1 rounded-0 d-flex flex-wrap ">
    <h5 class="card-title text-center fw-bold p-3 ">Calcium Chloride for Oil<br/>& GasDrilling</h5>
    
    <Link to="/productdetails" class="btn rounded-0 btn-success w-100 position-absolute bottom-0">View Details</Link>
  </div>
    </div>
    <div className="col-md-4">
        <div className="card">
            <img src={chlo} className="img-fluid" alt="not found"/>
        </div>
        <div class="card   card1 rounded-0 ">
    <h5 class="card-title text-center fw-bold p-2 ">Chloline Chloride CLAY<br/>BRAKE 75%(LIQUID)<br/> FOROIL DRILLING </h5>
    
    <Link to="#" class="btn btn-success rounded-0 w-100 position-absolute bottom-0">View Details</Link>
  </div>
    </div>
</div>
<div className="row mt-3">
    <div className="col-md-4">
    <div className="card">
            <img src={gil} className="" alt="not found"/>
        </div>
        <div class="card  card1 rounded-0  ">
    <h5 class="card-title text-center fw-bold p-4 ">Gilsonide</h5>
    
    <Link to="#" class="btn btn-success rounded-0 position-absolute bottom-0 w-100">View Details</Link>
  </div>
    </div>
    <div className="col-md-4">
    <div className="card ">
            <img src={salt} className="" alt="not found"/>
        </div>
        <div class="card  card1 rounded-0 ">
    <h5 class="card-title text-center fw-bold pt-3  ">Industrial Salt-<br/>Drilling Gate</h5>
    
    <Link to="#" class="btn btn-success rounded-0 position-absolute bottom-0 w-100">View Details</Link>
  </div>
    </div>
  
   {/* <div className="card">
   {product.image_url && (
            <img src={`http://localhost:4000${product.image_url}`} alt="not found"  />
          )} */}
      {products.map((product) => (
         <div className="col-md-4 mb-4" key={product.id}>
        <div className="card">
        {product.image_url && (
                 <img src={`http://localhost:4000${product.image_url}`} alt="not found" className=" img-fluid"  />
                 
               )}
               </div>
      <div className="card  card1 rounded-0 ">
          <h5 class="card-title text-center fw-bold pt-3  ">{product.name}</h5>
          {/* <p>{product.description}</p> */}
          <Link to="#" class="btn btn-success rounded-0 position-absolute bottom-0 w-100">View Details</Link>
          
       
       </div>
       </div>
      ))}
    
  
    </div>


    

</div>



          </div>
        </div>
        </div>
        </div>
        );
}
