import React from 'react';
import { useParams } from "react-router-dom";

import { Card, Image, Text, Badge, Group, Loader } from '@mantine/core';
import useResponseData from '../../hooks/useResponseData';

const Heroes = () => {
  const params = useParams();
  const { data, isLoading } = useResponseData('character', +params.id)

  return (
    <>
    {
      isLoading ? <Loader /> :
      data &&
      <Card shadow="sm" padding="sm" radius="md" className='rm-heroes_one'>
        <Card.Section>
          <Image
            src={ data.image }
            maw={300} 
            width="100%"
            mx="auto"
            alt={ data.name }
            withPlaceholder
          />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{ data.name }</Text>
          <Badge color="pink" variant="light">{ data.status }</Badge>
        </Group>
        <Text size="sm" color="dimmed">
          <p>Gender: { data.gender }</p>
          <p>Species: { data.species }</p>
          <p>Type: { data.type }</p>
        </Text>
      </Card>
    }
    </>
  )
}

export default Heroes
