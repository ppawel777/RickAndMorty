import HeroesListComponent from '../../components/RickAndMorty/Heroes/HeroesList.jsx'
// import { Flex } from '@mantine/core';

const HeroesList = () => {
	return (
		<>
			<h3>Персонажи мультсериала Рик и Морти</h3>
			<div className='rm-heroes_list__wrap'><HeroesListComponent /></div>
		</>
	)
}

export default HeroesList;
