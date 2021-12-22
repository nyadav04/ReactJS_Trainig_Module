import React from 'react'
import logo from "../assets/logo.png"
export default function Header() {
    return (
        <header className="header-container">
            <img src={logo} alt="logo" className="header-logo" />
            <h1>TODO APP</h1>
        </header>
    )
}
