import styled from 'styled-components';

export const ThemeControlsContainer = styled.div`
    width: 50px;
`;

export const ThemeControlStyled = styled.div`
    background: ${({ theme }) => theme.secondary};
    width: 24px;
    height: 24px;
    padding: 1px;
    border-radius: 50%;
    cursor: pointer;
`;

export const ThemeControlIcon = styled.img`
    width: 22px;
    height: 22px;
`;


