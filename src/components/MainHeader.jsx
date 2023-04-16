import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main_header'>
      <div className='container main_header-container'>
        <div className='main_header-left'>
          <h4>#100DaysOfWorkout</h4>
          <h1>Join the legends of the Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto ea recusandae fugiat iusto commodi?
          </p>
          <Link to='/Plans' className='btn lg'>Get Started</Link>
        </div>
        <div className='main_header-right'>
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header " />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader