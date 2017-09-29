import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../action-creators';
import Main from './Main';

const mapStateToProps = (state) => ({
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

/*
 * inject store state into <Main> 
 * and provide it with state changing functions (mapDispatchToProps)
 */
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
