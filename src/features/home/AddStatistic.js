import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Form,FormGroup, FormInput } from "shards-react";
import Modal from 'react-bootstrap/Modal'
import { Button, ButtonGroup } from "shards-react";

export class AddStatistic extends Component {
  
  constructor () {
    super();
    this.state = {
      email: ''
    }
  }
  
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

 changeHandler = event => {
    this.setState({
      email: event.target.value
    });
  }

  render () {
    if (!this.props.visible)
    {
      return(<div></div>);
    }
    else
    {
      return (
        <Example visible={this.props.visible}/>

      );        
    }
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


function Example(props) {
  

 

  return (
    <div>
      <Modal show={props.visible}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <label htmlFor="APP">Attacchi Positivi ( # )</label>
              <FormInput id="APP" placeholder="Attacchi Positivi ( # )" />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStatistic);
