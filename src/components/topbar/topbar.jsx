import React, { useRef, useState } from 'react'
import { GiNightSky } from 'react-icons/gi'
import { BiPhoneCall } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'
import './topbar.scss'
import { copygmail, copyphone } from './copy'
import { AiOutlineBars } from 'react-icons/ai'

const Topbar = ({ menu, setMenu }) => {
  console.log('this is top bar')

  return (
    <div className={`${menu ? 'topbar active' : 'topbar'}`}>
      <div className='wrapper'>
        <div className='left'>
          <a href='' className='logo'>
            <GiNightSky />
          </a>
        </div>

        <div className='right' onClick={() => setMenu(!menu)}>
          <div className='logo'>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
