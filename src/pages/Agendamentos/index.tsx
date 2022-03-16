import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';

import { dadosAgenda } from '../../db/Agenda';

import * as C from './styles';

const Agendamentos: React.FC = () => {

    const [show, setShow] = useState(false);
    
    const showContent = () => {
        setShow(true);
       
    }

    const ClodeContent = () => {
        setShow(false);
    }

  return (
     
        <C.Container>
              
                <C.ContainerTitle>
                    <h2>Agendamentos</h2>
                </C.ContainerTitle>
                <C.BarrStatus>
                <div className="barr">
                    <p>Status</p>
                    <span>Todos</span>
                </div>
                <div className="barr">
                    <p>Status</p>
                    <span>Todos</span>
                </div>
                <div className="barr">
                    <p>Status</p>
                    <span>Todos</span>
                </div>
                
                    <button><BsSearch/></button>
            
            </C.BarrStatus>
            <C.BarAgendamento>
                <h4>Todos os Agendamentos</h4>
            </C.BarAgendamento>
            <C.SelectArea>
                <C.ContainerToScroll>
            <div>
            <C.Option>
                    <C.Item>
                    <p>{`# ${dadosAgenda.saller.item.id} - ${dadosAgenda.saller.item.title}`}</p>
                    <div>
                        <span>{dadosAgenda.saller.item.date}</span>&nbsp;&nbsp; 
                        <span>{!dadosAgenda.saller.pessoas ? `${dadosAgenda.saller.pessoas} Pessoa` : `${dadosAgenda.saller.pessoas} Pessoas`}</span>
                    </div>
                    </C.Item>
                    <select>
                        <option>Solicitado</option>
                        <option>Aguardando</option>
                        <option>Concluido</option>
                    </select>
                    {show ? <MdOutlineKeyboardArrowUp onClick={ClodeContent}/> : <RiArrowDownSLine onClick={showContent}/>}
                </C.Option>
                {show ? 
                            <C.AreaContent>
                            <C.Content>
                               <p>Número de Pessoas</p>
                               {dadosAgenda.saller.pessoas}
                            </C.Content>
                            <C.Content>
                              <p>E-mail</p>
                              {dadosAgenda.saller.email}
                            </C.Content>
                            <C.Content>
                                <p>Telefone</p>
                                {dadosAgenda.saller.cel}
                            </C.Content>
                            </C.AreaContent>    
                
                            :
                        ''
                    }
            </div>

            <div className='options'>
            <C.Option>
                    <C.Item>
                    <p>{`# ${dadosAgenda.saller2.item.id} - ${dadosAgenda.saller2.item.title}`}</p>
                    <div>
                        <span>{dadosAgenda.saller2.item.date}</span>&nbsp;&nbsp; 
                        <span>{!dadosAgenda.saller2.pessoas ? `${dadosAgenda.saller2.pessoas} Pessoa` : `${dadosAgenda.saller2.pessoas} Pessoas`}</span>
                    </div>
                    </C.Item>
                    <select>
                        <option>Solicitado</option>
                        <option>Aguardando</option>
                        <option>Concluido</option>
                    </select>
                    {show ? <MdOutlineKeyboardArrowUp onClick={ClodeContent}/> : <RiArrowDownSLine onClick={showContent}/>}
                </C.Option>
                {show ? 
                             <C.AreaContent>
                             <C.Content>
                                <p>Número de Pessoas</p>
                                {dadosAgenda.saller2.pessoas}
                             </C.Content>
                             <C.Content>
                               <p>E-mail</p>
                               {dadosAgenda.saller2.email}
                             </C.Content>
                             <C.Content>
                                 <p>Telefone</p>
                                 {dadosAgenda.saller2.cel}
                             </C.Content>
                             </C.AreaContent>    
                
                            :
                        ''
                    }
            </div>
            </C.ContainerToScroll>
            </C.SelectArea>
      </C.Container>
     
  );
}

export default Agendamentos;