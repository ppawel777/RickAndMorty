import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<section>
			<p>Страница не найдена</p>
			<p>код ошибки: 404</p>
			<p>В адресе есть ошибка или страница удалена</p>
			<p>
				<a href="#" onClick={() => navigate(-1)}>Вернуться назад</a>
			</p>
		</section>
	)
}

export default NotFound;
