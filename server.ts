import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

const path = require('path')
const multipart = require('connect-multiparty');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const { Data } = require('./models');

const cors = require('cors');


import { AppServerModule } from './src/main.server';


const multiPartMiddleware = multipart({
  uploadDir: 'subidas'

});


// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), '../browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.use(bodyParser.json({ limit: '200mb' }));
  server.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));
  server.use(cors());
  server.use(express.json());
  server.use('/upload', express.static(path.resolve('./subidas')))
  
  server.get('/data', async (req, res) => {
    const data = await Data.find();res.json(data);
  });

  server.post('/data', async (req, res) => {
    const data = new Data({

      categoria: req.body.categoria,
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      articulo: req.body.articulo,
      vistas: req.body.vistas,
      imagen: req.body.imagen

    });
    await data.save();
    res.json('Articulo creado!');

  });

  server.delete('/data/:_id', async (req, res) => {
    const { _id } = req.params;
    await Data.findByIdAndDelete(_id);
    res.json("Eliminado!");
  });

  server.put('/data/:_id', async (req, res) => {


    const { _id } = req.params;
    const articulo = {
      _id: _id,
      categoria: req.body.categoria,
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      articulo: req.body.articulo,
      vistas: req.body.vistas,
      imagen: req.body.imagen

    }
    console.log(articulo)
    await Data.findByIdAndUpdate(_id, { $set: articulo }, { new: true });
    res.json('Modificado!');

  });


  //  IMAGEN LOAD MULTIPARTY
  server.post('/upload', multiPartMiddleware, (req:any, res) => {
    var link = req.files['archivos'].path  
    console.log(link)

    var url = 'http://66.97.44.139/upload/' + link.slice(8)
    console.log({ 'url': url })
    res.json({ 'url': url });


  });

  server.get('/data/:_id', async (req, res) => {
    var aux = String(req.params._id)


    try {
      const articulo = await Data.findById({ _id: aux })
      if (articulo === null) {
        const articulo = await Data.findOne({ indice: aux })

        res.json(articulo)

      } else {

        res.json(articulo)

      }




    } catch (err) {
      res.json('ID no encontrado..')
    }

  });



  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));
  server.use('/upload', express.static(path.join(__dirname, '/subidas')));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


mongoose.connect('mongodb+srv://ccamAdmin:UNdianuevo.12@ccam.qpdpzqh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
});

export * from './src/main.server';
