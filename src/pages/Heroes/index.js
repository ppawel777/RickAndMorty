import HeroesComponent from '../../components/RickAndMorty/Heroes/Heroes.jsx'
import { useNavigate } from "react-router-dom";

const Heroes = () => {
	const navigate = useNavigate();
	const goBack = () => {
    navigate(-1);
  };

	return (
		<>
			<h3>Подробнее о персонаже</h3>
			<button onClick={ goBack }>Назад</button>
			<HeroesComponent />
		</>
	)
}

export default Heroes;
