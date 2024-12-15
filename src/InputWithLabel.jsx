import {useRef, useEffect} from 'react';

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

export default InputWithLabel;
