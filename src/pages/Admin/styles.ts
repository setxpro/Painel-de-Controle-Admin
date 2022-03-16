import styled from 'styled-components';

export const Container = styled.div`
  width: 80%; 
`;
export const ContainerTitle = styled.div`
    width: 100%;
    
    padding: 15px;
    
    display: flex;
    align-items: center;
    
    background-color: var(--color--header);
`;

export const ContentAreaTable = styled.div`
  width: 100%;
  height: 400px;
  padding: 15px;

  overflow-y: scroll;
 

  

  table {
    width: 100%;
    font-size: 14px;

    tr {
      padding: 16px;
    }

    thead {
      tr {
        text-align: center;

        th {
          padding: 10px;
          background-color: rgba(0,0,0,0.5);
        }
      }
    }
    tbody {
      tr {
        text-align: center;
        
        
        &:nth-child(even) {
            background-color: rgba(0,0,0,0.1);
        }
        &:hover {
          background-color: rgba(0,0,0,0.5);
          color: #fff;
        }

        td {
        }
        .tdButtons {
          display: flex;
          gap: 1rem;
          justify-content: space-around;
          

          button {
            padding: 10px;
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: 1.3rem;
          }

          .edit {
            color: #0f0;    
          }
          .destroy {
            color: #f00;
          }
          .info {
            color: #00f;
          }

        }
      }
    }
  }
  
`;