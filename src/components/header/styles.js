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
    box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f;
    padding: 0 1em;
`;

export const LogoStyled = styled.span`
    position: fixed;
    top:0;
    left:0;
    border : ${({ theme }) => `2px solid ${theme.secondary}`};
    background: ${({ theme }) => theme.primary500};
    margin: 0.25em 2em;
    border-radius: 10px;
    display: flex;
`;
