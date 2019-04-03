import { connect } from "react-redux";
import Component from "../components/App";
import { listenNetworkState } from "../actions";

const mapStateToProps = (state) => ({
    networkState: state.networkState.currentState,
});

export default connect(mapStateToProps, { listenNetworkState })(Component);