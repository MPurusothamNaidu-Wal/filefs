import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import FileApp from './File';
import FolderApp from './CreateFolder';
import FolderFind from './FolderContents';
import ModifyContent from './ModifyContent';
function App() {
  return (
    <div className='App'>
      {/* <CityCookie />
      <DetailCookie /> */}
      <BrowserRouter>
        <Link to='/folder' className='col-lg-3 btn btn-secondary'>
          FolderApp
        </Link>
        <Link to='/file' className='col-lg-3 btn btn-primary'>
          File App
        </Link>
        <Link to='/filedel' className='col-lg-3 btn btn-secondary'>
          File Delete
        </Link>
        <Link to='/modify' className='col-lg-3 btn btn-primary'>
          Modify File
        </Link>
        <Routes>
          {/* <Route path='/register' element={<LoginApp />} />
          <Route path='/login' element={<ValidateApp />} /> */}
          <Route path='/folder' element={<FolderApp />} />
          <Route path='/filedel' element={<FolderFind />} />
          <Route path='/file' element={<FileApp />} />
          <Route path="/modify" element={<ModifyContent />} />
        </Routes>
      </BrowserRouter>
      {/* <CarApp /> */}
      {/* <ProductContext.Provider value={value}>
                <ProductForm />
                <ProductList />
            </ProductContext.Provider> */}
      {/* <CityApp></CityApp> */}
      {/* <AuthorApp></AuthorApp>
      <TodoApp></TodoApp> */}
    </div>
  );
}

export default App;
