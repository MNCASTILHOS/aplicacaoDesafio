import React,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import api from '../../../services/api'

const useStyles = makeStyles((theme) => ({
  root: {display: 'flex',},
  title: {flexGrow: 1,},
  appBarSpacer: theme.mixins.toolbar,
  content: {flexGrow: 1,height: '100vh',overflow: 'auto',},
  container: {paddingTop: theme.spacing(2),paddingBottom: theme.spacing(4),},
  paper: {padding: 35,display: 'flex',overflow: 'auto',flexDirection: 'column',},
  formControl:{width:'100%'},
  btnSuccess:{ backgroundColor:"green",color:"#fff","&:hover":{backgroundColor:"#12b912"}}
}));

export default function ClienteCadastrar() {
  const classes = useStyles();
  
  const [nome , setNome] = useState('');
  const [cpf , setCpf] = useState('');
  const [email , setEmail] = useState('');
  const [telefone , setTelefone] = useState('');
  const [rua , setRua] = useState('');
  const [numero , setNumero] = useState('');
  const [bairro , setBairro] = useState('');
  const [cidade , setCidade] = useState('');
  const [cep , setCep] = useState('');
  
  async function handleSubmit(){
    const data = {
      nome_cliente:nome,
      cpf_cliente:cpf,
      email_cliente:email,
      telefone_cliente:telefone,
      rua_cliente:rua,
      numero_cliente:numero,
      bairro_cliente:bairro,
      cidade_cliente:cidade,
      cep_cliente:cep,
    }
    
    if(nome!==''&& cpf!=='' && email!==''&& telefone!=='' && rua!=='' && numero!=='' && bairro!==''
    && cidade!=='' && cep!==''){
      const response = await api.post('/api/clientes',data);
      
      if(response.status===200){
        window.location.href='/admin/clientes'
      }else{
        alert('Erro ao cadastrar o cliente!');
      }
    }else{
      alert('Por favor, preencha todos os dados!');
    }
  }
  
  return (
    <div className={classes.root}>
      <MenuAdmin title={'CLIENTES'}/>
      <main className={classes.content}>
      <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Button style={{marginBottom:10}} variant="contained" href={'/admin/clientes'}><ArrowBackIcon />  Voltar</Button>
              <Paper className={classes.paper}>
              <h2>Cadastro de Clientes</h2>
            <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="nome"
              name="nome"
              label="Nome completo"
              fullWidth
              autoComplete="nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cpf"
              name="cpf"
              label="CPF"
              fullWidth
              autoComplete="cpf"
              mask="000.000.000-00"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
          </Grid>    
        
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="telefone"
              name="telefone"
              label="Telefone"
              fullWidth
              autoComplete="telefone"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="rua"
              name="rua"
              label="Rua"
              fullWidth
              autoComplete="rua"
              value={rua}
              onChange={e => setRua(e.target.value)}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="numero"
              name="numero"
              label="Numero"
              fullWidth
              autoComplete="numero"
              value={numero}
              onChange={e => setNumero(e.target.value)}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="bairro"
              name="bairro"
              label="Bairro"
              fullWidth
              autoComplete="bairro"
              value={bairro}
              onChange={e => setBairro(e.target.value)}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cidade"
              name="cidade"
              label="Cidade"
              fullWidth
              autoComplete="cidade"
              value={cidade}
              onChange={e => setCidade(e.target.value)}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cep"
              name="cep"
              label="CEP"
              fullWidth
              autoComplete="cep"
              value={cep}
              onChange={e => setCep(e.target.value)}
            />
          </Grid>
        
          <Grid item xs={12} sm={12}>
            <Button variant="contained" onClick={handleSubmit} className={classes.btnSuccess}>
              <BookmarkAddedIcon />  Salvar
            </Button>
          </Grid>
        </Grid>
        </Paper>
        </Grid>
        
        </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
    );
  } 