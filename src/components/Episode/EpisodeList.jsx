import React, { useState, useCallback, useRef } from 'react';
import { Link } from "react-router-dom";
import useResponseDataList from '../../hooks/useResponseDataList'
import { SimpleGrid, Image, Alert, Loader } from '@mantine/core';

const EpisodeList = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const {
    data,
    loading,
    error,
    hasMore,
  } = useResponseDataList('episode', pageNumber)

  const observer = useRef();

  const lastNodeRef = useCallback((node) => {
    if (loading) return
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prev) => prev + 1)
      }
    })

    if (node) {
      observer.current.observe(node)
    }
  }, [loading, hasMore])

  return (
    <>
    <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
    {
      data.map((item, index) => (
        <Link 
          className='rm-heroes_item' 
          key={ item.id } 
          to={`./${item.id}/`}
          ref={ data.length - 15 === index + 1 ? lastNodeRef : null }
        >
          <Image width="100%" height="300px" alt={ item.name } withPlaceholder />
          <div className='rm-heroes_item__text'>
          <span>{ item.name }, </span>
            <span>{ item.episode }</span>
          </div>
        </Link>
      ))
    }
    </SimpleGrid>
    { loading && <Loader /> }
    {
      error !=='' &&
      <Alert title="Ошибка" color="red">
        { error }
      </Alert>
    }
    </>
  )
}

export default EpisodeList
