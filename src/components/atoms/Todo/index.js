import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Styledli = styled.li `
    font-family: ${font('primary')};
`

const Todo = ({ onClick, completed, text }) => (
    <Styledli
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
    {text}
    </Styledli>
)

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  reverse: PropTypes.bool
}

export default Todo
