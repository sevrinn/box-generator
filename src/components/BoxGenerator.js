import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

const BoxGenerator = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return(
    <form on>
      <h1>Box Generator</h1>
      <p>Please enter a color...</p>
      <input id="color-input" type="text" />
      <input id="submit-btn" type="submit" value="Create Box" />

    </form>
  );
}

export default BoxGenerator