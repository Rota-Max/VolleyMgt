import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import PieChart from './PieChart';

export class AllStatistic extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };



  render() {
    
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
          AN = Number(arrayItem.AN) + AN;
          ANN = Number(arrayItem.ANN) + ANN;
          RPP = Number(arrayItem.RPP) + RPP;
          RP = Number(arrayItem.RP) + RP;
          RN = Number(arrayItem.RN) + RN;
          RNN = Number(arrayItem.RNN) + RNN;
          BPP = Number(arrayItem.BPP) + BPP;
          BP = Number(arrayItem.BP) + BP;
          BN = Number(arrayItem.BN) + BN;
          BNN = Number(arrayItem.BNN) + BNN;

            
        });

        sArrayA.push(['Punto',APP]);
        sArrayA.push(['Efficace',AP]);
        sArrayA.push(['Non Efficace',AN]);
        sArrayA.push(['Errore punto',ANN]);
        sArrayR.push(['Perfetta',RPP]);
        sArrayR.push(['Ricostruita',RP]);
        sArrayR.push(['Non Ricostruita',RN]);
        sArrayR.push(['Errore punto',RNN]);
        sArrayB.push(['Punto',BPP]);
        sArrayB.push(['Efficace',BP]);
        sArrayB.push(['Non Efficace',BN]);
        sArrayB.push(['Errore punto',BNN]);

    }

    return (
      <div className="home-all-statistic">
        <PieChart title="Attacco"  IdSoggetto="0" setType="1" data={sArrayA}/>
        <PieChart title="Ricezione" IdSoggetto="0" setType="2" data={sArrayR}/>
        <PieChart title="Battuta" IdSoggetto="0" setType="3" data={sArrayB}/>
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
)(AllStatistic);
