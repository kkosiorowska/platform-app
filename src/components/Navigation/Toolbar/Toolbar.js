import React from 'react'

import './Toolbar.scss'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
  <header>
    <nav>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
