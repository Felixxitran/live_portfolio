import React, { useState } from 'react'
import './work.scss'
import items from './work_data'
import ItemsWork from './items_work'
const Work = () => {
  const [menuItems, setMenuItems] = useState(items)
  return (
    <main className='portfolio'>
      <section className='menu-section'>
        <div className='title'>
          <div className='underline'></div>
        </div>

        <ItemsWork menuItems={menuItems} />
      </section>
    </main>
  )
}

export default Work
