import React from 'react'
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Button from 'react-bootstrap/Button';
import MyNav from '../../comp/myNav';
import "./shop.css"
import Footer from '../footer';



const Cart = (id) => {
  const { cart, setCart } = useContext(DataContext)
  // console.log(cart)

  const ClearCart = () => {
    return setCart({ size: 0, total: 0, products: {} });

  }
  const addProduct = (id) => {
    let copyCart = { ...cart };
    // console.log(copyCart)
    copyCart.size++;
    copyCart.total += Math.floor(copyCart.products[id].data.price * 100) / 100
    copyCart.products[id] ?
      copyCart.products[id].quantity++
      :
      copyCart.products[products.id] = { data: products, quantity: 1 }
    setCart(copyCart);
  }


  const removieProduct = (id) => {
    let copyCart = { ...cart };
    copyCart.size--;
    copyCart.total -= Math.floor(copyCart.products[id].data.price * 100) / 100
    copyCart.products[id].quantity > 1 ?
      copyCart.products[id].quantity--
      : delete copyCart.products[id]
    setCart(copyCart);
  }

  const deleteProduct = (id) => {
    let copyCart = { ...cart };
    copyCart.size -= copyCart.products[id].quantity
    copyCart.total -= Math.floor(copyCart.products[id].quantity * copyCart.products[id].price * 100) / 100;
    delete copyCart.products[id]
    setCart(copyCart);
  }

  return (
    <>
      <MyNav />
      <h1 id="cart" className="d-flex justify-content-center">CART  <i className="fa fa-cart-arrow-down me-3" aria-hidden="true"></i>{cart.total ? <h1> <i className="fa fa-usd" aria-hidden="true"></i> {cart.total} </h1>: null} </h1>

      {Object.values(cart.products).map((p, index) => {
    
        // console.log(p)
        return (

          <div className="container" key={index}>
            <div className="row">
              <div className="col-md-5">
                <img src={p.data.img} alt={p.data.title} height='250' width='250'></img>
                <h1 className="text-uppercase text-black-50">{p.data.title}</h1>
                <p className="lead fw-bold">
                  rating {p.data.rating} <i className="fa fa-star"></i>
                </p>
                <h3 className="display-5 fw-bold my-4" >${p.data.price}</h3>
                <button className="cart-delete" variant="dark" onClick={() => deleteProduct(p.data.id)}>clear</button>
               
              </div>
              <div className="col-5 d-flex-justify-content-center">
                <span className="span">
                  <button className="cart-add" variant="secondary" onClick={() => addProduct(p.data.id)}>add</button>
                  <h2 className="quan">{p.quantity}</h2>
                  <button className="cart-remove" variant="light" onClick={() => removieProduct(p.data.id)}>remove</button>
                </span>

              </div>
              <hr></hr>
            </div>
          </div>

        )

      })}
      <div className="container" id='container'><button className="cart-delete" variant="danger" onClick={() => ClearCart()}>Delete</button></div>
      <div className="container" id='container'><button href='/check-out' className="cart-delete" variant="danger" >Check Out</button></div>
      <Footer />
    </>

  )
}

export default Cart;