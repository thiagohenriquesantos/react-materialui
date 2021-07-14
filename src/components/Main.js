import { Toolbar, Typography, Box, Grid } from '@material-ui/core';

import videos from '../videos.json'

import { CardVideo } from './CardVideo'


export function Main() {
  return (
    <Box p={8}>
    <Toolbar />
    <Typography
      variant='h5'
      color='textPrimary'
      style={{ fontWeight: 600 }}
    >
      Recomendados
    </Typography>

    <Grid container spacing={4}>
      {videos.map((item) => (
        <CardVideo key={item.id} item={item}/>
      ))}
    </Grid>
  </Box>
  )
}