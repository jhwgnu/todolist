import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const AddTodo = ({ statefunction, onAddTodo, onPostTodo }) => {
  let input;

  // add 버튼
  const onSubmit = () => {
    if (input != undefined) {
      onAddTodo(input.value);
      input.value = '';
    }
  };

  // post 버튼
  const onPut = () => {
    if (input != undefined) {
      onPostTodo(input.value);
      input.value = '';
    }
  };

  return {
    <div>
      <input ref={node => {input = node;}} />
      <Button type="submit" onClick={onSubmit}>ADD Todo</Button>
      <Button type="submit" onClick={onPut}> POST todo</Button>
    </div>
  };
};

AddTodo.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}
