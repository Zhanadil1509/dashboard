import React, {useContext, useState} from 'react';
import {ContextApp} from "./App";
import {Link} from "react-router-dom";

const Create = () => {

  const {dispatch} = useContext(ContextApp)
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')

  const getHeading = (e) => {
    setHeading(e.target.value)
  }
  const getDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleSubmit = () => {
    dispatch({
      type: 'test_update',
      card: {
        heading, description
      }
    })
  }

  return (
    <div className={'create'}>
      <input
        className={'default-input'}
        onChange={getHeading}
        type="text"
      />
      <textarea
        className={'default-input default-input__area'}
        onChange={getDescription}
      />
      <div>
        <Link to={'/'} className={'default-button mr1'} onClick={handleSubmit}>
          Добавить
        </Link>
        <Link to={'/'} className={'default-button'}>Отмена</Link>
      </div>
      <br/><br/><br/>

    </div>
  );
};

export default Create;