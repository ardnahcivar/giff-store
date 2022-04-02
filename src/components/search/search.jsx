import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';

import { SearchContainerStyled, SearchInputStyled } from './style';
import { loadSearchedGiffs } from './../../store';

const Search = props => {
    const dispatch = useDispatch();

    const searchInputHandler = (event) => {
        const searchText = event.target.value;
        if(searchText.length > 2){
            dispatch(loadSearchedGiffs({ searchText }))
        }
    };

    const searchInputDebounced = debounce(searchInputHandler, 300);

    return(
        <SearchContainerStyled>
            <SearchInputStyled
                type="text"
                autoCapitalize='off'
                autoComplete='off'
                autoCorrect='off'
                maxLength={50}
                onChange={searchInputDebounced}
                placeholder="Search all the GIFs"
            />
        </SearchContainerStyled>
    )
};

export default Search;
