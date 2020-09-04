import React from 'react'
import logo from '../logo.svg';

export default function Header (props){
  
  
  

  return(
    <section className="headerNews">
      <div className="header_title">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>News Board</h1>
      </div>
      <div className="header_right">
        <button className="langBtn" value="fr" onClick={(e) => {
        props.changeCountry(e.target.value)


        }}>Fr</button>

        <button className="langBtn" value="be" onClick={(e) => {
          props.changeCountry(e.target.value)

          
        }} >Be</button>

          <button className="langBtn" value="us" onClick={(e) => {
           props.changeCountry(e.target.value)
          
     
          
        }} >Us</button>

      </div>
    </section>
  )
}