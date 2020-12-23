import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Left from './Left/Left'
import Right from './Right/Right'

const Base = ({children}) => {
    return (
        <div style={{backgroundColor: "#EAF0F1"}}>
          <Header />
          <div style={{ display: "flex", flex: 1}}>
          <Left/>
          <div style={{ flex: 2 , minHeight: "100vh"}}>{children}</div>
          <Right/>
          </div>
        </div>
      );
    }

export default Base;
