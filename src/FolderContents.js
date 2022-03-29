import { useState, useEffect } from 'react';
import axios from 'axios';

const FolderFind = () => {
    let [file, setfile] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    function getData() {
        axios
            .get('/file1/readdirectory')
            .then((res) => setfile(res.data))
            .catch((e) => console.log(e));
    }
    function deleteFile(val) {
        console.log(val);
        axios
            .get(`/file1/deletefile/${val}`)
            .then((res) => { console.log(res); getData() })
            .catch((e) => console.log(e));
        getData();
    }

    return (
        <div className='text-center'>
            <div>
                <table>
                    {file.map((val, index) => {
                        return (
                            <tr>
                                <td><h3>{val}</h3></td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => deleteFile(val)}
                                    >
                                        Delete item
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
};
export default FolderFind;
