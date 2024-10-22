import React, { useState, useEffect } from 'react';
import HomePage from '@/pages/home';
import { css } from '/styled-system/css';


const App: React.FC = () => {
    return (
      <>
          <div className={css({ padding: '12px 24px' })} >
              <HomePage />
          </div>
      </>
    );
};

export default App;
