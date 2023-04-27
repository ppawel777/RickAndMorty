import React from 'react';
import { useParams } from "react-router-dom";

import { Card, Image, Text, Group } from '@mantine/core';
import dataJson from './episode.json';

const Episode = () => {
  const params = useParams();
  const data = JSON.parse(JSON.stringify(dataJson));
  const episode = data.find(f => f.id === +params.id) || null;

  return (
    <>
    {
      episode && 
      <Card shadow="sm" padding="sm" radius="md" className='rm-heroes_one'>
        <Card.Section>
          <Image
            height="300px"
            width="100%"
            mx="auto"
            alt={ episode.name }
            withPlaceholder
          />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{ episode.name }</Text>
        </Group>
        <Text size="sm" color="dimmed">
          <p>Air_date: { episode.air_date }</p>
          <p>Episode: { episode.episode }</p>
        </Text>
      </Card>
    }
    </>
  )
}

export default Episode
