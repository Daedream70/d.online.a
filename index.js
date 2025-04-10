const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log("Bot is ready!");

  bot.editStatus("online", {
    name: "Dreamcore",
    type: 1, // 1 = Streaming
    url: "https://twitch.tv/",
    application_id: "1346727666681643019",
    assets: {
      large_image: "https://www.icegif.com/dreamcore-16/"
    }
  });
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
