import styled from 'styled-components';

import { giffBgColors } from '../../constants';

export const GiffItemContainer = styled.a`
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
    overflow: hidden;
    border: ${({ theme }) => `1px solid ${theme.primary300}`};
`;

export const GiffItemStyled = styled.div`
    display: flex;
    min-height: 200px;
    height: fit-content;
    width: fit-content;
    background-color:${({ loaded }) => ( loaded ? 'inherit': giffBgColors[Math.floor(Math.random() * 4) + 1])};
    position: relative;
    & > div {
        display: none;
    }
    &:hover > div {
        display: block;
    }
`; 