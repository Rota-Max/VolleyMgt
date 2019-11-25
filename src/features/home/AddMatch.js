import React, { Component , useState} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Form,FormGroup, FormInput ,FormSelect} from "shards-react";
import Modal from 'react-bootstrap/Modal'
import { Button, ButtonGroup } from "shards-react";

export class AddMatch extends Component {
  constructor () {
    super();
    this.state = {
      NumGara: '',
      Categoria: '',
      Avversario: '',
      DataGara: ''
    }
  }

  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

 render () {
    if (!this.props.visible)
    {
      return(<div></div>);
    }
    else
    {
      return (
        <Match visible={this.props.visible}/>

      );        
    }
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}



function Match(props) {
  
 const [show, setShow] = useState( props.visible);

 const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Gara</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <label htmlFor="idGara">Numero Gara</label>
              <FormInput size="sm" id="idGara" placeholder="numero gara" type="number" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Categoria">Categoria</label>
              <FormSelect>
                <option value="0">-</option>
                <option value="U16">Under 16 Maschile</option>
                <option value="2DM">2^ Divisione Maschile</option>
              </FormSelect>
            </FormGroup>
            <FormGroup>
              <label htmlFor="DataGara">Data Gara</label>
              <FormInput size="sm" id="DataGara" placeholder="data gara" type="date"  />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Avversario">Avversario</label>
              <FormInput size="sm" id="Avversario" placeholder="avversario" />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="primary">
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
   </div>
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMatch);
