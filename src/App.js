import { Typography } from '@mui/material';
import './App.css';
import {NavBar, Home, Contact, Project, Service, About} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Typography className='w-full h-screen'>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </Typography>
    </BrowserRouter>
  )
}

export default App;
