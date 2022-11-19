import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {useDispatch} from "react-redux";
import {dispatchLogin} from "../../redux/actions/AuthAction";

import { showErrMsg, showSuccessMsg } from "../../utils/Notification";

const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

function SignIn() {
  const [user, setUser] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { email, password, err, success } = user

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value, err: '', success: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/accounts/addAccount", { email, password })
      setUser({ ...user, err: '', success: res.data.msg })

      localStorage.setItem('firstLogin', true)

      dispatch(dispatchLogin())
      navigate('/')

    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: '' })
    }
  }
  return (
    <div className="form-container sign-in-container">
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" value={email} name="email" onChange={handleChangeInput} />
        <input type="password" placeholder="Password" value={password} name="password" onChange={handleChangeInput} />
        <Link to="/forgot_password">Forgot your password?</Link>
        <button type="submit" >Sign In</button>
      </form>
    </div>
  )
}

export default SignIn