import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){
    return (
      <input 
        placeholder="Cortar Cebolla" 
        className="TodoSearch"
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
      />
    );
  }

export {TodoSearch};