import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import apiUserRandom from '../../../services/api-user-random';
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import MUIDataTable from "mui-datatables";
import LinearProgress from '@material-ui/core/LinearProgress';

const columns = [
  {
   name: "img",
   label: "Foto do Usuário",
   options: {
    filter: false,
    sort: false,
    customBodyRender: (val) => {
      return (
        <img src={val} />
        )
      }
    }
  },
  {
   name: "name",
   label: "Nome Completo",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "email",
   label: "Email",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "username",
   label: "Username",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
    name: "age",
    label: "Idade",
    options: {
     filter: true,
     sort: true,
    }
   },
 ];

 const options = {
  download: false,
  print: false,
  filterArrayFullMatch: false,
  fixedSelectColumn: false,
  filter: false,
  fixedSelectColumn: false,
  selectableRows: false,
  textLabels: {
    body: {
      noMatch: "Desculpe, nenhum registro correspondente encontrado.",
      toolTip: "Ordenar",
      columnHeaderTooltip: column => `Ordenado por ${column.label}`
    },
    pagination: {
      next: "Próxima página",
      previous: "Página anterior",
      rowsPerPage: "Linhas por página:",
      displayRows: "de",
    },
    toolbar: {
      search: "Procurar",
      downloadCsv: "Download CSV",
      print: "Print",
      viewColumns: "Ver Colunas",
      filterTable: "Filter Table",
    },
    filter: {
      all: "Todos",
      title: "FILTERS",
      reset: "Limpar",
    },
    viewColumns: {
      title: "Mostrar colunas",
      titleAria: "Mostrar/Ocultar Colunas da tabela",
    },
    selectedRows: {
      text: "row(s) selected",
      delete: "Delete",
      deleteAria: "Delete Selected Rows",
    },
  }
};

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

  const [usuarios, setUsuarios] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() =>{
    async function loadUsuarios() {
      const response = await apiUserRandom.get('/api/?results=25');
      const result = await response.data.results.map((row) => {
        return {
            "img": row.picture.thumbnail,
            "name": row.name.first + " " + row.name.last,
            "email": row.email,
            "username": row.login.username,
            "age": row.dob.age
               }});
      setUsuarios(result)
      setLoading(false);
    }
    loadUsuarios();
  },[]);

  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'USUARIOS RANDOM'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
            <Button style={{marginBottom:10, marginLeft: 20}} variant="contained" color="primary" href={'/admin/usuarios-random'}>
              <AutorenewIcon />
              Atualizar
            </Button>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    {loading?(<LinearProgress style={{width:'50%', margin:'20px auto'}}  />):(
                    <MUIDataTable
                      title={"Listagem Usuários"}
                      data={usuarios}
                      columns={columns}
                      options={options}
                    />
                    )}
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

