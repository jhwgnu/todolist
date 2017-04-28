import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Todo = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Todo.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Todo.defaultProps = {
  palette: 'grayscale',
}

export default Todo
