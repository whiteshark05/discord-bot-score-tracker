const fetch = require('node-fetch')
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = require('./auth.json').token
const insults = require('./insults.json').insults



var fs = require('fs');

let min=0; 
let max=insults.length;  
let currentTime = new Date;
let obj = {
    players:[
        {
            name:"",
            timeStamp:""
        }
    ]
}

bot.on('message', function(message){
    let dogeEmojiString = message.guild.emojis.filter(e => e.name.includes('doge')).map(e => e.toString()).join(" ")
    let dogeEmojiList = message.guild.emojis.filter(e => e.name.includes('doge')).map(e => e.toString())
    let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    

    if(message.content === 'Hello' || message.content === 'hello') message.reply('Hello, how are you?');



    if(message.content === 'd!time') message.reply(currentTime.toString())
    //console.log(message.mentions.users.map(user => user.id));


    if(message.content === 'd!insult') {
    let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    message.reply(insults[random].replace(".", "!") + " " + dogeEmojiList[random])} 


    if(message.content.slice(0,message.content.indexOf(" ")) === 'd!insult'){
    let user = message.mentions.users.map(user => user.id);
    //console.log(message.content);
    message.channel.send( '<@' + user + '> ' + insults[random].replace(".", "!") + " " + dogeEmojiList[random] )}



    if (message.content === "d!emo") {
    //const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.channel.send(dogeEmojiString);}

    if (message.content === "d!emo2") {

        //const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    dogeEmojiList.map(i => {message.channel.send(i)});}


    if(message.content === 'd!getscore'){
    fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        //console.log(obj);
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