import LoginComponent from '../../components/Login/Login.jsx';
import ErrorBoundary from '../../ErrorBoundary.js'

const Login = () => {
	return (
		<>
			<h3>Авторизуйтесь</h3>
			<div className='rm-heroes'>
				<ErrorBoundary>
					<LoginComponent />
				</ErrorBoundary>
			</div>
		</>
	)
}

export default Login;
