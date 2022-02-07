import React from 'react';

function Keypad() {
    function consoleFunc() {
        console.log('Entering password...');
    }
  return (<div>
  <input type="password" onChange={consoleFunc} />
  </div>)
  
}

export default Keypad;
