import { render } from 'react-dom'
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./index.html');

injectTapEventPlugin();

render(routes, document.getElementById('app'))