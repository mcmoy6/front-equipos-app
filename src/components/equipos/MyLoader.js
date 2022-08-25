import LoadingOverlay from 'react-loading-overlay';


export const MyLoader = ({show}) => {

    return (
        <LoadingOverlay
            active={show}
           
        />

    );
}