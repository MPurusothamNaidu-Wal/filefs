import { useState, useEffect } from 'react';
import axios from 'axios';

const FolderApp = () => {
  const createFile = (event) => {
    event.preventDefault();
    let setFileName = event.target.foldername.value;
    axios
      .get(`/file1/createfolder/${setFileName}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form className='todo' onSubmit={createFile}>
        <h1>File App</h1>
        <h3>File Name:</h3>
        <input type='text' name='foldername' placeholder='File Name' />
        <br />
        <br />
        <button>
          <h3>Add File</h3>
        </button>
      </form>
    </div>
  );
};

export default FolderApp;
