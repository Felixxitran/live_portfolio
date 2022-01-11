import React, { useRef, useEffect } from 'react'
import './intro.scss'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import { init } from 'ityped'
import { ImLinkedin, ImFacebook2 } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'

const Intro = () => {
  const textRef = useRef()
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ['science major student at UBC'],
    })
  }, [])

  console.log('this is intro')
  return (
    <div className='intro' id='intro'>
      <div className='container'>
        <div className='left'>
          <div className='about-me'>
            <div className='img-container'>
              <div className='img'></div>
            </div>
            <div className='text'>
              <div className='name'>
                <h1>FELIX TRAN</h1>
              </div>
              <div className='hr'>
                <hr></hr>
              </div>
              <div className='title'>
                <h2>Freshman at UBC Okanagan</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='heading'>
            <h1>HELLO</h1>
          </div>
          <div className='box'>
            <p>
              My name is Felix, I am currently a data{' '}
              <span ref={textRef}></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
