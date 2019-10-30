import {
  VOLLEY_MGT_GET_SOGGETTI_BEGIN,
  VOLLEY_MGT_GET_SOGGETTI_SUCCESS,
  VOLLEY_MGT_GET_SOGGETTI_FAILURE,
  VOLLEY_MGT_GET_SOGGETTI_DISMISS_ERROR,
} from './constants';


function getData(){
      var doRequest = undefined;
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
              doRequest = err;
          } 
          else
          {
             // console.log("", JSON.stringify(data, null, 2));
             // console.log("", JSON.stringify(data.Item, null, 2));
              doRequest = data;
          }
      })

     return doRequest;
     
};


// Rekit uses redux-thunk for async actions by default: https://github.com/gaearon/redux-thunk
// If you prefer redux-saga, you can use rekit-plugin-redux-saga: https://github.com/supnate/rekit-plugin-redux-saga
export function getSoggetti(args = {}) {
  return (dispatch) => { // optionally you can have getState as the second argument
    dispatch({
      type: VOLLEY_MGT_GET_SOGGETTI_BEGIN,
    });

    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      // const doRequest = args.error ? Promise.reject(new Error()) : Promise.resolve();

      const doRequest =args.error ? Promise.reject(new Error()) : getData();
  
        doRequest.then(
          (data) => {
            dispatch({
              type: VOLLEY_MGT_GET_SOGGETTI_SUCCESS,
              data: data,
            });
            resolve(data);
          },
          // Use rejectHandler as the second argument so that render errors won't be caught.
          (err) => {
            dispatch({
              type: VOLLEY_MGT_GET_SOGGETTI_FAILURE,
              data: { error: err },
            });
            reject(err);
          },
        );
     
    });

    return promise;
  };
}

// Async action saves request error by default, this method is used to dismiss the error info.
// If you don't want errors to be saved in Redux store, just ignore this method.
export function dismissGetSoggettiError() {
  return {
    type: VOLLEY_MGT_GET_SOGGETTI_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case VOLLEY_MGT_GET_SOGGETTI_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        getSoggettiPending: true,
        getSoggettiError: null,
      };

    case VOLLEY_MGT_GET_SOGGETTI_SUCCESS:
      // The request is success
      return {
        ...state,
        getSoggettiPending: false,
        getSoggettiError: null,
      };

    case VOLLEY_MGT_GET_SOGGETTI_FAILURE:
      // The request is failed
      return {
        ...state,
        getSoggettiPending: false,
        getSoggettiError: action.data.error,
      };

    case VOLLEY_MGT_GET_SOGGETTI_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        getSoggettiError: null,
      };

    default:
      return state;
  }
}
