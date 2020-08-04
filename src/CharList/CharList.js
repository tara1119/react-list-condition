import React from 'react';

const charList = (props) => {

   const style = {
       display: 'inline-block',
       padding: '16px',
       margin: '16px',
       border: '1px solid black',
   }
   return (
    <div style={style}>
        {props.character}
    </div>
   );

}

export default charList;