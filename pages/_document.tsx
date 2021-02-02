import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async ctx => {
  const initialProps = await Document.getInitialProps(ctx);
  // Step 1: Create an instance of ServerStyleSheet
  const sheet = new ServerStyleSheet();
  // Step 2: Retrieve styles from components in the page
  const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
  // Step 3: Extract the styles as <style> tags
  const styleTags = sheet.getStyleElement();
  sheet.seal();
  // Step 4: Pass styleTags as a prop
  return { ...initialProps, ...page, styleTags };
};
