const {
  Client,
  Message,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
} = require("discord.js");

module.exports = {
  name: "eval",
  description: "Evaluate code.",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (message.author.id !== "536944480469909569") return;
    const code = args.join(" ");
    if (!code)
      message.reply(
        "How am I supposed to evaluate nothing? PROVIDE CODE BOBA"
      );

    try {
      let evaled = eval(code);
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId("button-danger-eval")
          .setEmoji("❎")
          .setStyle("DANGER")
      );

      const embed = new MessageEmbed()
        .setAuthor("Eval", message.author.avatarURL())
        .addField("Input", `\`\`\`${code}\`\`\``)
        .addField("Output", `\`\`\`${evaled}\`\`\``)
        .setColor("RANDOM");

      message.reply({ embeds: [embed], components: [row] });
    } catch (err) {
      message.reply({ content: `\`ERROR\` \`\`\`xl\n${err}\n\`\`\`` });
    }

    client.on("interactionCreate", (interaction) => {
      if (!interaction.isButton()) return;
      if (interaction.user.id !== "536944480469909569") return;
      if (interaction.customId === "button-danger-eval")
        interaction.message.delete();
    });
  },
};
