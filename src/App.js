import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';

import Home from './pages/Home';
import { theme } from './theme';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;