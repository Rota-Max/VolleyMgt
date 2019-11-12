import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Chart } from "react-google-charts";

export class PieChart extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  
  render() {

    const myLegenda = ((this.props.IdSoggetto && this.props.IdSoggetto === "0") ? "left" : "none");
    const myWidth = ((this.props.IdSoggetto && this.props.IdSoggetto === "0") ? "100%" : "200%");
   
    return (
      <div className="home-pie-chart">
       <Chart
          width={myWidth}
          height={'33%'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={this.props.data}
          options={{
            title: this.props.title,
            is3D: true,
            colors: getColorSet(this.props.setType),
            legend: myLegenda,
          }}
         
        />
      </div>
    );
  }
}

function getPieData(IdSoggetto,statistiche,Type){

    var filter = "IdSoggetto ="+IdSoggetto;
    var sArray = [['key','value']];
    if (statistiche  && IdSoggetto)
    {

       var newArray = [];

       if (IdSoggetto != "0"){
         newArray = statistiche.filter(function (el) {
            return el.IdSoggetto == IdSoggetto ;
          });
       }
       else
       {
         newArray = statistiche;
       }

        var APP = 0,AP= 0,AN =0,ANN=0;

        newArray.forEach(function (arrayItem) {
          APP = Number(arrayItem.APP) + APP;
           AP = Number(arrayItem.AP) + AP;
            AN = Number(arrayItem.APP) + AN;
             ANN = Number(arrayItem.APP) + ANN;
            
        });

        sArray.push(['APP',APP]);
        sArray.push(['AP',AP]);
        sArray.push(['AN',AN]);
        sArray.push(['ANN',ANN]);

    }
    return sArray;
}

function getColorSet(setType){
 
  var _setOfColors;

  switch(setType) {
        case "1":
          _setOfColors = ['#039c05', '#2dbd01', '#b00202', '#ce0505', '#f20606'];
          break;
        case "2":
          _setOfColors = ['#0f6983', '#2691a5', '#e29686', '#faaa8f', '#f9c6b3'];
          break;
        case "3":
          _setOfColors = ['#9dd227', '#b1ee46', '#fbe042', '#fbd803', '#f0c43d'];
          break;
        default:
          _setOfColors = ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'];
      }
   return _setOfColors ;
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
)(PieChart);
