import ThemeBtn from './ThemeBtn';
import {Home} from './pages/Home'


import { setTheme } from './actions';
import { useSelector, useDispatch } from 'react-redux'

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'


import {State} from './store'
import {ProfilePage} from './pages/Profile';

function App() {
const isDark = useSelector((state:State )=>state)
const dispatch = useDispatch()


  return (
    <Router>

<div style={{backgroundColor: isDark ? '#333': 'white'}}>
 <Link to='/'>LOGO</Link>

 <ThemeBtn onClick={()=>{
   dispatch(setTheme(!isDark))

 }}/>

 
</div>
<Switch>
<Route exact path="/">
     <Home/>
</Route>
<Route path="/full_profile">
  <ProfilePage/>
</Route>

</Switch>

</Router>
  );
}

export default App;
