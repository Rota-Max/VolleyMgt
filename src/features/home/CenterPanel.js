import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Soggetto from './Soggetto';

export class CenterPanel extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };


 componentDidMount() {
    this.props.actions.getSoggetti();

  }   

  render() {
    return (
      <div className="home-center-panel">
         <h3>Polisportiva Caluschese Pallavolo</h3>
           {this.props.home.soggettiList.map(item => (
           
            <Soggetto id={'DragSoggetto' + item.IdSoggetto}
              cognome={item.Cognome} 
                nome={item.Nome}
                key={item.IdSoggetto}></Soggetto>
           
           ))}
      </div>
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
)(CenterPanel);
