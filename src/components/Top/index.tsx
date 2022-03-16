import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';

import * as C from './styles';

const Top = () => {

  const auth = useContext(AuthContext);

  return(
      <C.Container>
          <C.Title>Painel de Controle Administrativo</C.Title>
          <p>{auth.user ? `Bem vindo, ${auth.user.name}` : ''}</p>
          {auth.user ? <img src="https://github.com/setxpro.png" alt="avatar" /> : ''}
      </C.Container>
  );
}

export default Top;