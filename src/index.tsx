import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// stylesheet
import 'bootstrap/dist/css/bootstrap.css';
import 'styles/w3.css';
import 'styles/font-awesome-4.7.0/css/font-awesome.css';
import 'styles/index.css';
import 'styles/App.scss';

import { HashRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';
import ContextStroe from 'store/ContextStore';
import MsgModal from 'component/Modal/MsgModal';

ReactDOM.render(
	<HashRouter>
		<ContextStroe>
			<React.StrictMode>
				<Switch>
					<Route path="/zh-tw" children={<App lang="zh-tw" />} />
					<Route path="/en-us" children={<App lang="en-us" />} />
					<Redirect exact from="/" to="/zh-tw/" />
				</Switch>
				<MsgModal />
			</React.StrictMode>
		</ContextStroe>
	</HashRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
