import styled from 'styled-components';

export const GiphyContainerStyled = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-rows: auto;
    max-width: 90%;
    margin: 0 auto;
`;  

export const LoadingNextGiffIndicator = styled.div`
    display: flex;
    width: 100%;
    padding: 1em;
    justify-content: center;
    min-height: 20px;
    height: 200px;
`;


export const Loading = styled(LoadingNextGiffIndicator)`
    padding: 0.5em;
`;

export const ErrorMessagesStyled = styled.div`
    display: flex;
    font-size: 1.5em;
    color: ${({ error }) => error ? '#f44336':'#9e9e9e'}
`;
