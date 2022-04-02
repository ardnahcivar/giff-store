import styled  from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position:sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    z-index: 10;
    background: ${({theme}) => theme.primary400};
    margin-bottom: 1em;
`;

export const LogoStyled = styled.span`
    position: fixed;
    top:0;
    left:0;
    border : ${({ theme }) => `2px solid ${theme.secondary}`};
    background: ${({ theme }) => theme.primary500};
    margin: 0.5em 2em;
    border-radius: 10px;
`;
