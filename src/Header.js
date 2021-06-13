import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';



function Header() {
    
  
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if(user) {
      auth.signOut();
    }
  }
    return (
        <div className='header'>
          <Link to="/">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header_search">
                <input className="header_searchinput" type="text">

                </input>
                <SearchIcon className="header_searchicon"></SearchIcon>
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header_option">
                  <span className="header_option1">{user ? 'Hello User': 'Hello Guest'}
                  </span>
                  <span className="header_option2">{user ? 'Sign out': 'Sign In'}
                  </span>

                </div>
                </Link>
                <div className="header_option">
                <span className="header_option1">return
                  </span>
                  <span className="header_option2">order
                  </span>
                </div>
                <div className="header_option">
                <span className="header_option1">Your
                  </span>
                  <span className="header_option2">Prime
                  </span>
                </div>
                <Link to="/checkout">

                <div className="header_optionbasket">
                <ShoppingCartIcon>
                  </ShoppingCartIcon>
                  
                  <span className="header__option2 header_basketcount">
                        { basket.length } 
                  </span>
               </div>
               </Link>
              
            </div>
            
        </div>
    );

}

export default Header
