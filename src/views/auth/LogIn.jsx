import React, { useState } from 'react'
import './login.css'
import MyNav from "../../comp/myNav";
import axios from 'axios';
import Footer from '../footer';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [uId, setUId] = useState('')
  const [user, setUser] = useState([])

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    // console.log(form[0].value);
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
    axios.post(`https://watch-it-bakend.onrender.com/api/signin`,JSON.stringify(formJson),{
      headers : {'Content-Type' : 'application/json'}
    }).then(function (response){
      console.log(response.data.data);
      if(response.data.data){
        setUser(response.data.data)
        navigate('/')
      }else {
        alert('wrong pass')
        console.log('noooo')
      }
      
    }).catch(function (error){
      console.log(error)
    })

}
  return (
  <>
  <MyNav/>
  
  
 

    <div className="container">
      <div className="sh">
        <div className="form-box">
          <div className="form-value">
            <div class="card">
              <span></span>
              <div class="content">
                <form method='POST' onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={(e) => setUId(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={(e) => setUId(e.target.value)} />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" id="check" name="check" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Log IN</button>
                </form>
              </div>
              <h2>weclcome back </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
     </>
  )
}

export default LogIn