import LocationListComponent from '../../components/RickAndMorty/Location/LocationList.jsx'

const LocationList = () => {
	return (
		<>
			<h3>Локации мультсериала Рик и Морти</h3>
			<div className='rm-heroes_list__wrap'><LocationListComponent /></div>
		</>
	)
}

export default LocationList;
