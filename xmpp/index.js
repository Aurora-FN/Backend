const { Server } = require('ws');

const http = require("http");
const webSocketServerPort = +process.env.PORT || 214;

const httpServer = http.createServer();

httpServer.listen(webSocketServerPort,function(){
    console.log("Server is listening on port " + webSocketServerPort);
});

const wss = new Server({ port: webSocketServerPort },() => console.log("✅ Xmpp"));

global.Clients = [];

wss.on("connection", ws => {
    console.log("eh")
    ws.on("close", async (xmpp) => {
        console.log("🚫 Xmpp Connection Disconected")
    })
})

wss.on("error", (err) => {
    console.log("🚫 Xmpp");
    console.log(err)
})
