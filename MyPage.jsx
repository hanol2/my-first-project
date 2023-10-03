import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios';

const MyPage = () => {
    return (
        <div className='background'>
           
           <p className='delete-btn'>회원정보수정</p>
            <Link to='/delete'><p className='delete-btn'>회원탈퇴</p></Link>
        </div>
    )
}

export default MyPage