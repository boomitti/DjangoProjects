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
          as={NavLink} to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/movies"
          name='movies'
          active={activeItem === 'movies'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/manage"
          name='manage'
          active={activeItem === 'manage'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}