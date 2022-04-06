import { useSelector } from 'react-redux';

import { getLoading } from './../../store';
import { LoaderContainer, FirstBlock, SecondBlock, ThirdBlock, FourthBlock, FifthBlock } from './styles';

const Loader = () => {
    const loading = useSelector(getLoading);

    if(!loading){
        return null;
    }
    
    return(
        <LoaderContainer>
            <FirstBlock />
            <SecondBlock />
            <ThirdBlock />
            <FourthBlock />
            <FifthBlock />
        </LoaderContainer>
    )
};

export default Loader;