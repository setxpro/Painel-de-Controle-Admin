import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { AdminDB } from '../../db/Admin';

import { HiOutlineInformationCircle } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';



const Admin: React.FC = () => {  
  
  return (
    <C.Container>
        <C.ContainerTitle>
          <h2>Administradores</h2>
        </C.ContainerTitle>
        <C.ContentAreaTable>

          <table>
           <thead>
              <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Cel</th>
                  <th>Cargo</th>
                  <th>Desktop</th>
                  <th>Ações</th>
                </tr>
           </thead>
           <tbody>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
              <tr>
                <td>{AdminDB.user1.id}</td>
                <td>{AdminDB.user1.nome}</td>
                  <a href={`https://api.whatsapp.com/send?phone=${AdminDB.user1.cel}&text=Olá`}>{AdminDB.user1.cel}</a>                 
                <td>{AdminDB.user1.cargo}</td>
                <td>{AdminDB.user1.desktop}</td>
                <td className='tdButtons'>
                    <button className='edit'><FiEdit style={{ fontSize: '24 px' }}/></button>
                    <button className='destroy'><AiOutlineCloseCircle style={{ fontSize: '24 px' }}/></button>
                    <button className='info'><HiOutlineInformationCircle style={{ fontSize: '24 px' }}/></button>
                </td> 
              </tr>
           </tbody>
          </table>
          <table>
              
          </table>
        </C.ContentAreaTable>
    </C.Container>
      
  );
}

export default Admin;