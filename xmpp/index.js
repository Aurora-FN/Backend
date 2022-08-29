'use strict';

const express = require('express')
const app = express()
const { Server } = require('ws');
const http = require('http')
const WSServerPort = process.env.PORT || 214;

var server = http.createServer(app);
server.listen(WSServerPort);

console.log('Help;(', WSServerPort);
const wss = new Server({server: server});
global.Clients = [];

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
  });

wss.on("error", (err) => {
    console.log("🚫 Xmpp");
    console.log(err)
})

setInterval(() => {
    wss.clients.forEach((client) => {
      client.send(new Date().toTimeString());
    });
  }, 1000);