import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SidePanel } from './';
/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };
constructor(props) {
  super(props);
  this.state = { soggetti : null } 
}

componentDidMount() {

      var AWS = require("aws-sdk");

        AWS.config.update({
          region: "eu-central-1",
          accessKeyId: "AKIAZKDVM3WP77XOYC4P",
          secretAccessKey: "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"
        });

      var docClient = new AWS.DynamoDB.DocumentClient();

      var soggetti = null;

      var table = "Soggetto";

      var params = {
          TableName: table,
          Key: {"IdSoggetto": 1}
      };

  
      docClient.get(params, function(err, data) {
          if (err) {
              console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
          } 
          else
          {
              console.log("", JSON.stringify(data, null, 2));
              console.log("", JSON.stringify(data.Item, null, 2));
               this.setState({ soggetti: data.Item });
               console.log("xxx  ",JSON.stringify(this.state.soggetti, null, 2));

          }
      })
     
     
  }

  render() {


    return (
      <div className="examples-layout">
        <div className="page-container" soggetti={this.state.soggetti}>{this.props.children}</div>
      </div>
    );
  }
}
