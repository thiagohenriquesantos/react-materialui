import { Button, Typography, Divider, Box} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

export function SignIn() {
  return (
    <>
      <Divider />
      <Box p={7}>
        <Typography variant='body2'>
          Faça login para curtur vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            variant='outlined'
            color='secondary'
            startIcon={<AccountCircle />}
          >
            Fazer login
          </Button>
        </Box>
      </Box>
      <Divider />
    </>
  )
}