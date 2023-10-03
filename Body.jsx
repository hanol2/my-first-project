import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Header';
import Login from './Login';
import Join from './Join';
import MyPage from './MyPage';
import Review from './Review';
import Update from './Update';
import Rank from './Rank';
import Delete from './Delete';

const Body = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Header></Header>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/join' element={<Join></Join>}></Route>
            <Route path='/mypage' element={<MyPage></MyPage>}></Route>
            <Route path='/review' element={<Review></Review>}></Route>
            <Route path='/update' element={<Update></Update>}></Route>
            <Route path='/rank' element={<Rank></Rank>}></Route>
            <Route path='/delete' element={<Delete></Delete>}></Route>

        </Routes>
    </div>
  )
}

export default Body