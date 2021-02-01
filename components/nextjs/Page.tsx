import { Fragment } from 'react';
import Head from 'next/head';
import { SITE_NAME, SITE_DESCRIPTION } from '@lib/constants';

type Meta = {
  title: string | null;
  description: string | null;
  image?: string | null;
  url?: string | null;
};

type Props = {
  meta: Meta;
  children: React.ReactNode;
  fullViewport?: boolean;
};

export default function Page({ meta, children, fullViewport }: Props) {
  const title = meta.title || SITE_NAME;
  const url = meta.title || SITE_NAME;
  const description = meta.description || SITE_DESCRIPTION;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      {children}
    </Fragment>
  );
}
