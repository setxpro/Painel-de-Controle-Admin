import styled from 'styled-components';

export const Container = styled.div`
    width: 20%;
    height: 575px;

    background-color: var(--color--topo);
`;

export const ContainerImg = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
`;
export const Logo = styled.img`
    width: 150px;
    height: 120px;
`;


export const ContainerNav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    margin-top: 5px;

    a {
        text-decoration: none;
        color: var(--color--text);
        background-color: var(--color--sidebar);

        padding: 5px 16px;
        margin: 2px;
        
        display: flex;
        align-items: center;
        gap: 1rem;
        
        border-left: 3px solid transparent;


        &:hover {
            border-left: 3px solid var(--color--borderleft);
            
        }
        &:focus {
            border-left: 3px solid var(--color--borderleft);
            background-color: rgba(255, 76, 55, 0.2)
        }

        &.active {
            border-left: 3px solid var(--color--borderleft);
            background-color: rgba(255, 76, 55, 0.2)
        }
    }

`;