import React from 'react';
import { Link } from "react-router-dom";

import { SimpleGrid, Image } from '@mantine/core';
import dataJson from './episode.json';

const EpisodeList = () => {
  const data = JSON.parse(JSON.stringify(dataJson));

  return (
    <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
    {
      data.map(item => (
        <Link className='rm-heroes_item' key={ item.id } to={`./${item.id}/`}>
          <Image width="100%" height="300px" alt={ item.name } withPlaceholder />
          <div className='rm-heroes_item__text'>
          <span>{ item.name }, </span>
            <span>{ item.episode }</span>
          </div>
        </Link>
      ))
    }
    </SimpleGrid>
  )
}

export default EpisodeList
