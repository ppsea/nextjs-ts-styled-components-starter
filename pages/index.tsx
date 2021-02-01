import React from 'react';
import Page from '@components/nextjs/Page';
import Main from '@components/Main';
import { META_DESCRIPTION } from '@lib/constants';

const index = () => {
  const meta = {
    title: 'next,ts,styled-components Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Main />
    </Page>
  );
};

export default index;
