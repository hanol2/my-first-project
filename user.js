const express = require('express')
const router = express.Router();
const conn = require('../config/database');
const e = require('express');


// 회원가입 시 ID 중복 체크
router.post('/checkid', (req,res)=>{
    console.log('CheckId Router!', req.body);
    let {id} = req.body;

    let sql= "SELECT id FROM about_member WHERE id=?"
    conn.query(sql, [id], (err,rows)=>{
        console.log('rows',rows);
        if ( err == null ) {
            if(rows.length > 0){
                res.json({msg : "dup"})
            } else {
                res.json({msg : "uniq"})
            }
        }
    })
})

// 회원가입 라우터
router.post('/join', (req,res)=>{
    console.log('Join Router!',req.body );
    let {id,pw1, pw2,nick} = req.body;

    let sql = "INSERT INTO about_member VALUES (?,?,?)"
    conn.query(sql, [id,pw1,pw2,nick], (err,rows)=>{
        console.log('rows',rows);
        if (rows) {
            res.json({msg :'success'})
        } else {
            res.json({msg :'failed'})
        }

    })

})

// 로그인 라우터
router.post('/login', (req,res)=>{
    console.log('login Router!', req.body);
    let {id,pw} = req.body;
    let sql = "SELECT id,nick FROM about_member WHERE id=? and pw=?";
    conn.query(sql, [id,pw], (err,rows)=>{
        console.log('rows',rows);
        if (rows.length > 0){
            res.json({msg : "success"})
        } else{
            res.json({msg : "failed"})
        }
    })
})

// 회원탈퇴 라우터
router.post('/delete', (req,res)=>{
    console.log('delete Router!', req.body)
    let {id, pw} = req.body;

    let sql1 = "SELECT id,pw FROM about_member WHERE id=? and pw=?";
    let sql2 = "DELETE FROM about_member WHERE id=? and pw=?";
    conn.query(sql1, [id,pw], (err,rows)=>{
        console.log('rows', rows);
        if (rows) {
            conn.query(sql2, [id,pw], (err,rows)=>{
                if (rows.length > 0){
                    res.json({msg : "success"})
                } else{
                    res.json({msg : "failed"})
                }
            })
        } else {
            res.json({msg:'err'})
        }
    })
})



module.exports= router

