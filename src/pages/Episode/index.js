import EpisodeComponent from '../../components/Episode/Episode.jsx'
import { useNavigate } from "react-router-dom";
import ErrorBoundary from '../../ErrorBoundary.js'

const Episode = () => {
	const navigate = useNavigate();
	const goBack = () => {
    navigate(-1);
  };

	return (
		<>
			<h3>Подробнее об эпизоде </h3>
			<button onClick={ goBack }>Назад</button>
			<ErrorBoundary>
				<EpisodeComponent />
			</ErrorBoundary>
		</>
	)
}

export default Episode;
