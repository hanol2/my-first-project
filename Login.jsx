import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import axios from '../axios';

const Login = () => {

  const id = useRef();
  const pw = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('handleLogin function')
    axios.post('/user/login', {
      id: id.current.value,
      pw: pw.current.value
    }).then (res =>{
      console.log(res.data.msg)
      if (res.data.msg == "success"){
        alert('로그인 성공!')
        window.location.href = "/"
    //     // sessionStorage.removeItem('user)
    // // ==> "undefined"

    // // sessionStorage.setItem('user', null);
            
    // 1) 세션에 값 등록 : sessionStorage.setItem('key', 'value')
    // 2) 세션에 있는 값 가져오기 : sessionStorage.getItem('key')
    // 3) 세션 값 삭제하기 : sessionStorage.removeItem('key')

    // 1-2) 세션에 값을 객체형태로 등록하기 : 
    //     sessionStorage.setItem('key', JSON.stringify(object));
          //  sessionStorage.setItem('user', JSON.stringify(res.data.user));

    // 2-2) 세션에 있는 객체를 가져오기 :
    //     JSON.parse(sessionStorage.getItem('key'));
    // */

    // 현재 세션 값?
    //  const userObj = JSON.parse(sessionStorage.getItem('user'));
        
      }else {
        alert('아이디와 비밀번호를 다시 확인하세요!')
        window.location.href = "/login"
      }
    })
  }

  return (
    <div className='section'>
      <div className='section-left'>
        <form onSubmit={handleLogin}>
        <img className='login-logo' src="/img/Group 12.png"></img>
          <h2 className='sub-title'>Welcome Back</h2>
          <button className='email-login-btn'><img className='google-logo' src="\img\google.png"></img><div>Log in with Google</div><div></div></button><br></br>
          <input className="input-btn" type="text" placeholder='You id' ref={id}></input><br></br>
          <input className="input-btn" type="password" placeholder='You Password' ref={pw}></input><br></br>
          <button className='login-btn'type="submit"><div></div>Log in <span className='arrow'>→</span></button><br></br>
          <span className='signup'>Don't have an account yet? 
            <span> </span>
            <Link to="/join">Sign up
            </Link></span>
        </form>
      </div>
      <div className='section-right'>
        <img className='login-img' src="/img/login.svg"></img>
      </div>
    </div>
  )
}

export default Login