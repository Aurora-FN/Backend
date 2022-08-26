const express = require("express")
const mongoose = require("mongoose")
const fs = require("fs")
const app = express();

const PORT = process.env.PORT || 1234

mongoose.connect(`mongodb://uu4u3l4dltg3snxuhl1j:ymNww20Vkp9bSBajQyLq@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bnri8fck5vzfyrf?replicaSet=rs0`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=> {
    console.log("✅ mongoose")
}).catch((err) => {
    console.log(`🚫 mongoose Err: ${err}`)
})

app.listen(PORT, () => console.log(`Server is online with port: ${PORT}`))

fs.readdir(`./files`, (err, folder) => {
    folder.filter(function(file) {
        if(!file.includes(".js")) {
            console.log(`🚫 ${file} file Needs to end with .js`)
        }else{
            try{
                app.use(require(`./files/${file}`))
               // require("./files/" + file)(app, fs)
                console.log(`✅ ${file}`)
            }catch (err) {
                console.log(`🚫 ${file} Err: ${err}`)
            }
        }
    })
})


