import React from 'react';
import { useParams } from "react-router-dom";

import { Card, Image, Text, Badge, Group } from '@mantine/core';
import dataJson from './characters.json';

const Heroes = () => {
  const params = useParams();
  const data = JSON.parse(JSON.stringify(dataJson));
  const heroes = data.find(f => f.id === +params.id) || null;

  return (
    <>
    {
      heroes && 
      <Card shadow="sm" padding="sm" radius="md" className='rm-heroes_one'>
        <Card.Section>
          <Image
            src={ heroes.image }
            maw={300} 
            width="100%"
            mx="auto"
            alt={ heroes.name }
            withPlaceholder
          />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{ heroes.name }</Text>
          <Badge color="pink" variant="light">{ heroes.status }</Badge>
        </Group>
        <Text size="sm" color="dimmed">
          <p>Gender: { heroes.gender }</p>
          <p>Species: { heroes.species }</p>
          <p>Type: { heroes.type }</p>
        </Text>
      </Card>
    }
    </>
  )
}

export default Heroes
