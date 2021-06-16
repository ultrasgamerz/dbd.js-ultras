const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "ODE3MDU3NTg5NTM1NTcxOTk4.YED-LQ.jAc1qh_nxbBqeCP5N3yvmTu28YQ", //Discord Bot Token
prefix: ";" //Customizable
})
bot.onMessage() //Allows to run Commands

bot.command({
name: "ping", 
code: `:ping_pong:|Pong! \`$ping\`ms` //Ex: Pong! 45
})




//repost becoz too much people asking about this + error error error and error

bot.command({
name: "waifu",
  aliases: ['w'],
code: `$title[Random Waifu image]
$image[https://www.thiswaifudoesnotexist.net/example-$random[1;10000].jpg]
$color[RANDOM]`
})

bot.command({
name: "serverinfo",
aliases: ['si'],
code: `$addfield[👥 Members ($membersCount);ㅤ]
$color[BLUE]
$addfield[📆 Server Created;$guild[$guildID;created] ( \`$guild[$guildID;timestamp]\` )]
$addfield[💬 Channel Count ($channelCount[text;voice]);
 📝 Text: $channelCount[text]
🗣️ Voice: $channelCount[voice]]
Verification Level: $serverVerificationLevel
$addfield[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;brazil;🇧🇷];europe;🇪🇺];hong kong;🇨🇳];eua;🇺🇸];india;🇮🇳];japan;🇯🇵] Server Region; $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;brazil;Brazil];europe;Europe];hong kong;Hong Kong];eua;Eua];india;India];japan;Japan]]
$addfield[👑 Server Owner;\`$userTag[$ownerID]\` ($ownerID)]
$addfield[💻 Server ID;$guildID]
$cooldown[5m;Please wait **%time%**]
$title[$serverName]
<@$authorID>
$thumbnail[$serverIcon]`
})

bot.command({

 name: "clock", 
aliases: ['c'],
code:`
$editIn[1s;
 $addReactions[🕰]
 $description[$serverName clock]
$addField[Clock;$hourh $minutem $seconds $timezone[America/New_York]]
 $footer[$day $month] $useChannel[$findChannel[Clock]]
$cooldown[5m;Please wait **%time%**]
]`

})

bot.loopCommand({

channel:"829949757669507097",

code: `$editMessage[829964367792963634;{title:$servername's Clock}
{description:America/New York#COLON# $hour#COLON#$minute#COLON#$seconds#COLON#$month_$day $addreactions[🕰]$timezone[America/New_York]}
{color:RANDOM};829949757669507097]`,

executeOnStartup: true,

every: 1000

})

bot.command({
name: "dm", 
code: `
$usertag
$dm bro anda gay` 
})

bot.command({
 
 name: "giverole",
  aliases:"gr",
 code: `
$giveRole[$mentioned[1];$mentionedRoles[1]]
I've assigned **$roleName[$mentionedRoles[1]]** to **$username[$mentioned[1]]**
$onlyIf[$message[1]!=;Usage: **prefixgiverole @user @role**]
$onlyIf[$message[2]!=;Usage: **prefixgiverole @user @role**]
$suppressErrors
$onlyBotPerms[manageserver;**❌ I don't have enough perms to execute this command. Permissions missing:** \`manage_server\`**]
$onlyPerms[manageserver;**❌ To use this you require the \`manage_server\` permission**]`
})


bot.command({
name: "warn",
code: `
$color[RANDOM]
$title[Warned $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has warned **$username[$mentioned[1;yes]]** for \`$noMentionMessage\`
he now has \`$getUserVar[warn;$findUser[$message]]\` Warnings
]
$setUserVar[reason;$getUserVar[reason;$mentioned[1]]/**$date+:$hour:$minute:$second**+> $noMentionMessage+;$mentioned[1]]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$message[2]!=;**⛔ Provide a reason**]
$onlyIf[$mentioned[1]!=;**⛔ Mention the user you want to warn and provide a reason**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't warn yourself**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't warn a bot**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **You don't have** \`MANAGAGE_ROLES\` perms]`
})
 
