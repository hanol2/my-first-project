import React, { useRef } from 'react'
import axios from '../axios';

const Join = () => {

    const id = useRef();
    const pw1 = useRef();
    const pw2 = useRef();
    const nick = useRef();

    const checkId = (e) => {
        e.preventDefault();
        axios.post('./user/checkId', {
            id: id.current.value
        }).then((res) => {
            console.log(res.data.msg)
            if (res.data.msg == 'uniq') {
                alert('사용가능한 ID')
            } else {
                alert('이미 있는 ID입니다')

            }
        })
    }

    const handleJoin = (e) => {
        e.preventDefault();
        axios.post('./user/join', {
            id: id.current.value,
            pw1: pw1.current.value,
            pw2: pw2.current.value,
            nick: nick.current.value
        }).then((res) => {
            console.log(res.data.msg)
            if (res.data.msg == 'success') {
                alert('회원가입 성공!');
                window.location.href = "/login";
            } else {
                alert('회원가입 실패!')

            }
        })
    }

    return (
        <div className='section'>
             <div className='section-right'>
                <img className='login-img' src="/img/login.svg"></img>
            </div>
            <form className="join-form" onSubmit={handleJoin}>
                <h5>Join</h5>
                <input className="input-btn" type="text" placeholder="Enter Id" ref={id} /><br></br>
                <button className='login-btn double-check' onClick={checkId}>Duplicate Check</button>
                <span style={{ color: 'red' }}></span>
                <input className="input-btn double-check" type="password" placeholder="Enter Password" ref={pw1} />
                <input className="input-btn double-check" type="password" placeholder="Confirm Password" ref={pw2} />
                <div></div>
                <input className="input-btn" type="text" placeholder="Enter NickName" ref={nick} /><br></br>
                <div></div>
                <button className='login-btn double-check' type='submit'>Join</button>
            </form>
        </div >
    )
}

export default Join