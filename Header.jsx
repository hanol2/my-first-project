import React from 'react'
import { Link } from 'react-router-dom';
import axios from '../axios';

const Header = () => {
    return (

        <div className='background'>
            <div className='box'>
                <header className='box-header'>
                    <input className='search-input' type="text"/>
                    <Link to="/login">
                        <button className='nav-login-btn' >로그인</button>
                    </Link>
                </header>
                <div className='abouttime-box'>
                    <nav className='menu'>
                        <div className='menubar'>
                            <Link to='/'><button className="menubar-list">홈</button></Link>
                            <Link to='/mypage'><button className="menubar-list">마이페이지</button></Link>
                            <Link to='/review'><button className="menubar-list">리뷰남기기</button></Link>
                            <Link to='/update'><button className="menubar-list">최근본영화</button></Link>
                            <Link to='/rank'><button className="menubar-list">별점높은순</button></Link>
                        </div>
                    </nav>
                    <div>
                        <main className='main'>
                            <div>
                                <img className='main-img' src="/img/sup.jpg"></img>
                            </div>
                            <div>
                            <img className='main-nav-logo' src="/img/Group 12.png"></img>
                            </div>
                            <section>
                                <div className='arrow'>
                                    <button className='arrow-btn'>◀</button>
                                    <button className='arrow-btn'>▶</button>
                                </div>
                                {/* 캐러셀 */}
                                <div className='movie'>
                                    <div className='movie-img'></div>
                                    <div className='movie-img'></div>
                                    <div className='movie-img'></div>
                                    <div className='movie-img'></div>
                                    <div className='movie-img'></div>
                                    <div className='movie-img'></div>
                                    <div className='movie-img'></div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header