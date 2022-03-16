import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    background-color: var(--color--topo);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    p {
        color: var(--color--text);
    }


    img {
        width: 40px;
        height: 40px;

        border-radius: 50%;
        border: 1px solid #fff;
        padding: 2px;
    }
`;

export const Title = styled.h3`
    color: var(--color--text);

`;

