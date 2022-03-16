import styled from 'styled-components';

export const ContainerToScroll = styled.div`
    height: 401px;
    overflow-y: scroll;

    .options {
        margin-top: 1rem;
    }
`;

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

export const BarrStatus = styled.div`
    background-color: var(--color--barStatus);
    height: 60px;

    display: flex;
    justify-content: space-between;
    

     .barr {
            border-right: 1px solid #ddd;
            width: 40%;
            height: 60px;

            display: flex;
            flex-direction: column;
            margin-left: 20px;
            justify-content: center;
           
            p {
                font-size: 13px;
                color: #777;
            }
        }

    button {
        border: none;
        background-color: transparent;
        font-size: 1.3rem;
        line-height: 60px;
        width: 100px;

        cursor: pointer;
    }   
`;

export const BarAgendamento = styled.div`

    margin-top: 1rem;

    background-color: #eded;
    height: 40px;

    display: flex;
    align-items: center;
    padding: 15px;
`;

export const SelectArea = styled.div`
   
`;

export const Option = styled.div`
    border-bottom: 1px solid #ddd;
    background-color: var(--color--barStatus);

    display: flex;
    justify-content: space-between;
    padding: 15px;
    

    .iconArrowDow {
        font-size: 23px;
    }
    
`;

export const Item = styled.div`
    p {
        font-weight: bold;
    }
    span {
        color: #666;
        font-size: 12px;
    }
`;
export const AreaContent = styled.div`
    margin-bottom: 1rem;
    
`;


export const Content = styled.div`
    border-bottom: 1px solid #ddd;
    background-color: var(--color--barStatus);
    padding: 15px;

    p {
        color: #aaa;
        font-size: 12px;
        margin-bottom: 5px;
    }

`;

