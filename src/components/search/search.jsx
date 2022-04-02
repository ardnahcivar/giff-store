import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { SearchContainerStyled, SearchInputStyled, SearchIconStyled } from './styles';
import { loadSearchedGiffs } from './../../store';
import { SearchIcon } from './search-icon';

const Search = () => {
    const [text ,setText] = useState('');
    const dispatch = useDispatch();
    const searchText = useSelector(state => state.searchText);

    useEffect(() => {
        setText(searchText);
    },[searchText]);

    const search = useCallback((event) => {
        const searchText = event.target.value;
        if(searchText.length > 2){
            dispatch(loadSearchedGiffs({ searchText }))
        }
    },[dispatch]);

    const searchInputDebounced = debounce(search, 300);
    
    const searchInputHandler = useCallback((event) => {
        const searchText = event.target.value;
        searchInputDebounced(event);
        setText(searchText);
        event.preventDefault();
    },[searchInputDebounced]);

    return(
        <SearchContainerStyled>
            <SearchInputStyled
                type="text"
                autoCapitalize='off'
                autoComplete='off'
                autoCorrect='off'
                maxLength={50}
                onChange={searchInputHandler}
                placeholder="Search all the GIFFs"
                value={text}
            />
            <SearchIconStyled>
                <SearchIcon />
            </SearchIconStyled>
        </SearchContainerStyled>
    )
};

export default Search;
