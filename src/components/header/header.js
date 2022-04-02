import { HeaderStyled } from './style';

import { Search } from './../search';

const Header = props => {
    return(
        <HeaderStyled>
            <Search />
        </HeaderStyled>
    );
};

export default Header;