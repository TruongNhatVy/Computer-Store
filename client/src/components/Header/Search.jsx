import React,{useState} from "react"
import logo from "../../assets/images/logo.svg"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authReducer from "../../redux/reducer/AuthReducer"
import axios from 'axios'

const Search = ({ CartItem }) => {
 // fixed Header
 window.addEventListener("scroll", function () {
  const search = document.querySelector(".search")
  search.classList.toggle("active", window.scrollY > 100)
})

  const authReducer = useSelector(state => state.authReducer)
  //console.log(auth);
  const { account, isLogged, isAdmin } = authReducer
  
  const handleLogout = async () => {
    try {
      await axios.get('/account/logout')
      localStorage.removeItem('firstLogin')
      window.location.href("/");
    } catch (err) {
      window.location.href = "/";
    }
  }
  const accountCus = () => {
    
    return (
      <>
        <section className='search'>
          <div className='container c_flex'>
            <div className='logo width '>
              <img src={logo} alt='' />
            </div>

            <div className='search-box f_flex'>
              <i className='fa fa-search'></i>
              <input type='text' placeholder='Search and hit enter...' />
              <span>All Category</span>
            </div>

            <div className="header__menu__right">
              <div className="header__menu__right__item header__menu__item">
                <Link to="/cart">
                  <box-icon type="bx" name="cart">Cart</box-icon>
                </Link>
              </div>

              <div className="header__menu__right__item header__menu__item">
                <Link to="/">
                <i>{account.name}</i>
                </Link>
                <ul className="dropdown">
                  <li><Link to="/">Profile</Link></li>
                  <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  const accAdmin = () => {
    return (
      <>
        <section className='search'>
          <div className='container c_flex'>
            <div className='logo width '>
              <img src={logo} alt='' />
            </div>

            <div className='search-box f_flex'>
              <i className='fa fa-search'></i>
              <input type='text' placeholder='Search and hit enter...' />
              <span>All Category</span>
            </div>

            <div className="header__menu__right">
              {/* <div className="header__menu__right__item header__menu__item">
                  <Link to="/cart">
                    <box-icon type="bx" name="cart">Cart</box-icon>
                  </Link>
                </div> */}

              <div className="header__menu__right__item header__menu__item">
                <Link to="/">
                <i>{authReducer.state.account.name}</i>
                </Link>
                <ul className="dropdown">
                  <li><Link to="/">Profile</Link></li>
                  <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0
  }
 
  return (
    <>
      <ul style={transForm}>
        {
          isLogged
            ? (isAdmin
              ? accAdmin() : accountCus())
            : <section className='search'>
              <div className='container c_flex'>
              <div className='logo width '>
                <img src={logo} alt='' />
              </div>
  
              <div className='search-box f_flex'>
                <i className='fa fa-search'></i>
                <input type='text' placeholder='Search and hit enter...' />
                <span>All Category</span>
              </div>
  
              <div className="header__menu__right">
                <div className="header__menu__right__item header__menu__item">
                  <Link to="/cart">
                    <box-icon type="bx" name="cart">Cart</box-icon>
                  </Link>
                </div>
  
                <div className="header__menu__right__item header__menu__item">
                  <Link to="/SignIn">
                    <button>Sign In</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        }
      </ul>
    </>
  )
  
}

export default Search