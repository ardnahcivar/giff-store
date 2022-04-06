import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { SearchContainerStyled, SearchInputStyled, SearchIconStyled } from './styles';
import { loadSearchedGiffs, getSearchText } from './../../store';
import { SearchIcon } from './search-icon';

const search = (searchValue, dispatch) => {
    if(searchValue.length > 2){
        dispatch(loadSearchedGiffs({ searchText: searchValue }))
    }
};

const searchInputDebounced = debounce(search, 300);

const Search = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const searchText = useSelector(getSearchText);

    useEffect(() => {
        setText(searchText);
    },[searchText])
    
    useEffect(() => {
        searchInputDebounced(text, dispatch);
    },[text, dispatch]);

    const searchInputHandler = (event) => {
        setText(event.target.value);
    };

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
