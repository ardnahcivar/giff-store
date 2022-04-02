import styled from 'styled-components';

export const GiffItemStyled = styled.div`
    display: flex;
    min-height: 200px;
    height: fit-content;
    width: fit-content;
    background-color:${({ loaded }) => ( loaded ? 'inherit': 'blue')};
    position: relative;
    & > div {
        display: none;
    }
    &:hover > div {
        display: block;
    }
`; 