import EpisodeComponent from '../../components/RickAndMorty/Episode/Episode.jsx'
import { useNavigate } from "react-router-dom";

const Episode = () => {
	const navigate = useNavigate();
	const goBack = () => {
    navigate(-1);
  };

	return (
		<>
			<h3>Подробнее об эпизоде </h3>
			<button onClick={ goBack }>Назад</button>
			<EpisodeComponent />
		</>
	)
}

export default Episode;
