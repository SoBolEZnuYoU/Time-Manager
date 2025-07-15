import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { TimeStream } from './Time-Stream';
import { store } from './store';
import './index.css';

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<TimeStream />
		</BrowserRouter>
	</Provider>,
);
