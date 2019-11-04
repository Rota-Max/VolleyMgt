import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import rekitLogo from '../../images/rekit-logo.svg';
import volleyLogo from '../../images/PCPVOlley.svg';
import volleyLogoFluo from '../../images/PCPVOlleyFluo.svg';


import * as actions from './redux/actions';
import Soggetto from './Soggetto';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
 };


 componentDidMount() {
    this.props.actions.getSoggetti();

  }   

  
  render() {


    return (
      <div className="home-default-page">
        <header className="app-header">
          <img src={volleyLogo} className="app-logo" alt="logo" />
          <img src={volleyLogoFluo} className="app-logo-fluo" alt="logo-Fluo"  />
          <img src={rekitLogo} className="rekit-logo" alt="logo" />
          <h1 className="app-title">Volley Management</h1>
          
        </header>
        <div className="app-intro">
          <h3>Polisportiva Caluschese Pallavolo</h3>
           {this.props.home.soggettiList.map(item => (
           
            <Soggetto id={'DragSoggetto' + item.IdSoggetto}
              cognome={item.Cognome} 
                nome={item.Nome}
                key={item.IdSoggetto}></Soggetto>
           
           ))}
        </div>
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
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
