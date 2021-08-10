import React from 'react';

import ThemeBtn from './ThemeBtn';
import {Home} from './pages'


import { setTheme } from './actions/changeTheme';
import { useSelector, useDispatch } from 'react-redux'


import {State} from './store'
// let t = useSelector


function App() {
const isDark = useSelector((state:State )=>state.theme.dark)
const dispatch = useDispatch()



  return (
    
<div style={{backgroundColor: isDark ? '#333': 'white'}}>

 <p>LIGHT</p>

{ console.log("App loaded.. ",isDark )}

 <ThemeBtn onClick={()=>{
   dispatch(setTheme(!isDark))
// console.log("App.. ",state.theme.dark )

 }}/>
<Home/>
</div>
  );
}

export default App;
