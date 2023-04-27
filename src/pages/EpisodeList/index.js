import EpisodeListComponent from '../../components/RickAndMorty/Episode/EpisodeList.jsx'

const EpisodeList = () => {
	return (
		<>
			<h3>Эпизоды мультсериала Рик и Морти</h3>
			<div className='rm-heroes_list__wrap'><EpisodeListComponent /></div>
		</>
	)
}

export default EpisodeList;
