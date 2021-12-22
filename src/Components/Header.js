import React from 'react';
import symbol from '../Images/symbol.png'
const Header = () => {
    return (
        <div>
            <h1 style={{display:'flex',justifyContent:"center",alignItems:'center'}}><img src={symbol}/>Todo-Tasks</h1>
        </div>
    );
};

export default Header;