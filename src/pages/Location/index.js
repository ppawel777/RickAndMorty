import LocationComponent from '../../components/RickAndMorty/Location/Location.jsx'
import { useNavigate } from "react-router-dom";

const Location = () => {
	const navigate = useNavigate();
	const goBack = () => {
    navigate(-1);
  };

	return (
		<>
			<h3>Подробнее о локации</h3>
			<button onClick={ goBack }>Назад</button>
			<LocationComponent />
		</>
	)
}

export default Location;
