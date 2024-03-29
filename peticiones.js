const Discord = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "ejecutar",
    description: "ejecutar",

    run: async (client, interaction) => {
        const url = "";
        const numRequests = 1000;

        try {
            
            const requests = Array.from({ length: numRequests }, () => axios.get(url));

            await Promise.all(requests);
            console.log(`Se enviaron ${numRequests} solicitudes a: ${url}`);

            interaction.reply(`Se enviaron ${numRequests} solicitudes a: ${url}`);
        } catch (error) {
            console.error("Error al realizar solicitudes:", error);
            interaction.reply("Ocurrió un error al realizar las solicitudes.");
        }
    }
}
