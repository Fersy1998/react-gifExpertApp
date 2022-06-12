import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

  const [inputValue, setinputValue] = useState("");
  
  const onChangeHandled=(e)=>{
    setinputValue(e.target.value);
    //console.log("llamado a onChangeHandled");
  }
  const submitHandled=(e)=>{
    e.preventDefault();  
    if (inputValue.trim().length>1){
      setCategories(categorias=>[inputValue, ...categorias]);
      setinputValue('');
    }
  }
  return (
  
    <form onSubmit={submitHandled}>
      <input 
      placeholder="Agregar Categoría"
      value={inputValue}
      onChange={onChangeHandled}
      />
    </form>
  
  )
}

AddCategory.propTypes = {
  setCategories:PropTypes.func.isRequired,
}

export default AddCategory