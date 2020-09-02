import React, {useContext} from 'react';
import { SnackbarContext } from '../contexts/contexts';

const withSnackbar = (Component) => (props) => {
    const snackbar = useContext(SnackbarContext);
    return <Component snackbar={snackbar} {...props} />
};

export default withSnackbar;
