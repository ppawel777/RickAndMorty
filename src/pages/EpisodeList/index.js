import EpisodeListComponent from '../../components/Episode/EpisodeList.jsx'
import ErrorBoundary from '../../ErrorBoundary.js'

const EpisodeList = () => {
	return (
		<>
			<h3>Эпизоды мультсериала Рик и Морти</h3>
			<div className='rm-heroes_list__wrap'>
				<ErrorBoundary>
					<EpisodeListComponent />
				</ErrorBoundary>
			</div>
		</>
	)
}

export default EpisodeList;
