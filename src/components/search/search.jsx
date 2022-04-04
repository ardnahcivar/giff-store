import { useCallback } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';

import { SearchContainerStyled, SearchInputStyled, SearchIconStyled } from './styles';
import { loadSearchedGiffs } from './../../store';
import { SearchIcon } from './search-icon';

const Search = () => {
    const dispatch = useDispatch();

    const search = useCallback((event) => {
        const searchText = event.target.value;
        if(searchText.length > 2){
            dispatch(loadSearchedGiffs({ searchText }))
        }
    },[dispatch]);

    const searchInputDebounced = debounce(search, 300);
    
    return(
        <SearchContainerStyled>
            <SearchInputStyled
                type="text"
                autoCapitalize='off'
                autoComplete='off'
                autoCorrect='off'
                maxLength={50}
                onChange={searchInputDebounced}
                placeholder="Search all the GIFFs"
            />
            <SearchIconStyled>
                <SearchIcon />
            </SearchIconStyled>
        </SearchContainerStyled>
    )
};

export default Search;
