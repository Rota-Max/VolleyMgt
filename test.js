
/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
var AWS = require("aws-sdk");

AWS.config.update({
          region: "eu-central-1",
          accessKeyId: "AKIAZKDVM3WPUD4CTBVE",
          secretAccessKey: "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"
        });

var docClient = new AWS.DynamoDB.DocumentClient();
  var table = "Soggetto";
      var params = {
          TableName: table,
          Key: {"IdSoggetto": 1}
      };

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});