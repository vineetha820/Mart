import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../redux/ProductActions/ProductActioner';
import { products } from './products/Products';
import table from '../Images/table.jpg';

function Shop() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1
        className="text-center d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${table})`, height: '200px' }}
      >
        Product
      </h1>

      <div className="container mt-5">
        <div className="row justify-content-center">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card m-3 shadow">
                <Link to={`/SingleProduct/${product.id}`}>
                  <img
                    src={product.imgUrl}
                    className="card-img-top img-fluid"
                    alt={product.productName}
                    style={{ height: '300px' }}
                  />
                </Link>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{product.productName}</h5>
                    <div>
                      <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
                      <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
                      <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
                      <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
                      <span style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faStar} /></span>
                    </div>
                    <p className="card-text fs-3">${product.price}</p>
                  </div>
                  <button
                    className="rounded-circle fs-3 text-primary bg-light"
                    style={{ height: '50px', width: '50px' }}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
