import React, { useState } from 'react';

function Challenge() {
  const [show, setShow] = useState(false);
  return (
    <div className="menu-challenge">
      <div className="Menu-Heading">
        <div className="container">
          <h1 className="menu-title">Challenge</h1>
          <button onClick={() => setShow(!show)}> ... </button>
          <p className="menu-desc">Choisis ton champion pour réussir le scénario proposé</p>
        </div>
      </div>

      {show && (
        <div clasName="menu-content challenge">
          <h1 className="inner-menu-title">Challenge</h1>
          <p className="inner-menu-desc">Choisis ton champion pour réussir le scénario proposé</p>
        </div>
      )}
    </div>
  );
}

export default Challenge;
