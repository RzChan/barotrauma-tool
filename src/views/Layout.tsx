import * as React from 'react';
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import { contextData } from 'store/ContextStore';

const Layout = (props: React.PropsWithChildren<{}>) =>
{
	const routeMatch = useRouteMatch();
	const store = React.useContext(contextData);
	const uiLang = store.database.ui;
	const history = useHistory();

	const changeLangUrl = (lang: string) =>
	{
		history.push(history.location.pathname.replace(routeMatch.path, `/${lang}`));
	}

	return <div className="base">
		<header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 2 }} >
			<div className="header unselectable" style={{ position: "relative", overflow: "hidden" }}>
				<div className="px-2 d-flex" style={{ position: "absolute", zIndex: 1, left: 0, right: 0 }}>
					<span className="mr-3" style={{ fontSize: "24px", flex: "0 0 189px" }}>Barotrauma Tool</span>
					<Nav>
						<NavItem>
							<NavLink className="app nav-link" to={`${routeMatch.url}/item`}>{uiLang["item"]}</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="app nav-link" to={`${routeMatch.url}/recipe`}>{uiLang["recipe"]}</NavLink>
						</NavItem>
					</Nav>
					<span style={{ marginLeft: "auto" }}>
						<span className="px-2" onClick={() => changeLangUrl("zh-tw")} style={{ cursor: "pointer" }}>繁體中文</span>
						<span className="px-2" onClick={() => changeLangUrl("en-us")} style={{ cursor: "pointer" }}>English</span>
					</span>
				</div>
				<div style={{ position: "absolute", right: "0px", top: "0px" }}>
					<img src="img/barotrauma-2.png" alt="" style={{ height: "240px", transform: "translate(0px, -50%)" }} />
				</div>
			</div>
		</header>
		<div className="main" >
			{props.children}
		</div>
	</div>;
}

export default Layout;