const { Server } = require('ws');
const wss = new Server({ port: 214 },() => console.log("✅ Xmpp"));

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
