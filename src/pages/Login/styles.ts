import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100vh - 50px);

    background-color: var(--color--topo);

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

`;


export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Input = styled.input`
    width: 400px;
    padding: 1.1rem;
    border-radius: 8px;
    border: 2px solid transparent;
    outline: none;

    font-size: 1rem;
    background-color: rgba(100, 100, 100,0.5);

    &:focus {
        background-color: #fff;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: all 0.9s ease;
    cursor: pointer;

    &:hover {
        background-color: lightblue;
        color: #000;
    }
`;
