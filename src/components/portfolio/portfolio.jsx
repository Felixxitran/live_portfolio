import React, { useState } from 'react'
import './portfolio.scss'
import items from './data'
import Items from './items'
const Portfolio = () => {
  const [menuItems, setMenuItems] = useState(items)
  return (
    <main className='portfolio'>
      <section className='menu-section'>
        <div className='title'>
          <div className='underline'></div>
        </div>

        <Items menuItems={menuItems} />
      </section>
    </main>
  )
}

export default Portfolio
