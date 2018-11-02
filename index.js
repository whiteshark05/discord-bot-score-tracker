const fetch = require('node-fetch')
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = require('./auth.json').token
const insults = require('./insults.json').insults
let min=0; 
let max=insults.length;  

//console.log(TOKEN)
bot.on('message', function(message){
 if(message.content === 'Hello' || message.content === 'hello') message.reply('Hello, how are you?');
})

bot.on('message', function(message){
    if(message.content === 'b!insult'){
    let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    message.reply(insults[random].replace('%%', 'You'))
   }});
   
bot.login(TOKEN);