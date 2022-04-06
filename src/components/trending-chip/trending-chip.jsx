import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from './../../use-theme';
import { loadGiff, clearSearch } from './../../store';
import { TrendingChipStyled, Chip } from './styles';

const TrendingChip = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const giffs = useSelector(state => state.giffs);

    const showChip = !loading && giffs.length === 0;

    const showTrendingGiffs = useCallback((event) => {
        dispatch(clearSearch());
        dispatch(loadGiff());
        event.preventDefault();
    },[dispatch]);

    return(
        <TrendingChipStyled theme={theme}>
            {
                showChip ?
                <Chip onClick={showTrendingGiffs}>Show Trending Giffs</Chip> 
                : null
            }
        </TrendingChipStyled>
    );
}

export default TrendingChip;