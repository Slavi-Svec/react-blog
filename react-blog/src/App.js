import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/cardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0, 0.5)),
    url('https://www.tpctax.com/wp-content/uploads/2017/05/services-background-placeholder.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "realative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      heigh: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "sace-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
    <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary"  >
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
        <Box className={classes.hero}>
          <Box>React Blog</Box>
        </Box>
        <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle} >
             Articles
          </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} >
          <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://res.cloudinary.com/dblnwcqqz/image/upload/v1597625382/download-1_rbhqsr.jpg"
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                CodeWars is cool 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Making a start on codeWars
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.CardActions}>
            <Box classname={classes.author}>
              <Avatar
              src="https://res.cloudinary.com/dblnwcqqz/image/upload/v1595392581/logo_nsg61p.png" />
              <Box ml={2} >
                <Typography variant="subtitle2" component="p">
                  Slavi Svec
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  Aug 21, 2020
                </Typography>
              </Box>
              </Box>
              <box>
             <BookmarkBorderIcon />
              </box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
          <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://res.cloudinary.com/dblnwcqqz/image/upload/v1597276836/background-aug_jcgros.jpg"
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Learning to code
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How I started learing to code.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.CardActions}>
            <Box classname={classes.author}>
              <Avatar
              src="https://res.cloudinary.com/dblnwcqqz/image/upload/v1595392581/logo_nsg61p.png" />
              <Box ml={2} >
                <Typography variant="subtitle2" component="p">
                  Slavi Svec
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  Aug 20, 2020
                </Typography>
              </Box>
              </Box>
              <box>
             <BookmarkBorderIcon />
              </box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
          <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://res.cloudinary.com/dblnwcqqz/image/upload/v1597276836/background-aug_jcgros.jpg"
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Learning to code
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How I started learing to code.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.CardActions}>
            <Box classname={classes.author}>
              <Avatar
              src="https://res.cloudinary.com/dblnwcqqz/image/upload/v1595392581/logo_nsg61p.png" />
              <Box ml={2} >
                <Typography variant="subtitle2" component="p">
                  Slavi Svec
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  Aug 20, 2020
                </Typography>
              </Box>
              </Box>
              <box>
             <BookmarkBorderIcon />
              </box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
          <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://res.cloudinary.com/dblnwcqqz/image/upload/v1597276836/background-aug_jcgros.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Learning to code
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How I started learing to code.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.CardActions}>
            <Box classname={classes.author}>
              <Avatar
              src="https://res.cloudinary.com/dblnwcqqz/image/upload/v1595392581/logo_nsg61p.png" />
              <Box ml={2} >
                <Typography variant="subtitle2" component="p">
                  Slavi Svec
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  Aug 20, 2020
                </Typography>
              </Box>
              </Box>
              <box>
             <BookmarkBorderIcon />
              </box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
        <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
