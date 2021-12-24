const DiscordRPC = require('discord-rpc'); 
const client = new DiscordRPC.Client({ transport: 'ipc' }); 
require('dotenv').config();

(async () => {
    client.on('ready', async () => { 
        await client.setActivity({ 
            buttons: 
            [
                { label: "Discord", url: "https://discord.gg/mn6PKeH8da" }, 
                { label: "Website", url: "https://superserve.me/" }
            ],
            state: "Starting at €1/mo!",
            details: "An affordable server host!",
            largeImageKey: "large",
            largeImageText: "SuperServe is the best!",
            smallImageKey: "small",
            smallImageText: "Powerfull servers only!"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: '919342895704723537' }).catch(console.error); // Logging into our application.
})();