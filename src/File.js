import { useState, useEffect } from 'react';
import axios from 'axios';

const FileApp = () => {
  const createFile = (event) => {
    event.preventDefault();
    let setFileName = event.target.filename.value;
    let FileContent = event.target.filecontent.value;
    axios
      .get(`/file1/createfile/${setFileName}/${FileContent}`)
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
        <input type='text' name='filename' placeholder='File Name' />
        <br />
        <h3>File Content: </h3>
        <input type='text' name='filecontent' placeholder='File Content' />
        <br />
        <button>
          <h3>Add File</h3>
        </button>
      </form>
    </div>
  );
};

export default FileApp;
