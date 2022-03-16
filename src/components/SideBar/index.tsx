import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as C from './styles';

import { AuthContext } from '../../context/Auth/AuthContext';


// Icons
import { SiPhpmyadmin } from 'react-icons/si';
import { IoImagesOutline } from 'react-icons/io5';
import { GoCalendar } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { FcComboChart } from 'react-icons/fc';
import { BsNewspaper } from 'react-icons/bs';
import { MdPages } from 'react-icons/md';
import { FiCodesandbox } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const SideBar: React.FC = () => {

   const auth = useContext(AuthContext);

   const navigate = useNavigate();

   const handleLogout = async() => {
      await auth.logout();
      navigate('/login');
   }

  return (
      <C.Container>
         <C.ContainerImg>
            <C.Logo src="https://douglaspaiani.com.br/wp-content/themes/douglaspaiani/assets/img/logo.png" alt="logo" />
         </C.ContainerImg>
         <C.ContainerNav>
                <Link to="/" className='active'><FcComboChart/> Dashboard</Link>
                <Link to="/administradores"><SiPhpmyadmin/> Administradores</Link>
                <Link to="/banners"><IoImagesOutline/> Banners</Link>
                <Link to="/agendamentos"><GoCalendar/> Agendamentos</Link>
                <Link to="/correio-eletronico"><AiOutlineMail/> Correio Eletrônico</Link>
                <Link to="/noticias"><BsNewspaper/> Notícias</Link>
                <Link to="/paginas"><MdPages/> Páginas</Link>
                <Link to="/produtos"><FiCodesandbox/> Produtos</Link>
                <Link to="/representantes"><FaUsers /> Representantes</Link>
                <Link to="" onClick={handleLogout}><FiLogOut/> Sair</Link>
         </C.ContainerNav>
      </C.Container>
  );
}

export default SideBar;