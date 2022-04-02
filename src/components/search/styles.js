import styled from 'styled-components';

export const SearchContainerStyled = styled.div`
    display: flex;
    min-width: 20%;
    width: 50%;
    margin: 0 auto;
    height: 40px;
    position: relative;
`;

export const SearchInputStyled = styled.input`
    width: 100%;
    font-size: 1em;
    background: ${({ theme }) => theme.primary300};
    color: ${({ theme }) => theme.secondary};
    border-color: transparent;
`;

export const SearchButtonStyled = styled.button`
    width: 50px;
`;

export const SearchIconStyled = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #aa00ff;
    position: absolute;
    right: 0;
    height: 100%;
`;


