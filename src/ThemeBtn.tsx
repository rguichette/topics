import React from 'react';




function ThemeBtn(props:{onClick:()=>void}) {
  return (
    
<div onClick={props.onClick}>

 Click ME!
</div>
  );
}

export default ThemeBtn;