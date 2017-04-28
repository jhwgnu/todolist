import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.ul`
  font-family: ${font('primary')};
`

export const TodoList = ({ todoliststate = [], onTodoClick }) => {
  return {
    <Styledli>
    {todoliststate.}
  }
}

TodoList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}
