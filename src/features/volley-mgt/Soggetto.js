import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Soggetto extends Component {
  static propTypes = {
    volleyMgt: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="volley-mgt-soggetto">
         <button onClick={this.props.actions.counterPlusOne} >+</button>
            &nbsp;{this.props.volleyMgt.count}&nbsp;
        <button onClick={this.props.actions.counterMinusOne}>-</button>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    volleyMgt: state.volleyMgt,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Soggetto);
