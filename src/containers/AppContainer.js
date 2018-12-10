import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from '../App';

const mapStateToProps = (state) => ({ app: state.app })

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

    /**
     * Ex of function

     function: () => {
        dispatch(function())....
      },

    */
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
