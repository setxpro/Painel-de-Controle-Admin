import React, { useContext, useState} from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';


import * as C from './styles';

const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogin = async () => {
    if (email && password) {
      const islogged = await auth.signin(email, password);
      if (islogged) {
        navigate('/');
      }
      else {
        alert('Não foi possivel acessar o Sistema Admin, por favor entrar em contato com a assistência de TI.');
      }
    }
  }

  return (
      <C.Container>
        <C.FormGroup>
            <C.Input 
              type="email" 
              name="email" 
              placeholder="Email..."
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <C.Input 
              type="password" 
              name="password" 
              placeholder="Senha..."
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
        </C.FormGroup>
        <C.Button onClick={handleLogin}>Logar</C.Button>
      </C.Container>
  );
}

export default Login;