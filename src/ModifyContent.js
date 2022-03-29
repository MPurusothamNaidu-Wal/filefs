import { useState, useEffect } from 'react';
import axios from 'axios';

const ModifyContent = () => {
    const [filename, setFilename] = useState();
    const [data, setData] = useState();
    const fetchData = (e) => {
        e.preventDefault();
        let filename = e.target.filename.value;
        setFilename(filename);
        axios
            .get(`/file1/readfile/${filename}`)
            .then((res) => setData(res.data))
            .catch((e) => console.log(e));
    };
    const modifyData = () => {
        axios
            .get(`/file1/addcontent/${filename}/${data}`)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    };
    return (
        <div>
            <form className='todo' onSubmit={fetchData}>
                <label>
                    <h5>File Name</h5>
                </label>
                <input
                    required
                    type='text'
                    name='filename'
                    placeholder='File Name'
                    className='form-control'
                />
                <div>
                    <button className='btn btn-info'>Fetch Data</button>
                </div>
                <label>
                    <h5>Content</h5>
                </label>
                <textarea
                    className='form-control'
                    placeholder='Loading.....'
                    type='text'
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
            </form>
            <div >
                <button className='btn btn-primary' onClick={modifyData}>
                    Modify File
                </button>
            </div>
        </div>
    );
}
export default ModifyContent;