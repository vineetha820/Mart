// import React from 'react';
// import { Dropdown } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { addToCart, selectContent, searchproduct } from '../redux/ProductActions/ProductActioner';
// import { products } from './products/Products';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// function Shop() {
//   const filterName = useSelector((state) => state.ProductData.selectedContent);
//   const searchTerm = useSelector((state) => state.ProductData.searchProduct);
//   const FilterProducts = products.filter((item) => item.category === filterName);
//   const dispatch = useDispatch();


//   const filteredProducts = searchTerm
//     ? products.filter((product) =>
//         product.productName.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : FilterProducts;
  
  

//   return (
//     <div>
      
//       <Dropdown>
//         <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-primary px-5'>
//           {filterName ? `${filterName}` : 'Filter By Category'}
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item onClick={() => { dispatch(selectContent('sofa')) }}>sofa</Dropdown.Item>
//           <Dropdown.Item onClick={() => { dispatch(selectContent('watch')) }}>watch</Dropdown.Item>
//           <Dropdown.Item onClick={() => { dispatch(selectContent('chair')) }}>chair</Dropdown.Item>
//           <Dropdown.Item onClick={() => { dispatch(selectContent('wireless')) }}>wireless</Dropdown.Item>
//           <Dropdown.Item onClick={() => { dispatch(selectContent('mobile')) }}>mobiles</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       <input
//         type="text"
//         className="form-control ml-3"
//         placeholder="Search products"
//         value={searchTerm}
//        onChange={(event)=>{ dispatch(searchproduct(event.target.value))
//        }}
//         style={{
//           width: '550px',
//           padding: '0.5rem',
//           marginRight: '15rem',
//           marginTop: '1.5rem',
//         }}
//       />

//       <div className='container '>
//         <div className='row justify-content-center'>
//           {filteredProducts.map((product) => {
//             return (
//               <div className='col-md-4' key={product.id}>
//                 <div className='card m-3 shadow'>
//                   <Link to={`/SingleProduct/${product.id}`}>
//                     <img src={product.imgUrl} className="card-img-top img-fluid" alt="..." style={{ height: '300px' }} />
//                   </Link>
//                   <div className='card-body d-flex justify-content-between align-items-center'>
//                     <div>
//                       <h5 className='card-title'>{product.productName}</h5>
//                       <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
//                       <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
//                       <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
//                       <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
//                       <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
//                       <p className='card-text fs-3'>${product.price}</p>
//                     </div>
//                     <button
//                       className='rounded-circle fs-3 text-primary bg-light'
//                       style={{ height: '50px', width: '50px' }}
//                       onClick={() => {
//                         dispatch(addToCart(product));
//                         toast.success("Product has been added to cart"
//                         );
//                       }}
//                     >
//                       <FontAwesomeIcon icon={faPlus} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Shop;


import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { addToCart, selectContent, searchproduct } from '../redux/ProductActions/ProductActioner';
import { products } from './products/Products';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import table from "../Images/table.jpg"

function Shop() {
  const filterName = useSelector((state) => state.ProductData.selectedContent);
  const searchTerm = useSelector((state) => state.ProductData.searchProduct);
  const FilterProducts = products.filter((item) => item.category === filterName);
  const dispatch = useDispatch();

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : FilterProducts;

  return (
    <div>
       <h1   className="text-center d-flex align-items-center justify-content-center " style={{ backgroundImage: `url(${table})`, height:"200px"}}>Product</h1>
      <div className="d-flex align-items-center justify-content-evenly m-5 ">
        <Dropdown >
          <ToastContainer autoClose={1000}/>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-primary px-5'>
            {filterName ? `${filterName}` : 'Filter By Category'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => { dispatch(selectContent('sofa')) }}>Sofa</Dropdown.Item>
            <Dropdown.Item onClick={() => { dispatch(selectContent('watch')) }}>Watch</Dropdown.Item>
            <Dropdown.Item onClick={() => { dispatch(selectContent('chair')) }}>Chair</Dropdown.Item>
            <Dropdown.Item onClick={() => { dispatch(selectContent('wireless')) }}>Wireless</Dropdown.Item>
            <Dropdown.Item onClick={() => { dispatch(selectContent('mobile')) }}>Mobiles</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <input
          type="search"
          className="form-control  "
          placeholder="Search...."
          value={searchTerm}
          onChange={(event) => { dispatch(searchproduct(event.target.value)) }}
          style={{
            width: '500px',
            padding: '0.5rem',
            marginLeft:'10rem',
            marginRight:"15rem"
          }}
        />
      </div>

      <div className='container'>
        <div className='row justify-content-center'>
          {filteredProducts.map((product) => {
            return (
              <div className='col-md-4' key={product.id}>
                <div className='card m-3 shadow'>
                  <Link to={`/SingleProduct/${product.id}`}>
                    <img src={product.imgUrl} className="card-img-top img-fluid" alt="..." style={{ height: '300px' }} />
                  </Link>
                  <div className='card-body d-flex justify-content-between align-items-center'>
                    <div>
                      <h5 className='card-title'>{product.productName}</h5>
                      <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
                      <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
                      <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
                      <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
                      <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
                      <p className='card-text fs-3'>${product.price}</p>
                    </div>
                    <button
                      className='rounded-circle fs-3 text-primary bg-light'
                      style={{ height: '50px', width: '50px' }}
                      onClick={() => {
                        dispatch(addToCart(product));
                        toast.success("Product has been added to cart");
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;







 




