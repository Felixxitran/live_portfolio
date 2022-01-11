import React, { useState } from 'react'
import './Menu.scss'
import { BsHouse, BsPeopleCircle } from 'react-icons/bs'
import { GiAtomicSlashes } from 'react-icons/gi'
import { FaMedal } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Menu = ({ menu, setMenu }) => {
  return (
    <div className={`${menu ? 'menu active' : 'menu'}`}>
      <ul
        className='last'
        onClick={() => {
          setMenu(false)
        }}
      >
        <li className='home'>
          <BsHouse />
          <Link to='/'>Home</Link>
        </li>
        <li className='project'>
          <GiAtomicSlashes />
          <Link to='/portfolio'>Projects</Link>
        </li>
        <li className='contest'>
          <FaMedal />
          <Link to='/work'>Certificates</Link>
        </li>
        <li className='contact2'>
          <BsPeopleCircle />
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
