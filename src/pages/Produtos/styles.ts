import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;


    .inputArea {
    width: 100%;
    display: flex;
    justify-content: center;
      
      input {
        width: 60%;
        margin-bottom: 15px;
        border: 1px solid transparent;
        outline: none;
        border-radius: 8px;
        padding: 0.6rem;
        font-size: 1rem;

        &:focus {
          box-shadow: var(--color-bs);
          background-color: #eee;
        }
    }
  }

`;
export const ContainerTitle = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    
    background-color: var(--color--header);
`;

export const Content = styled.div`
    width: 100%;
    height: 462px;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;

    div {
        width: 25%;
    }
   
`;
export const ContentTitle = styled.div`

    
    gap: 1rem;
    padding: 0 15px;
    margin-top: 1rem;

   
    h6 {
        font-size: 0.7rem;
        color: #888;
    }
`;

export const ContainerDescription = styled.div`
    width: 100%;
    padding: 15px;

    p {
        width: 150px;
       font-size: 12px;
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
   }
`;

export const ContentImgPrice = styled.div`
    width: 100%;
    padding: 15px;  

    display: flex;
    flex-direction: column;
    gap: 1rem;
   
    span {
        width: 150px;
        text-align: center;
        color: green;
    }
`;

export const Title = styled.div`
    width: 300px;
    

        h5 {
            font-size: 1rem;
            width: 250px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-bottom: 5px;
        }
`;