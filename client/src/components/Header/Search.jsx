import React from "react"
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

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
                  <box-icon type="bx" name="cart"></box-icon>
                </Link>
              </div>
              <div className="header__menu__right__item header__menu__item">
                <Link to="/SignIn">
                  <box-icon type="bx" name="user" va></box-icon>
                </Link>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Search
