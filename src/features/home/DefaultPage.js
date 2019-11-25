import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import rekitLogo from '../../images/rekit-logo.svg';
import volleyLogo from '../../images/PCPVOlley.svg';
import volleyLogoFluo from '../../images/PCPVOlleyFluo.svg';
import SidePanel from './SidePanel';
import CenterPanel from './CenterPanel';
import AddStatistic from './AddStatistic';
import AddMatch from './AddMatch';
import { Button, ButtonGroup } from "shards-react";
import * as actions from './redux/actions';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export class DefaultPage extends Component {


  constructor () {
    super();
    this.state = {
      showAddStatistic: false,
      showAddMatch: false
    }
  }

  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
 };

  openAddStatisticModal = () => {
   
    this.setState({ showAddStatistic: true });
  };

   openAddMatchModal = () => {
   
    this.setState({ showAddMatch: true });
  };

 componentDidMount() {
    this.props.actions.getStatistic();
  }   
  
  render() {


    return (
      <div className="home-default-page">
        <header className="app-header">
          <img src={volleyLogo} className="app-logo" alt="logo" />
          <img src={volleyLogoFluo} className="app-logo-fluo" alt="logo-Fluo"  />
          <img src={rekitLogo} className="rekit-logo" alt="logo" />
          <h1 className="app-title">Volley Management</h1>
          <ButtonGroup size="sm" className="app-menu-buttons" vertical >
            <Button outline onClick={ this.openAddMatchModal} >New Match</Button>
            <Button outline onClick={ this.openAddStatisticModal} >New Scout</Button>
          </ButtonGroup>
        </header>
        <div className="app-intro">
         <SidePanel/>
         <CenterPanel/>
        </div>
        <AddStatistic visible={this.state.showAddStatistic}  />
        <AddMatch visible={this.state.showAddMatch}  />
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
