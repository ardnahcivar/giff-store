import { GiphyContainerStyled, LoadingNextGiffIndicator, ErrorMessagesStyled, GiffListComplete } from './styles';
import { Loader } from '../loader';
import { useGiffs } from './use-giffs';
import { useTheme } from './../../use-theme';
import { ERROR_MSG, GIFFS_NOT_AVAILABLE } from './../../constants';
import { GiffList } from './giff-list';

const Giffs = () => {
    const theme = useTheme();
    const [giffs, loading, loadingRef, error, giffListComplete ] = useGiffs();

    return (
        <>
            <GiphyContainerStyled>
                <GiffList  
                    giffs={giffs}
                    error={error}
                    loading={loading}
                />
            </GiphyContainerStyled>

            {
                !giffListComplete ?
                    (<LoadingNextGiffIndicator ref={loadingRef}>                
                        <Loader />
                    </LoadingNextGiffIndicator>)
                    : null
            }
            { error ? 
                    (<ErrorMessagesStyled theme={theme} error={error}>
                        <p>{ERROR_MSG}</p>
                    </ErrorMessagesStyled>) 
                : null
            }
            {
                giffListComplete && giffs.length ?
                    <GiffListComplete theme={theme}>
                        <p>{GIFFS_NOT_AVAILABLE}</p>
                    </GiffListComplete>
                : null
            }
        </>
    )
};

export default Giffs;