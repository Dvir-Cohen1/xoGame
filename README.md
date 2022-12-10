# xoGame

> This is a mini game app created part of full stack studies '[Tic-Tac-Toe game React.js &amp; Socket.io](https://github.com/Dvir-Cohen1/)'.

## Requirements

- Node.js >= v12

## Application structure

- `root/client/` directory - React front end code.
- `root/server/` directory - Node.js back end code.
- `static/` directory - Compiled front end assets. Created by webpack when you run the
command `npm run build`. The Node.js back end serves serves these assets using the
[`express.static`](https://expressjs.com/en/starter/static-files.html#serving-static-files-in-express) middleware.

## Usage

```bash
# Install dependencies for front end and back end
npm install

# Build front end assets with webpack
npm run build

# Run Node.js back end server and React front end server concurrently
npm start
```

Load up http://localhost:3000 in your browser to view the example website.

## Libraries and frameworks used

- [Express](https://expressjs.com/) - "Fast, unopinionated, minimalist web framework for Node.js".

- [React](https://reactjs.org/) - "A JavaScript library for building user interfaces".

- [Webpack](https://www.npmjs.com/package/webpack) - A popular tool for building
front end assets e.g. CSS and JavaScript.

- [Socket.io](https://socket.io/) - Sockets have traditionally been the solution around which most real-time chat systems are architected, providing a bi-directional communication channel between a client and a server.
