import React, { useState } from 'react'
import './signup.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyNav from '../../comp/myNav';
import axios from 'axios';
import Footer from '../footer';
import { useNavigate } from 'react-router-dom';






const SignUp = () => {

const [user, setUser] = useState([])
const [uId, setUId] = useState('')


const navigate = useNavigate();
   

  
         
            
           
       

       


    let vals = {}

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        // console.log(form[0].value)
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson)
        axios.post('http://127.0.0.1:5000/api/get-user', JSON.stringify(formJson), {
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            console.log(response.data);
            if(response.data){
                setUser(response.data)
                navigate('/login')
              }else {
                alert('User Exists')
                console.log('noooo')
              }
            
        }).catch(function (error) {
            console.log(error);
            // alert('User Exists')
        })
    }
    
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     // console.log(form);
    //     // console.log(form[0].value);
    //     const formData = new FormData(form);
    //     const formJson = Object.fromEntries(formData.entries());
    //     console.log(formJson);
    // }
    return (
        <>
            <MyNav />

            <div className="container">
                <div className="sh">
                    <div className="form-box">
                        <div className="form-value">
                            <div className="container">
                                <div className="col-">
                                    <div className="card1">
                                        <form method='POST' onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">User Name(id)</label>
                                                <input type="text" className="form-control" name='uId'   />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="email" className="form-control" id="email" name="email"  />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="password" name="password"  />
                                            </div>
                            
                                            <div className="mb-3 form-check">
                                                <input type="checkbox" id="check" name="check" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Sign Up</button>
                                        </form>
                                        {/* {
                                            bike.map((b) =>{
                                                return (
                                                    <>
                                                    <h1>{b.make}</h1>
                                                    <img src={b.img} height='50px' />
                                                    </>

                                                )
                                            })
                                        } */}

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SignUp;





