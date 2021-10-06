import React, { useState } from 'react';
import { render } from 'react-dom';

import './style.scss';

function AppHooks() {
  const [message, setMessage] = useState('Hello world');

  const handleMessage = (_e) => {
    setMessage('Hi Nicolas !');
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleMessage}>Changer de message</button>
    </div>
  )
}

render(
  <AppHooks />,
  document.getElementById('wrapper')
)

