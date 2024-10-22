import React, { useState, useEffect } from 'react';
import HomePage from '@/pages/home';
import { css } from 'panda/css';


const App: React.FC = () => {
    return (
      <>
          <div className={css({ padding: '100px' })} >
              <HomePage />
          </div>
      </>
    );
};

export default App;
