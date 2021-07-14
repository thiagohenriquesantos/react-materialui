import { Typography, Box, Grid } from '@material-ui/core';

export function CardVideo({item}) {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box>
        <img
          style={{ width: '100%' }}
          alt={item.title}
          src={item.thumb}
        />
        <Box>
          <Typography
            style={{ fontWeight: 600 }}
            gutterBottom
            variant='body1'
            color='textPrimary'
          >
            {item.title}
          </Typography>
          <Typography
            display='block'
            variant='body2'
            color='textSecondary'
          >
            {item.channel}
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            {`${item.views} • ${item.date}`}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}