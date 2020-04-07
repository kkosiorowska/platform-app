import React from 'react'

import './NavigationItems.scss'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul>
    <NavigationItem link="/" exact>
      Dashboard
    </NavigationItem>
    <NavigationItem link="/calendar">Calendar</NavigationItem>
    <NavigationItem link="/raports">Raports</NavigationItem>
  </ul>
)

export default navigationItems
