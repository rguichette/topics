import React, {useState} from 'react';

import ThemeBtn from './ThemeBtn';
import {Home} from './pages/Home'


import { setTheme } from './actions';
import { useSelector, useDispatch } from 'react-redux'

import {BrowserRouter as Router} from 'react-router-dom'


import {State} from './store'

function App() {
const isDark = useSelector((state:State )=>state)
const dispatch = useDispatch()



  return (
    <Router>

<div style={{backgroundColor: isDark ? '#333': 'white'}}>
 <p>LIGHT</p>

 <ThemeBtn onClick={()=>{
   dispatch(setTheme(!isDark))

 }}/>

   <Home/>
 
</div>
</Router>
  );
}

export default App;
