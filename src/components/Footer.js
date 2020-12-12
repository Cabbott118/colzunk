import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary'>
      {'Copyright © '}
      <Link
        color='inherit'
        target='_blank'
        href='https://calebabbottportfolio.com'
      >
        Caleb Abbott
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '20vh',
    backgroundColor: '#B8C4BB',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#E8F7EE',
    // theme.palette.type === 'light'
    //   ? theme.palette.grey[200]
    //   : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component='main' className={classes.main} maxWidth='sm'>
        <Typography variant='h2' component='h2' gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          We can pin some links or something down here!
        </Typography>
        <Typography variant='body1'>Sticky footer placeholder.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
