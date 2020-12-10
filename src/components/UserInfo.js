import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  paper: {
    // minHeight: '70vh',
  },
});

const UserInfo = (props) => {
  const {
    classes,
    user: { firstName, lastName, email, phoneNumber, imageUrl },
  } = props;
  return (
    <Paper className={classes.paper}>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='flex-start'
          >
            <Grid item>
              <Typography variant='body1'>Name:</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>Email:</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>Phone Number:</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='flex-start'
          >
            <Grid item>
              <Typography variant='body1'>
                {firstName} {lastName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography noWrap variant='body1'>
                {email}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>{phoneNumber}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default withStyles(styles)(UserInfo);
