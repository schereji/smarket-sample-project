import React from 'react';
import logo from '../images/smarkets-logo.svg';
import {NavLink} from 'react-router-dom'

export const Header = () => {
	return (
		<header className="row">
			<nav>
				<NavLink to={'/'} exact>
					<img src={logo} alt={'smarkets'}/>
				</NavLink>
			</nav>
		</header>
	);
};