bot.command({
name: "warnings", 
code: `$color[RANDOM]
$title[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]'s warnings]
$description[
**$username[$mentioned[1;yes]]** has
\`$getUserVar[warn;$findUser[$message]]\` warnings
 
**Warnings User**
<@$mentioned[1;yes]> 
(\`$mentioned[1;yes]\`)]
$onlyIf[$getUserVar[warn;$findUser[$message]]>0;**⛔ The warnings of this user is already at 0**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't warn a bot, so they don't have warnings**]`
})
 
bot.command({
name: "unwarn", 
code: `
$color[RANDOM]
$title[Removed Warn from $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has removed a warn from **$username[$mentioned[1;yes]]** 
he now has \`$getUserVar[warn;$findUser[$message]]\` Warnings]
$setUserVar[warn;$sub[$getUserVar[warn;$findUser[$message]];1];$findUser[$message]]
$removeSplitTextElement[$getTextSplitLength]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$getUserVar[warn;$findUser[$message]]>0;**⛔ The Warnings of this User is already at 0**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't unwarn yourself**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**, Correct usage: \`$getServerVar[prefix]unwarn <@user>\`]
$onlyPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms**]`
})
 
//Variables
warn: "0"
reason: "0"

bot.command({
 name: "who-is" ,
  aliases:"ws", 
 code: `$thumbnail[$userAvatar[$mentioned[1;yes]]]
$author[$userTag;$userAvatar[$authorID]]
$addField[Name;$username[$mentioned[1;yes]];yes]
$addField[Discriminator;#$discriminator[$mentioned[1;yes]];yes]
$addField[Full name;$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]];yes]
$addField[Create date;$creationDate[$mentioned[1;yes]];yes]
$addField[Platform;$replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;None];web;🌐 Web];mobile;📱 Phone];desktop;🖥️ PC]]
$addField[Status;$replaceText[$replaceText[$replaceText[$replaceText[$status[$findMember[$message]];offline;⚫ Offline];online;🟢 Online];dnd;🔴 DND];idle;🟡 Idle]]
$addField[Highest role;<@&$highestRole[$mentioned[1;yes]]>;yes]
$footer[Information from $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$color[$getRoleColor[$highestRole[$clientID]]]
$onlyIf[$mentioned[1]!=;You have to mention someone]
$addTimestamp`
})

bot.command({
name:"antiraid-on",
code: `$title[ANTI RAID]
$description[ON]
$footer[]
 $color[GREEN]
`})

bot.command({
name:"antiraid-off",
code: `$title[ANTI RAID]
$description[OFF]
$footer[]
 $color[RED]
`})

bot.command({
name: "userAvatar <user>",
  aliases:"ua",
code: `$image[$userAvatar]`
})

bot.command({
name: "status",
code: `Your Status: $status`
})


bot.command({
name: "setprefix",
aliases: ['changeprefix', 'prefix'],
code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[**Done, my new prefix is** \`$message\`]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;$customEmoji[Rufy] **You dont have** \`ADMIN\` **perms**]`
})
 
bot.variables({
    prefix: ";"
})

bot.command({
name:"help",
  aliases: ['h'],
code: `$title[HELP COMMAND]
$color[GREEN]
$description[
=====================
| ALL COMMAND START ";"|
=====================
1.serverinfo(si)
2.pembuat server
3.panjang k**tolku
4.me gay?
5.link server
6.waifu(w)
7.clock(c)
9.level
10.joke
======================
TYPING ;help-2 FOR LOOK MORE COMMAND
]
$footer[$day $month $year] $useChannel[$findChannel[Clock]]
`})

bot.command({
name:"help-2",
code: `$title[HELP-2 COMMAND]
$color[BLUE]
$description[
=====================
| ALL COMMAND START ";"|
=====================
11.meme
12.anime
13.corona
14.level
15.userinfo
16.weather
]
$footer[$day $month $year] $useChannel[$findChannel[Clock]]
`})