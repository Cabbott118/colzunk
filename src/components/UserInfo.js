import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
});

const UserInfo = (props) => {
  const {
    classes,
    user: { firstName, lastName, email, phoneNumber, imageUrl },
  } = props;
  return (
    <Grid item>
      <Paper variant='outlined' className={classes.paper}>
        <Typography variant='h5' className={classes.pageTitle}>
          User Info
        </Typography>
        <Grid
          container
          spacing={2}
          direction='column'
          justify='center'
          alignItems='flex-start'
        >
          <Grid item>
            <img
              src={imageUrl}
              alt='User'
              height='175px'
              width='200px'
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />
          </Grid>
          <Grid item>
            <Typography variant='h6'>Name</Typography>
            <Typography variant='body1'>
              {firstName} {lastName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6'>Registerd Email</Typography>
            <Typography variant='body1'>{email}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6'>Phone Number</Typography>
            <Typography variant='body1'>{phoneNumber}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default withStyles(styles)(UserInfo);
