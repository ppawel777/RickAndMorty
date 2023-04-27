import React from 'react';
import { Link } from "react-router-dom";

import { SimpleGrid, Image } from '@mantine/core';
import dataJson from './characters.json';

const HeroesList = () => {
  const data = JSON.parse(JSON.stringify(dataJson));

  return (
    <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
    {
      data.map(item => (
        <Link className='rm-heroes_item' key={ item.id } to={`./${item.id}/`}>
          <Image width="100%" maw={300} mx="auto" src={ item.image } alt={ item.name } withPlaceholder />
          <div className='rm-heroes_item__text'>
            <span>{ item.name }, </span>
            <span>{ item.gender }</span><br/>
            <span>{ item.species }</span>
          </div>
        </Link>
      ))
    }
    </SimpleGrid>
  )
}

export default HeroesList
