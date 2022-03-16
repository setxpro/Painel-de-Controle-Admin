import React, { useEffect, useState } from 'react';
import * as C from './styles';

import { Product } from '../../db/Produtos';


const Produtos: React.FC = () => {

  const [filterProduct, setFilterProduct] = useState('');
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterProduct(e.target.value)
  }

  const produtosFiltrados = Product.filter((item) => item.title.startsWith(filterProduct))
  

    return (
      <C.Container>
          <C.ContainerTitle>
          <h2>Lista de Produtos</h2>
        </C.ContainerTitle>
        <div className="inputArea">
          <input 
            type="text" 
            name="nome" 
            value={filterProduct}
            onChange={handleChange}
          />
        </div>
       <C.Content>
         {produtosFiltrados.map((item, index) => (
            <div key={index}>
              <C.ContentTitle>
                <C.Title>
                  <h5>{item.title}</h5>
                </C.Title>
                <h6>{item.category}</h6>
              </C.ContentTitle>
              <C.ContainerDescription>
                <p>{item.description}</p>
              </C.ContainerDescription>
              <C.ContentImgPrice>
                <img src={item.image} alt="" width={150} height={150}/>
                <span>R$ {item.price}</span>
              </C.ContentImgPrice>
            </div>
         ))}
       </C.Content>
      </C.Container>

  );
}

export default Produtos;