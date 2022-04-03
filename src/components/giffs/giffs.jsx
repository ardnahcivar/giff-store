import { GiphyContainerStyled, LoadingNextGiffIndicator, ErrorMessagesStyled } from './styles';
import { GiffItem } from '../giff-item';
import { Loader } from '../loader';
import { useGiffs } from './use-giffs';
import { useTheme } from './../../use-theme';
import { NO_GIFFS_FOUND_MSG, ERROR_MSG } from './../../constants';

const Giffs = () => {
    const theme = useTheme();
    const [giffs, loading, loadingRef, error] = useGiffs();

    return (
        <>
            <GiphyContainerStyled>
                {
                    giffs.length ?
                        giffs.map((giphy,index) => <GiffItem key={giphy.id + giphy.title + index} giff={giphy} />)
                        :
                        (
                            loading ? 
                            null
                            : (
                                <ErrorMessagesStyled theme={theme} error={error}>
                                    <p>{NO_GIFFS_FOUND_MSG}</p>    
                                </ErrorMessagesStyled>
                            )
                        )
                }
            </GiphyContainerStyled>
            <LoadingNextGiffIndicator ref={loadingRef}>                
                { loading ? <Loader /> : null }
                { error ? 
                    (<ErrorMessagesStyled theme={theme} error={error}>
                        <p>{ERROR_MSG}</p>
                    </ErrorMessagesStyled>) 
                    : null
                }
            </LoadingNextGiffIndicator>
        </>

    )
};

export default Giffs;