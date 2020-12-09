import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
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
    <Grid
      container
      spacing={2}
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Grid item>
        <Avatar sizes='lg' src={imageUrl} />
        {firstName} {lastName}
      </Grid>
      <Grid item>{email}</Grid>
      <Grid item>{phoneNumber}</Grid>
    </Grid>
  );
};
export default withStyles(styles)(UserInfo);
