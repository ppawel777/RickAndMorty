import React from 'react';
import { useParams } from "react-router-dom";

import { Card, Image, Text, Group, Loader } from '@mantine/core';
import useResponseData from '../../hooks/useResponseData';

const Location = () => {
  const params = useParams();
  const { data, isLoading } = useResponseData('episode', +params.id)

  return (
    <>
    {
      isLoading ? <Loader /> :
      data &&
      <Card shadow="sm" padding="sm" radius="md" className='rm-heroes_one'>
        <Card.Section>
          <Image
            height="300px"
            width="100%"
            mx="auto"
            alt={ data.name }
            withPlaceholder
          />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{ data.name }</Text>
        </Group>
        <Text size="sm" color="dimmed">
          <p>Dimension: { data.dimension }</p>
          <p>Type: { data.type }</p>
        </Text>
      </Card>
    }
    </>
  )
}

export default Location
