import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Header from './components/Header';
import PostEditor from './components/PostEditor';
import { Home, Posts } from './pages';
import withToast from './HOCs/withToast';

import './css/edf-0.1.css';
import './css/App.css';


function App()
{
	return (
		<Provider store={ store }>
			<Header>
				React-Redux Posts Application
			</Header>

			<Router history={ history }>
				<Switch>

					<Route exact path='/'>
						<Home />
					</Route>

					<Route path='/posts'>
						<Posts />

						<Route exact path={[ '/posts/:id/edit', '/posts/new' ]}>
							<PostEditor></PostEditor>
						</Route>
					</Route>

				</Switch>
			</Router>
		</Provider>
	);
}

export default withToast( App );
