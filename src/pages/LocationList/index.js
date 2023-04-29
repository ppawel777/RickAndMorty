import LocationListComponent from '../../components/Location/LocationList.jsx'
import ErrorBoundary from '../../ErrorBoundary.js'

const LocationList = () => {
	return (
		<>
			<h3>Локации мультсериала Рик и Морти</h3>
			<div className='rm-heroes_list__wrap'>
				<ErrorBoundary>
					<LocationListComponent />
				</ErrorBoundary>
			</div>
		</>
	)
}

export default LocationList;
