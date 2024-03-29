import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import apiRoute from "./server/routes/apiRoute";

import { Provider } from 'react-redux';
import { store } from "./redux/stores/index";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export default 
express()
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use("/api", apiRoute)
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
          <html lang="">
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charset="utf-8" />
                <title>Welcome to Razzle</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                ${
                  assets.client.css
                    ? `<link rel="stylesheet" href="${assets.client.css}">`
                    : ''
                }
                ${
                  process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`
                }
            </head>
            <body>
                <div id="root">${markup}</div>
            </body>
          </html>`
      );
   }
 });
