import styled, { keyframes } from 'styled-components';

export const TrendingChipStyled = styled.div`
    display: flex;
    justify-content: space-around;
`;

const bounce = keyframes`
    0%       { bottom: 1px; }
    25%, 75% { bottom: 2px; }
    50%      { bottom: 3px; }
    100%     { bottom: 0; }
`;

export const Chip = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:  160px;
    height: 40px;
    border-radius: 10px;
    background: #aa00ff;
    color : white;
    cursor: pointer;
    animation: ${bounce} 1s infinite;
    position: relative;
`;