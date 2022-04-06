import { array,  bool } from 'prop-types';

import { GiffItem } from '../giff-item';
import { ErrorMessagesStyled } from './../styles';
import { useTheme } from './../../../use-theme';
import { NO_GIFFS_FOUND_MSG } from './../../../constants';

const GiffList = props => {
    const { giffs, loading, error } = props;
    const theme = useTheme();

    if(!giffs.length && !loading){
        return(
            <ErrorMessagesStyled theme={theme} error={error}>
                <p>{NO_GIFFS_FOUND_MSG}</p>    
            </ErrorMessagesStyled>
        )
    }

    return(
        <>
            {
                giffs.map((giphy,index) => 
                    <GiffItem 
                        key={giphy.id + giphy.title + index}
                        giff={giphy}
                    />)                  
            }
        </>
    );
};


GiffList.propTypes = {
    giffs: array,
    loading: bool,
    error: bool
};

export default GiffList;
