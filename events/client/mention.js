
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js") 
const config = require("../../botconfig/main") 
const client = require("../../index") 
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;


  // mentioned bot
  
   const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {

    let embed = new MessageEmbed() ///chck discordb= dm
        .setTitle(`${client.user.username} is Here!`)
        .setDescription(`Hey **${message.author.username},** I was made by <@743317832434974811> 
        Bot Prefix: \`${config.prefix}\` 
Forgot My Prefix? Dw you can always mention me to check my prefix
        Invite Link: [Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)
        <a:info:952823815036084264> Still need help? [Click Here](https://discord.gg/xDAhAPSvMX) to join server
        `)
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#006732")
        .setFooter(`Thanks for using me`)
    const row2 = new MessageActionRow() 
  .addComponents(
    new MessageButton()
      .setLabel("Invite me")
      
      .setStyle("LINK") 
.setEmoji("909758706290417714")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=936541276529111040&permissions=8&scope=bot%20applications.commands"),
      new MessageButton()
      .setLabel("Support Server")
      
      .setStyle("LINK") 
.setEmoji("911535908518527018")
      .setURL("https://discord.gg/xDAhAPSvMX"),
      //new MessageButton()
      //.setLabel("Vote me")
      
      //.setStyle("LINK") 
//.setEmoji("943159544513708032")
      //.setURL("https://top.gg/bot/903922960354672671/vote")
  )
      message.channel.send({embeds: [embed], components: [row2]})
    
      }

      })
