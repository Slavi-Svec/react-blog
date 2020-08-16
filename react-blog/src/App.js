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
          <Grid item xs={12} s={6} md={4} >
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
              <Box m={2} >
                <Typography variant="subtitle2" component="p">
                  Slavi Svec
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  Aug 20, 2020
                </Typography>
            </Box>
           </Box>
          </CardActions>
       </Card>
          </Grid>
          <Grid item xs={12} s={6} md={4} >

          </Grid>
          <Grid item xs={12} s={6} md={4} >

          </Grid>
          <Grid item xs={12} s={6} md={4} >

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
