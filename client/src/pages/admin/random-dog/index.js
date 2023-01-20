import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import apiDogRandom from '../../../services/api-dog-random';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
 
}));


export default function UsuariosListagem() {
  const classes = useStyles();
  const [ loading, setLoading ] = useState(true);
  const [ img, setImg ] = useState('');

  useEffect(() =>{
    async function loadImg(){
      const response = await apiDogRandom.get('/woof?filter=mp4,webm');
      setImg("https://random.dog/"+response.data)
      setLoading(false);
    }
    loadImg();
  },[]);


  return (
    <div className={classes.root}>
      <MenuAdmin title={'DOG RANDOM'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
                <Button style={{marginBottom:10}} variant="contained" color="primary" href={'/admin/random-dog'}>
                  <AutorenewIcon />
                  Refresh
                </Button>
            </Grid>
          </Grid>
          {loading?(<LinearProgress style={{width:'50%', margin:'20px auto'}}  />):(

            <Grid item sm={12}>
              <img src={img} />  
            </Grid>
          )}
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}

