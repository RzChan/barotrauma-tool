import * as React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { contextData } from 'store/ContextStore';
import Home from 'views/Home';
import Layout from 'views/Layout';
import ItemList from 'views/ItemList';
import ItemInfoBoxModalGlobal from 'component/ItemInfoBoxModalGlobal';

export interface Params
{
	lang: string;
}

interface AppProps
{
	lang: string;
}

const App = (props: AppProps) =>
{
	const store = React.useContext(contextData);
	const routeMatch = useRouteMatch();

	React.useEffect(() =>
	{
		store.database.setLang(props.lang);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.lang]);

	return <Layout>
		<ItemInfoBoxModalGlobal />
		<Switch>
			<Route path={`${routeMatch.path}/item`} name="Item" component={ItemList} />
			<Route exact path={`${routeMatch.path}/recipe`} name="Recipe" component={Home} />
			<Redirect to={`${routeMatch.path}/item`} />
		</Switch>
	</Layout>;
}

export default App;
