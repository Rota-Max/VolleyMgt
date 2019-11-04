import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Draggable from 'react-draggable';

export class Soggetto extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  };

onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };

  render() {
  const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

    return (
  <Draggable  {...dragHandlers}>
      <div className="home-soggetto" id={"pnlSoggetto" + this.props.key}>

        <div className="home-soggettoheader" id={"pnlSoggettoheader" + this.props.key}>{this.props.nome + ' ' + this.props.cognome}   
        </div>
      </div>
     </Draggable>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
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
