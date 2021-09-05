import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

function bootstrap(renderID) {
	ReactDOM.render(<Root />, document.getElementById(renderID));

	function Root() {
		return (
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);
	}
}

bootstrap("root");
reportWebVitals();
