import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'

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
    height: '100vh',
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
  const [ listStatus, setListStatus ] = useState([]);
  const [ selectText, setSelectText ] = useState('');


  useEffect(() =>{
    async function loadStatus(){
      const status = [
        {"id": 100, "text": "100"},
        {"id": 101, "text": "101"},
        {"id": 102, "text": "102"},
        {"id": 103, "text": "103"},
        {"id": 200, "text": "200"},
        {"id": 201, "text": "201"},
        {"id": 202, "text": "202"},
        {"id": 203, "text": "203"},
        {"id": 204, "text": "204"},
        {"id": 205, "text": "205"},
        {"id": 206, "text": "206"},
        {"id": 207, "text": "207"},
        {"id": 208, "text": "208"},
        {"id": 300, "text": "300"},
        {"id": 301, "text": "301"},
        {"id": 302, "text": "302"},
        {"id": 303, "text": "303"},
        {"id": 304, "text": "304"},
        {"id": 305, "text": "305"},
        {"id": 306, "text": "306"},
        {"id": 307, "text": "307"},
        {"id": 308, "text": "308"},
        {"id": 400, "text": "400"},
        {"id": 401, "text": "401"},
        {"id": 402, "text": "402"},
        {"id": 403, "text": "403"},
        {"id": 404, "text": "404"},
        {"id": 405, "text": "405"},
        {"id": 406, "text": "406"},
        {"id": 407, "text": "407"},
        {"id": 408, "text": "408"},
        {"id": 409, "text": "409"},
        {"id": 410, "text": "410"},
        {"id": 411, "text": "411"},
        {"id": 412, "text": "412"},
        {"id": 413, "text": "413"},
        {"id": 414, "text": "414"},
        {"id": 415, "text": "415"},
        {"id": 416, "text": "416"},
        {"id": 417, "text": "417"},
        {"id": 418, "text": "418"},
        {"id": 421, "text": "421"},
        {"id": 422, "text": "422"},
        {"id": 423, "text": "423"},
        {"id": 424, "text": "424"},
        {"id": 426, "text": "426"},
        {"id": 428, "text": "428"},
        {"id": 429, "text": "429"},
        {"id": 431, "text": "431"},
        {"id": 451, "text": "451"},
        {"id": 500, "text": "500"},
        {"id": 501, "text": "501"},
        {"id": 502, "text": "502"},
        {"id": 503, "text": "503"},
        {"id": 504, "text": "504"},
        {"id": 505, "text": "505"},
        {"id": 506, "text": "506"},
        {"id": 507, "text": "507"},
        {"id": 508, "text": "508"},
        {"id": 509, "text": "509"},
        {"id": 510, "text": "510"},
        {"id": 511, "text": "511"}
      ];
      setListStatus(status);
      setLoading(false);
    }
    loadStatus();
  },[]);

  async function handleChange(code){
    setImg("https://http.cat/"+code.target.value)
    setSelectText(code.target.value);
    setLoading(false);
  }
  
  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'STATUS CODE'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="status-select-label">Status Code</InputLabel>
                  <Select
                    labelId="status-select-label"
                    id="status-select"
                    value={selectText}
                    label="Status Code"
                    onChange={handleChange} > 
                    {listStatus.map((row) => (
                      <MenuItem value={row.id}>{row.text}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
            {loading?(<LinearProgress style={{width:'50%', margin:'20px auto'}}  />):(
              <Grid sm={12}>
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

