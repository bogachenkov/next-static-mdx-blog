import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext):Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='ru'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{__html: `var app_color_themes={light:{body:"#FFFFFF",text:"#444444",heading:"#50507F",header:"#E7F5FF",icon:"hsl(210 10% 30%)","icon-hover":"#444444",primary:"#22B8CF",secondary:"#E3FAFC",black:"#444444",gray:"#868E96","gray-light":"#F1F3F5",white:"#FFFFFF"},dark:{body:"#0E141B",text:"#FFFFFF",heading:"#50507F",header:"#182635",icon:"hsl(210 10% 70%)","icon-hover":"#FFFFFF",primary:"#22B8CF",secondary:"#E3FAFC",black:"#444444",gray:"#868E96","gray-light":"#F1F3F5",white:"#FFFFFF"}};!function(){function F(F){for(var e in app_color_themes[F])document.documentElement.style.setProperty("--color-"+e,app_color_themes[F][e])}try{var e=localStorage.getItem("prefered-theme"),r=!0===window.matchMedia("(prefers-color-scheme: dark)").matches;F(!e&&r?"dark":e||"light")}catch(F){console.log(F)}}();`}} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}