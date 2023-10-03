import React,{useRef} from 'react';
import axios from '../axios';

const Delete = () => {
    
    // const userObj = JSON.parse(sessionStorage.getItem('user'));
    // console.log('session', userObj)

    const id = useRef();
    const pw = useRef();




    const handleDelete = (e) => {
        e.preventDefault();
        console.log('Delete function')
        axios.post('/user/delete', {
            id : id.current.value,
            pw : pw.current.value
        }).then (res=>{
           console.log(res.data.msg)
           if (res.data.msg== "success"){
                alert('탈퇴 성공!');
                // sessionStorage.removeItem('user')
            } else if(res.data.msg== "failed"){
                alert('비번을 확인해주세요!');
            }else {
                alert('탈퇴 실패!')
            }
        })

    }

    return (
            <div className='background'>
                <div className='box'>
                    <div>
                        <form onSubmit={handleDelete}>
                            <h3>About Time</h3>
                            <h2>Welcome Back</h2>
                            <hr></hr>
                            <input type="text" placeholder='id' ref={id}></input><br></br>
                            <input type="password" placeholder='password' ref={pw} ></input><br></br>
                            <button type="submit">회원탈퇴</button><br></br>

                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Delete