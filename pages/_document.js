import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html>
        <Head>
          <title>NeoResQ: UMP-123</title>
          {styleTags}
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,900"
            rel="stylesheet"
          />
        </Head>
        <body>
          <style>{`
            body {
              font-size: 16px;
              font-family: Lato, sans-serif;
            }

            p {
              line-height: 1.5;
              color: #434A54;
            }

            .ff-lobster {
              font-family: Lobster, cursive;
            }
            .ff-lato {
              font-family: Lato, sans-serif;
            }

            .card-shadow {
              box-shadow: 0px 5px 10px -3px rgba(230, 233, 238, 0.7);
            }
            .shadow {
              box-shadow: 0px 5px 10px -3px rgba(black, 0.2);
            }
            .shadow1 {
              box-shadow: 0 8px 34px 0 rgba(0, 0, 0, 0.3);
            }

            .ts {
              text-shadow: 0 1px 2px rgba(0,0,0,0.2);
            }

            .flex-center {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .gray {
              color: #434A54;
            }
            .red {
              color: #da4a4a;
            }
            .red-dark {
              color: #7c2c2c;
            }

            .bg-gray-light {
              background-color: #F7F8FA;
            }

            .shadow-inset {
              box-shadow: inset 0px 0px 10px -1px rgba(0,0,0, 0.2);
            }
          `}</style>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
