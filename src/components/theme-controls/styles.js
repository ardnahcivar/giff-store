import styled from 'styled-components';

export const ThemeControlsContainer = styled.div`
    border-radius: 50%;
    border: 2px solid transparent;
    : hover {
        border: 2px solid #9e9e9e;
    }
`;

export const ThemeControlStyled = styled.div`
    background: ${({ theme }) => theme.secondary};
    width: 30px;
    height: 30px;
    padding: 1px;
    border-radius: 50%;
    cursor: pointer;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ThemeControlIcon = styled.img`
    width: 22px;
    height: 22px;
`;


