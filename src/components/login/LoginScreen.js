import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../auth/auth';

const LoginScreen = ({ history }) => {
	const dispatch = useDispatch();

	const nombre = {
		id: 0,
		name: 'Mirco',
	};

	const handleLogin = () => {
		dispatch(startLogin(nombre));

		history.replace('/');
	};

	return (
		<div className="container mt-5">
			<h1>Login</h1>
			<hr />
			<button className="btn btn-primary" onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;
