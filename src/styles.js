import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.primary500};
        color: ${({ theme }) => theme.secondary};
        margin: 0px;
    }
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`;

export const AppContainerStyled = styled.div`
`;

export const GiffContainer = styled.section`
    position: relative;
`;