import React from 'react';
import { useParams } from "react-router-dom";

import { Card, Image, Text, Group } from '@mantine/core';
import dataJson from './location.json';

const Location = () => {
  const params = useParams();
  const data = JSON.parse(JSON.stringify(dataJson));
  const location = data.find(f => f.id === +params.id) || null;

  return (
    <>
    {
      location && 
      <Card shadow="sm" padding="sm" radius="md" className='rm-heroes_one'>
        <Card.Section>
          <Image
            height="300px"
            width="100%"
            mx="auto"
            alt={ location.name }
            withPlaceholder
          />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{ location.name }</Text>
        </Group>
        <Text size="sm" color="dimmed">
          <p>Dimension: { location.dimension }</p>
          <p>Type: { location.type }</p>
        </Text>
      </Card>
    }
    </>
  )
}

export default Location
