import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  ...theme.spreadThis,
  blogPaper: {
    width: '100%',
    minHeight: '200px',
  },
  image: {
    height: '200px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  bottomItem: {
    width: '100%',
    marginTop: '2rem',
  },
  blogButton: {
    textTransform: 'none',
  },
});

function BlogCard(props) {
  dayjs.extend(relativeTime);
  const { classes, id, title, body, createdAt } = props;
  const blogPost = (
    <Grid container direction='column' justify='flex-start' spacing={2}>
      <Grid item xs={12} sm={12} md={12} key={id}>
        <Paper variant='outlined' className={classes.blogPaper}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <img
                alt=''
                src='https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg'
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} md={8} style={{ padding: '1rem' }}>
              <Grid
                container
                direction='column'
                justify='flex-start'
                alignItems='flex-start'
                spacing={1}
              >
                <Grid item>
                  <Typography variant='h6'>{title}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body2'>{body}</Typography>
                </Grid>
                <Grid item className={classes.bottomItem}>
                  <Grid
                    container
                    direction='row'
                    justify='space-between'
                    alignItems='center'
                  >
                    <Grid item>
                      <Typography variant='subtitle2'>
                        {dayjs(createdAt).fromNow()} by Colleen Zunker
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant='contained'
                        color='primary'
                        className={classes.blogButton}
                      >
                        More Info
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );

  return <Fragment>{blogPost}</Fragment>;
}

export default withStyles(styles)(BlogCard);
