import {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const InputWithLabel = (props) => {
  const {children, todoTitle, handleTitleChange} = props;
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle])
  return (
    <>
        <label htmlFor="todoTitle">{children}</label>
        <input id= "todoTitle" name="title" value={todoTitle} onChange={handleTitleChange} ref={inputRef}></input>
    </>
  )
}

InputWithLabel.propTypes = {
  children: PropTypes.string,
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
}

export default InputWithLabel;
