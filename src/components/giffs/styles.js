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
    color: ${({ error }) => error ? '#f44336':'#9e9e9e'};
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    width: fit-content;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.primary300};
    box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f;
    padding: 0 1em;
    border-radius: 10px;
`;

export const GiffListComplete = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary500};
`;
