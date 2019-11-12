import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'

export class VmDropDown extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };


  select(item) {
    this.props.selected = item;
  }
  show() {
    this.setState({ listVMDDVisible: true });
    document.addEventListener("click", this.hide);
  }
  hide() {
    this.setState({ listVMDDVisible: false });
    document.removeEventListener("click", this.hide);
  }
  renderListItems() {
    var items = [];
    for (var i = 0; i < this.props.list.length; i++) {
      var item = this.props.list[i];
      items.push(<div onClick={this.select.bind(null, item)}>
        <span style={{ color: item.hex }}>{item.name}</span>
      </div>);
    }
    return items;
  }

 SpanPanel() {

      if (this.props.selected) {
        return <span style={{ color: this.props.selected.hex }}>{this.props.selected.name}</span>;
      };
      return <span >Seleziona</span>;
  }

  render() {
    return (
        <div className={"home-vm-drop-down" + (this.props.listVMDDVisible ? " show" : "")}>
          <div className={"home-vm-drop-down-display" + (this.props.listVMDDVisible ? " clicked": "")} onClick={this.show}>
            {this.SpanPanel()}
            <FontAwesomeIcon icon='faAngleDown' />
          </div>
          <div className="home-vm-drop-down-list">
            <div>
              {this.renderListItems()}
            </div>
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
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VmDropDown);
