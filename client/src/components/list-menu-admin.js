import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PetsIcon from '@mui/icons-material/Pets';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { getToken, logout } from "../services/auth";
import api from "../services/api";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component="a" href="/admin/clientes">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItemButton>

    <ListItemButton component="a" href="/admin/usuarios">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItemButton>

    <ListItemButton component="a" href="/admin/usuarios-random">
      <ListItemIcon>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios Random" />
    </ListItemButton>

    <ListItemButton component="a" href="/admin/random-dog">
      <ListItemIcon>
        <PetsIcon />
      </ListItemIcon>
      <ListItemText primary="Dog Random" />
    </ListItemButton>
  
    <ListItemButton component="a" href="/admin/status-code">
      <ListItemIcon>
        <DeveloperModeIcon />
      </ListItemIcon>
      <ListItemText primary="Status Code" />
    </ListItemButton>

  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton onClick={confirmSair}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItemButton>
  </React.Fragment>
);

async function confirmSair(){
  if(window.confirm("Deseja realmente sair do sistema?")){
    const response = await api.get("/api/usuarios/destroytoken",{headers:{token: getToken()}});
    if(response.status===200){
      logout();
      window.location.href = '/admin/login'
    }else{
      alert("Não foi possível fazer o logout!");
    }
  }
}