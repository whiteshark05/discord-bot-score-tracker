const fetch = require('node-fetch')
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = require('./exclude/auth.json').token
const insults = require('./insults.json').insults
const announcers = [
    'Daily reset in 2 hours, Guild Event start in 3 hours.',
    'Daily reset in 2 hours, remember to buy your Guild Coin energy!',
    'Daily reset in 2 hours, remember to buy your Guild Coin energy!',
    'Event ends in 1 hour! Last chance to spend your energy!'
]

const config = {
    guildID : '425546690532212767',
    botPlayGroundID: '426603363199614977',
    clanChatID: '446704817533091840'
}


var fs = require('fs');

let min=0; 
let max=insults.length;  
var currentTime = new Date;
let obj = {
    players:[
        {
            name:"",
            timeStamp:""
        }
    ]

}



bot.on('ready', () => {
var countDownDate = new Date("Dec, 2019 07:10:00").getTime();
// Update the count down every 1 second
var i = 0;
var x = setInterval(function() {
    const interval = 5000;
   
    var countDown = countDownDate + interval;
    // Get todays date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    console.log( days + "d " + hours + "h " + minutes + "m " + seconds + "s ")
  
    // If the count down is finished, write some text 
    if (hours % 24 == 2) {
    if(i>3) i=0;
    let msg = bot.guilds.get(config.guildID).roles.find(e => e.name === "Highgarden").toString()
    bot.channels.get(config.clanChatID).send(msg + "  " + announcers[i]);
    i+=1;    
    //bot.channels.get('426603363199614977').send(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");  
    //clearInterval(x);
    }
  }, 1000);   
})

bot.on('message', function(message){
    let dogeEmojiString = message.guild.emojis.filter(e => e.name.includes('doge')).map(e => e.toString()).join(" ")
    let dogeEmojiList = message.guild.emojis.filter(e => e.name.includes('doge')).map(e => e.toString())
    let random =Math.floor(Math.random() * (+max - +min)) + +min; 

    
    if(message.content === 'Hello' || message.content === 'hello') message.reply('Hello, how are you?');



    if(message.content === 'd!time') message.reply(currentTime.toString())


    if(message.content === 'd!insult') {
    let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    message.reply(insults[random].replace(".", "!") + " " + dogeEmojiList[random])} 


    if(message.content.slice(0,message.content.indexOf(" ")) === 'd!insult'){
    let user = message.mentions.users.map(user => user.id);
    //console.log(message.content);
    message.channel.send( '<@' + user + '> ' + insults[random].replace(".", "!") + " " + dogeEmojiList[random] )}



    if (message.content === "d!emo") {
    message.channel.send(dogeEmojiString);}

    if (message.content === "d!emo2") {
    dogeEmojiList.map(i => {message.channel.send(i)});}


    if(message.content === 'd!getscore'){
    fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        obj.obj.table.map(item => {message.reply(item)});
        }}
    )}


    if(message.content === 'd!runes'){
        
        message.channel.send('Runes bonuses', {
            files: [
                "./Runes.jpg"
            ]
        });
    }

    

})



http = require('http')
handle = (req, res) => res.end("hit")

server = http.createServer(handle)

server.listen(process.env.PORT || 5000)



// var obj = {
//     table: []
//  };

// obj.table.push({id: 1, square:2});
// var json = JSON.stringify(obj);
// var fs = require('fs');
// fs.writeFile('myjsonfile.json', json, 'utf8', callback);
// fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//         console.log(err);
//     } else {
//     obj = JSON.parse(data); //now it an object
//     obj.table.push({id: 2, square:3}); //add some data
//     json = JSON.stringify(obj); //convert it back to json
//     fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
// }});

bot.login(TOKEN);