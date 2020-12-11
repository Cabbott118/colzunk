import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
  ...theme.spreadThis,
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function BlogPost(props) {
  dayjs.extend(relativeTime);
  const { classes, id, title, body, imageUrl, ownerImg, createdAt } = props;
  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <Card className={classes.card}>
        <CardActionArea>
          {!imageUrl ? (
            <CircularProgress />
          ) : (
            <CardMedia
              className={classes.media}
              image={imageUrl}
              title='Post Image'
            />
          )}
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography
              noWrap
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src={ownerImg} />
            <Box ml={2}>
              <Typography variant='subtitle2' component='p'>
                Caleb Abbott
              </Typography>
              <Typography
                variant='subtitle2'
                color='textSecondary'
                component='p'
              >
                {dayjs(createdAt).fromNow()}
              </Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(BlogPost);
