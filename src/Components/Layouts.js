import React from 'react';

export function HeaderLayout(props) {
  return (
    <header>
      <div className="flex-container">
        <div className="logo">
          <h1>MyAgiList</h1>
        </div> 
        <div className="separation">
          <button>+</button>
        </div>  
      </div>
    </header>
  )
};
