import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    height: 100%;
`;

export const ContainerTitle = styled.div`
    width: 100%;
   
    padding: 15px;

    display: flex;
    align-items: center;

    background-color: var(--color--header);
`;

export const AreaChart = styled.div`
    width: 100%;

    padding: 5px;
    display: flex;  
    justify-content: space-between;
    gap: 5px;
`;

export const AreaCharts = styled.div`
    width: 520px;

    padding: 10px;

    margin-right: 10px;
    margin-left: 10px;
    

    background-color: #fff;
    display: flex;  
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    box-shadow: var(--color-bs);
`;

export const AreaMiniCharts = styled.div`
   
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;
export const MiniChart = styled.div`
    width: 273px;
    height: 173px;
    margin: 15px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: var(--color-bs);

    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Spinner = styled.div`

        .lds-ripple {
        display: inline-block;
        position: relative;
        width: 100px;
        height: 100px;
        }
        .lds-ripple div {
        position: absolute;
        border: 4px solid #0000FF;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
        }
        @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
        }

`;
