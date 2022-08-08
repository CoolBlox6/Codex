const { MessageActionRow, MessageButton , MessageSelectMenu, MessageEmbed} = require("discord.js") 

module.exports = {
  name: "invite",
  run: async(client,message,args) => {

const row = new MessageActionRow() 
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
//.setEmoji("911545788608430111")
      //.setURL("https://top.gg/bot/903922960354672671/vote")
    )

let embed = new MessageEmbed()
    .setTitle(`Invite Me!`)
  .setURL("https://discord.com/api/oauth2/authorize?client_id=948239151394848798&permissions=8&scope=bot%20applications.commands")
    .setDescription(`Invite ${client.user.username} to your server!`)
    .setFooter(client.user.tag, client.user.displayAvatarURL({dynamic:true}))
      .setColor("#f4c2c2")
    .setTimestamp()


    
    message.channel.send({embeds: [embed], components: [row]})
}
}