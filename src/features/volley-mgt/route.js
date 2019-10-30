// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  Statistics,
} from './';

export default {
  path: 'volley-mgt',
  name: 'Volley mgt',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'Statistics', name: 'Statistics', component: Statistics },
  ],
};
