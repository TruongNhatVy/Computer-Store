import React,{useState} from "react"
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"

const Search = () => {

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
            <img src={logo} alt='' 


            />
          </div>

         

          <div className="header__menu__right">
              <div className="header__menu__right__item header__menu__item">
                <Link to="/cart">
                  <box-icon type="bx" name="cart"></box-icon>
                </Link>
              </div>
              <div className="header__menu__right__item header__menu__item">
                <box-icon type="bx" name="user"></box-icon>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Search
