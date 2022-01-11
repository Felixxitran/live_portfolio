import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//pages
import Intro from './components/intro/intro'
import Contact from './components/contact/contact'
import Menu from './components/menu/Menu'
import Topbar from './components/topbar/topbar'
import Portfolio from './components/portfolio/portfolio'
import Work from './components/work/work'

const ReactRouterSetup = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className='app'>
      <Router>
        <Topbar menu={menu} setMenu={setMenu} />
        <Menu menu={menu} setMenu={setMenu} />
        <section className='section'>
          <Route exact path='/'>
            <Intro />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/work'>
            <Work />
          </Route>
        </section>
      </Router>
    </div>
  )
}
export default ReactRouterSetup
