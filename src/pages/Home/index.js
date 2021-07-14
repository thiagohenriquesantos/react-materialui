import React from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { LeftBar } from '../../components/LeftBar/index';

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Header classes={classes} theme={theme} darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Box display='flex'>
        <LeftBar classes={classes}/>
        <Main/>
      </Box>
    </div>
  );
}

export default Home;