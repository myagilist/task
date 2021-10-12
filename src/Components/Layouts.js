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
        <div className="personal">
          <img src={props.user.user_metadata.avatar_url} />
          <p className="pseudo">{props.user.user_metadata.user_name}</p>
        </div>  
      </div>
    </header>
  )
};
