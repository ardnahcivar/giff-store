import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.primary500};
        color: ${({ theme }) => theme.secondary};
        font-family: Roboto, sans-serif;
    }
    * {
        box-sizing: border-box;
    }
`;

export const AppContainerStyled = styled.div`
`;

export const GiffContainer = styled.section`
    position: relative;
`;