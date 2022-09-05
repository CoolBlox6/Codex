const {MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed} = require("discord.js")

const config = require("../../botconfig/main") 
module.exports = {
name: "help",
aliases: ['h', 'commands'],

run: async (client, message, args) => {
const row = new MessageActionRow() 
  .addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')

					.addOptions([
            {
							label: 'Main Menu',
							description: 'Shows the main menu',
              emoji: "954553865091559474",
							value: '0',
						},
						{
							label: 'Config Commands',
							description: 'Shows all the config commands',
              emoji: "947942292151476254",
							value: '1',
						},

				
            {
							label: 'Economy Commands',
							description: 'Shows all the economy commands',
              emoji: "937596941045485579",
							value: '2',
						},


{
							label: 'Fun Commands',
							description: 'Shows all the fun commands',
  emoji: "946472134832697394",
							value: '3',
						},
            {
							label: 'Games Commands',
							description: 'Shows all the game commands',
              emoji: "943159625207906314",
							value: '4',
						},


{
							label: 'Information Commands',
							description: 'Shows all the information commands',
  emoji: "952823815036084264",
							value: '5',
						},
{
							label: 'Moderation Commands',
							description: 'Shows all the moderation commands',
  emoji: "937596933835456542",
							value: '6',
						},
            {
							label: 'Utility Commands',
							description: 'Shows all the utility commands',
              emoji: "947577056860962927",
							value: '7',
						},
					]),
			);
const row2 = new MessageActionRow() 
  .addComponents(
    new MessageButton()
      .setLabel("Invite me")
      
      .setStyle("LINK") 
.setEmoji("")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=936541276529111040&permissions=8&scope=bot%20applications.commands"),
      new MessageButton()
      .setLabel("Support Server")
      
      .setStyle("LINK") 
.setEmoji("")
      .setURL("https://dsc.gg/teamcrypts"),
      //new MessageButton()
      //.setLabel("Vote me")
      
      //.setStyle("LINK") 
//.setEmoji("911545788608430111")
      //.setURL("")
  )
  
const embed = new MessageEmbed()
  .setTitle(`Information about __${client.user.username}__`)
  .addFields(
    { name: '<:Featured_Easy:945713085182783519> __**My Features**__', value: 'ㅤ' },
		{ name: '>>> <:Config:947942292151476254> Config Commands\n<a:aeconomy:937596941045485579> Economy Commands\n<a:fun:946472134832697394> Fun Commands\n<a:games:943159625207906314> Games Commands', value: 'ㅤ', inline: true },
		{ name: '>>> <a:info:952823815036084264> Information Commands\n<:moderation1:937596933835456542> Moderation Commands\n<a:util:947577056860962927> Utility Commands', value: 'ㅤ', inline: true },
	)
  .setDescription(`\`\`\`yml\nPls select a category to see more commands.\n\n>  Prefix: ${config.prefix}\n>  Total Commands: ${client.commands.size}\n>  Total Servers: ${client.guilds.cache.size}\n\`\`\``)
  .setImage("https://share.creavite.co/LE9FS2RclWoC8Dcj.gif")
.setColor("#f4c2c2")


  let sendmsg = message.channel.send({embeds: [embed], components: [row,row2]})

let embed1 = new MessageEmbed()
.setColor('#FFFFFF')
.setTitle('**HELP MENU**')
.addFields(
    {name: "**CONFIG COMMANDS**", value: "`set-countingchannel`, `setwelcomechannel`, `setleavechannel`"})
.setImage("https://share.creavite.co/LE9FS2RclWoC8Dcj.gif")
.setColor("#f4c2c2")
.setThumbnail(`https://media.discordapp.net/attachments/946389735415353374/948609697727017000/emoji.png`)
.setFooter('Page 1')

    

    let embed2 = new MessageEmbed()
  
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
  .addFields(
    {name: "**ECONOMY COMMANDS**", value: "`balance`, `deposit`, `withdraw`, `search`, `shop`, `inv`, `pet`, `adopt`, `buy`, `sell`, `use`, `gamble`, `multi`, `beg`, `daily`, `fish`, `hunt`, `rob`, `rich` `postmeme`"})
.setColor("#f4c2c2")
.setThumbnail(`https://media.discordapp.net/attachments/946389735415353374/948609939373445231/emoji.gif`)
.setImage("https://share.creavite.co/LE9FS2RclWoC8Dcj.gif")
.setFooter('Page 2')



    
   let embed3 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
  .addFields(
    {name: "**FUN COMMANDS**", value: "`8ball`, `activity`, `pixelize`, `meme`"})
     .setThumbnail(`https://media.discordapp.net/attachments/946389735415353374/948610067295526932/emoji.gif`)
     .setColor("#f4c2c2")
     .setImage("https://share.creavite.co/LE9FS2RclWoC8Dcj.gif")
    .setFooter('Page 3')
    
    let embed4 = new MessageEmbed()
  
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
      .setThumbnail(`https://media.discordapp.net/attachments/946389735415353374/948610204516384859/emoji.gif`)
  .addFields(
    {name: "**GAMES COMMANDS**", value: "`c4`, `tictactoe`, `wouldyourather`, `roadrace`, `snake`, `football`, `quickclick`, `catchthefish`"})
      .setImage("https://share.creavite.co/LE9FS2RclWoC8Dcj.gif")
      .setColor("#f4c2c2")
.setFooter('Page 4')
   
       let embed5 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
         .setThumbnail(`https://media.discordapp.net/attachments/946389735415353374/948610435538628698/emoji.png`)
  .addFields(
    {name: "**INFO COMMANDS**", value: "`help`, `cmdhelp`, `botinfo`, `ping`, `invite`, `embed`"})
         .setImage("https://share.creavite.co/LE9FS2RclWoC8Dcj.gif")
         .setColor("#f4c2c2")
    .setFooter('Page 5')
    
       let embed6 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
         .setThumbnail(`https://media.discordapp.net/attachments/946389735415353374/948610575775199302/emoji.png`)
  .addFields(
    {name: "**MOD COMMANDS**", value: "`ban`, `addroleall`, `removeroleall`, `softban`, `purge`, `mute`, `kick`, `tempmute`, `nuke` `stealemoji`"})
    .setFooter('Page 6')
 .setImage("https://share.creavite.co/LE9FS2RclWoC8Dcj.gif")
  .setColor("#f4c2c2")
       let embed7 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
         .setThumbnail(`https://media.discordapp.net/attachments/946389735415353374/948610715214831636/emoji.gif`)
.addFields({name: "**UTILITY COMMANDS**", value: "`addtag`, `edittag`, `removetag`, `afk`, `rolelist`, `snipe`, `timer`, `calculator`, `avatar`, `serverinfo`, `ss`, `dump`"})     .setFooter('Page 7')
      .setImage("https://share.creavite.co/LE9FS2RclWoC8Dcj.gif")
         .setColor("#f4c2c2")
  
const filter = i => i.user.id===message.author.id;
    const collector = message.channel.createMessageComponentCollector({
    filter,
      time: 40000,
    componentType: "SELECT_MENU"
 });
       

collector.on("collect", async (collected) =>{
const value = collected.values[0]
if(value === "0" ){
collected.update({embeds: [embed], components: [row,row2]})
}
if(value === "1" ){
collected.update({embeds: [embed1], components: [row,row2]})
  }
  if(value === "2" ){
collected.update({embeds: [embed2],components: [row,row2]})
  }
if(value === "3"){
collected.update({embeds: [embed3],components: [row,row2]})
}
if(value === "4" ){
collected.update({embeds: [embed4],components: [row,row2]})
}
if(value === "5" ){
collected.update({embeds: [embed5],components: [row,row2]})
}
if(value === "6"){
collected.update({embeds: [embed6],components: [row,row2]})
}
if(value === "7"){
collected.update({embeds: [embed7],components: [row,row2]})
}
  
  
 })
  
  
}
  }