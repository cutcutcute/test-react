import React from "react";
import { NavLink } from "../shared/NavLink";

export const Header = ()=>{


    return <header className="header">
        <nav className="header__nav">
            <div className="header__nav-item"><NavLink text="Главная"/></div>
            <div className="header__nav-item"><NavLink text="О нас"/></div>
            <div className="header__nav-item"><NavLink text="События"/></div>
            <div className="header__nav-item"><NavLink text="Сообщество"/></div>
            <div className="header__nav-item"><NavLink text="Новости"/></div>
        </nav>
    </header>

}