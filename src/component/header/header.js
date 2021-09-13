import React from "react";
import  './header.css'
import logo from "./digiKala.png"
export function Header(){
    const style={
        height: "50px",
        width:" 120px",
        padding: "10px",
    }
    const placeholder="...جستجو در دیجی کالا"
    return(
        <div className="header">

            <div className="header-right">
                <div className="container">
                    <input type="text" placeholder={placeholder} autoComplete="off" className="searchInput"/>
                    <img src={logo} style={style}/>
                    </div>
            </div>
            <div className="header-left">
                <div className="container">

                    <i className="fa fa-shopping-cart icon-shopping"  ></i>
                    <button className="btn-login">ورود به حساب کاربری<i className="fa fa-user icon-user"  ></i></button>
                </div>
            </div>
        </div>
    )
}