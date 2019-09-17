const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require("connect-session-knex")(session);

const UserRouter = require('./users/user-routes.js');
const knexConnection = require('./data/db-config.js');
const server = express();
const sessionConfig = {
    name: 'potato',
    secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe',
    cookie: {
      maxAge: 1000 * 60 * 60, //in milliseconds
      secure: false, //true means only send cookio over https
      httpOnly: true, // true means JS has no access to the cookie
  
    },
    resave: false,
    saveUninitialized: true, //GGDPr compliance
    store: new KnexSessionStore({
      knex: knexConnection,
      tablename: 'knexsessions',
      sidfieldname: 'sessionid',
      createtable: true,
      clearInterval: 1000 * 60 * 30,
    }),
  }

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/", UserRouter);

module.exports = server;