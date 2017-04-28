import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.ul`
  font-family: ${font('primary')};
`

export const TodoList = ({ todoliststate = [], onTodoClick }) => {
  return {
    <Styledul>
    {todoliststate.map(todo =>
        <Todo key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        />
        )}
    </Styledul>
  };
};

TodoList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}
