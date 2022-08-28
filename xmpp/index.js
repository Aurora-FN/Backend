const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.xmppPort || 80 });

wss.on("error", (err) => {
    console.log("🚫 Xmpp");
})

wss.on("connection", ws => {
    console.log("✅ Xmpp")
    ws.on("close", async (xmpp) => {
        console.log("🚫 Xmpp Connection Disconected")
    })
})