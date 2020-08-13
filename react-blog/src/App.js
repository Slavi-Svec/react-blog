import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/Grid';

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
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
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