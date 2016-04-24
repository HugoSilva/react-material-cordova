import { render } from 'react-dom'
import routes from './routes';
require('./index.html');

let injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

render(routes, document.getElementById('app'))