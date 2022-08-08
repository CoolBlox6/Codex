const config = require("../../botconfig/main") 

const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js") 
const client = require("../../index") 
client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
 let embed = new MessageEmbed()
 .setColor('BLACK')
 .setTitle('Connected To New Server')
 .setURL('https://discord.gg/xDAhAPSvMX')
 .setDescription(`<a:fun:946472134832697394> Thank You For Inviting Me. My prefix is \`${config.prefix}\`
Run ${config.prefix} help for more info about me!`)
 
 .addFields(
 { name: 'Creator', value: '<@743317832434974811>' }
 )

 .setImage('https://share.creavite.co/SWi90B2Q0M7AuCHA.gif')
 .setTimestamp()
 .setFooter('DoggyBlox', 'https://discord.gg/xDAhAPSvMX');
channel.send({embeds : [embed]});
}) 
