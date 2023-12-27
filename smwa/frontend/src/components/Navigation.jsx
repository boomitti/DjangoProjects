import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={NavLink} to='/'
          name='home'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={NavLink} to='/students'
          name='students'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Students
        </Menu.Item>

        <Menu.Item
          as={NavLink} to='/manage'
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Manage Students
        </Menu.Item>
      </Menu>
    )
  }
}