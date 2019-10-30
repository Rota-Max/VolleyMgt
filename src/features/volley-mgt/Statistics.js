import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Soggetto from './Soggetto';

export class Statistics extends Component {
  static propTypes = {
    volleyMgt: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="volley-mgt-statistics">
        <button onClick={this.props.actions.getSoggetti}>Get Soggetti</button>
        <br/>
        <br/>
        <br/>
        <ul>
          <li><a href="#url">test</a> </li>
        </ul>
       <Soggetto></Soggetto>
        <Soggetto></Soggetto>
         <Soggetto></Soggetto>
          <Soggetto></Soggetto>
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
)(Statistics);
