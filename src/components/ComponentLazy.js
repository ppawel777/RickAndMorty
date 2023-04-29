import React, { Suspense, lazy } from 'react';

const ComponentName = (dir, name) => {
  return lazy(() => import(`../components/${dir}/${name}`))
};

const ComponentLazy = props => {
  const Component = ComponentName(props.dir, props.name);

  return (
    <Suspense>
      <Component { ...props } />
    </Suspense>
  )
};

export default ComponentLazy;
