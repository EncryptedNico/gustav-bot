const Discord = require("discord.js")
require("dotenv").config()

const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

Client.on("ready", () => {
    console.log(`✅ Gustav succesfully logged in as Gustav online as ${Client.user.tag}!`)
})

Client.on("messageCreate", (message) => {
    if (message.content == "Hello Gustav") {
        message.reply("Hey nerd")
    }
})

Client.login(process.env.TOKEN)