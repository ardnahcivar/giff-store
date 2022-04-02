import styled from 'styled-components';

export const GiphyContainerStyled = styled.div`
    // display: grid;
    // grid-gap: 1em;
    // grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    // grid-auto-rows: auto;
    // max-width: 90%;
    // margin: 0 auto;
    column-gap: 1.5em;
    font-size: .85em;
    margin: 1.5em 0;
    padding: 0;
    column-count: 4;
`;  

export const LoadingNextGiffIndicator = styled.div`
    display: flex;
    width: 100%;
    padding: 1em;
    justify-content: center;
`;


export const Loading = styled(LoadingNextGiffIndicator)`
    padding: 0.5em;
`;
