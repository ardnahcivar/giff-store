import styled, { keyframes } from 'styled-components';

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

const strech = keyframes`
    0%, 40%, 100% { transform: scaleY(0.4); };
    20% { transform: scaleY(1.0); };
`;

export const LoaderContainer = styled.div`
    width: 100px;
    height: 60px;
    text-align: center;
    font-size: 1em;
    & > div {
        background-color: orange;
        height: 100%;
        width: 6px;
        display: inline-block;
        animation-name: ${strech};
        animation-timing-function: ease-in-out;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: none;
        animation-play-state: running;
        margin: 4px;
    }
`;

export const FirstBlock = styled.div`
    animation-delay: 0s;
`;
export const SecondBlock = styled.div`
    animation-delay: -1.1s;
`;

export const ThirdBlock = styled.div`
    animation-delay: -1.0s;
`;

export const FourthBlock = styled.div`
    animation-delay: -0.9s;
`;

export const FifthBlock = styled.div`
    animation-delay: -0.8s;
`;

