import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";

function Login() { 
    

    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setpassword] = useState('');
    const signin =  e =>{
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('./')
            })
    }

    const register = e =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=> {
            console.log(auth);
            if (auth ) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
 
    }

    return (
        <div className="login">
          
          <Link to="/">
            <img className="login_logo"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png" alt="" />
          </Link>


          <div className="login__container">
              <h1>Sign-In</h1>

              <form>
                  <h5> E-Mail</h5>
                  <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>

                  <h5> Password</h5>
                  <input type="password" value={password} onChange={ e=> setpassword(e.target.value)}></input>

                  <button type='submit' className="login__signinbuttom" onClick=
                  {signin}>Sign In</button>
              </form>
              <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
              this is only for test purpose vivek
              </p>
              <button className="login__createaccount" onClick={register}> Create Your Amazon account</button>
          </div>
        </div>
    )
}

export default Login
