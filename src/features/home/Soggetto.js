import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Draggable from 'react-draggable';
import AnimateHeight from 'react-animate-height';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'
import PieChart from './PieChart';

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
    },
    height: 0,
    arrow: faAngleDown
  };

  onStart = (e) => {
    this.setState({activeDrags: ++this.state.activeDrags});
    let elems = document.getElementsByClassName('react-draggable');
    for(let i = 0; i < elems.length; i++) {
      elems[i].style.zIndex = 1;
      e.currentTarget.style.zIndex = 2;
  }

  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };

  onOpenPanel = () => {
    const { height,arrow } = this.state;
 
    this.setState({
      arrow: arrow === faAngleDown ? faAngleUp : faAngleDown,
      height: height === 0 ? 'auto' : 0,
    });
  };

  render() {
  const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
  const { height,arrow } = this.state;

 let sArrayA = [['key','value']];
    let sArrayR = [['key','value']];
    let sArrayB = [['key','value']];

     if (this.props && this.props.AllData)
    {
        var newArray = this.props.AllData;
        var APP = 0,AP= 0,AN =0,ANN=0;
        var RPP = 0,RP= 0,RN =0,RNN=0;
        var BPP = 0,BP= 0,BN =0,BNN=0;

        newArray.forEach(function (arrayItem) {
          APP = Number(arrayItem.APP) + APP;
          AP = Number(arrayItem.AP) + AP;
          AN = Number(arrayItem.APP) + AN;
          ANN = Number(arrayItem.APP) + ANN;
          RPP = Number(arrayItem.RPP) + RPP;
          RP = Number(arrayItem.RP) + RP;
          RN = Number(arrayItem.RN) + RN;
          RNN = Number(arrayItem.RNN) + RNN;
          BPP = Number(arrayItem.BPP) + BPP;
          BP = Number(arrayItem.BP) + BP;
          BN = Number(arrayItem.BN) + BN;
          BNN = Number(arrayItem.BNN) + BNN;
            
        });

        if (APP>0) sArrayA.push(['Punto',APP]);
        if (AP>0) sArrayA.push(['Efficace',AP]);
        if (AN>0) sArrayA.push(['Non Efficace',AN]);
        if (ANN>0) sArrayA.push(['Errore punto',ANN]);
        if (RPP>0) sArrayR.push(['Perfetta',RPP]);
        if (RP>0) sArrayR.push(['Ricostruita',RP]);
        if (RN>0) sArrayR.push(['Non Ricostruita',RN]);
        if (RNN>0) sArrayR.push(['Errore punto',RNN]);
        if (BPP>0) sArrayB.push(['Punto',BPP]);
        if (BP>0) sArrayB.push(['Efficace',BP]);
        if (BN>0) sArrayB.push(['Non Efficace',BN]);
        if (BNN>0) sArrayB.push(['Errore punto',BNN]);

    }

    if (sArrayA.length > 1 || sArrayB.length > 1|| sArrayR.length > 1) {

        return (
          
      <Draggable  {...dragHandlers}>
          <div className="home-soggetto" id={"pnlSoggetto" + this.props.key}>

            <div className="home-soggettoheader" id={"pnlSoggettoheader" + this.props.key}>{this.props.nome + ' ' + this.props.cognome}   
            <div className="iconStyle">
              <FontAwesomeIcon icon={arrow} onClick={ this.onOpenPanel } />
            </div>
            </div>
            <AnimateHeight
                duration= {500}
                  height= { height }
            >
              <PieChart title="Attacco" IdSoggetto={this.props.key} setType="1" data={sArrayA}/>
              <PieChart title="Ricezione" IdSoggetto={this.props.key} setType="2" data={sArrayR}/>
              <PieChart title="Battuta" IdSoggetto={this.props.key} setType="3" data={sArrayB}/>
            </AnimateHeight>
          </div>
        </Draggable>
        );
    }
    else{
      return <div />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Soggetto);
