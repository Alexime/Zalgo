const Discord = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();
const {prefix,token} = require('./config.json');
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	
	if(message.author.bot) return;
	
	//Ping
	if(message.content === `${prefix}fuck`){
		message.channel.send('Fuck You!');
	}
	//Command list
	if(message.content === `${prefix}help`){
		message.channel.send('?z to zalgo');
		message.channel.send('?w to worm');
		message.channel.send('?v to check your vibes. @ someone to chech their vibes');
	}
	//Zalgofy
	if(message.content.startsWith(`${prefix}z`)){
		var args = message.content.substring(1).split(' ');
		if(args.length > 1){
			args = args.splice(1);
			var pzalg = args[0];
			
			if(args.length >= 1){
				for(var i = 1; i < args.length; i++){
					pzalg+= (' '+ args[i]);
				}
			}
			message.channel.send(pzalg,{tts:true}).then(sentMessage => {
				sentMessage.delete(2);
			});
			message.channel.send(Zalgofy(pzalg));
		}
	}
	//Wormify
	if(message.content.startsWith(`${prefix}w`)){
		var args = message.content.substring(1).split(' ');
			if(args.length > 1){
			args = args.splice(1);
			var pzalg = args[0];
			if(args.length >= 1){
				for(var i = 1; i < args.length; i++){
					pzalg+= (' '+ args[i]);
				}
			}
			message.channel.send(pzalg,{tts:true}).then(sentMessage => {
				sentMessage.delete(2);
			});
			message.channel.send(Wormify(pzalg));
		}
	}
	//Vibe Check
	if(message.content.startsWith(`${prefix}v`)){
		var args = message.content.substring(3);
		var chance = Math.round(Math.random()+1);
		if(args.length > 1){
			if(!args.startsWith(`<@`)){
				args = args.toUpperCase();
				if(chance != 1){
					args = Zalgofy(args);
				}
			}
			if(chance == 1){
				message.channel.send(args  +' HAS SUCCEEDED THE VIBE CHECK. HAVE A GOOD DAY',{tts:true});
			}
			else{
				message.channel.send(args + Zalgofy(' HAS FAILED THE VIBE CHECK'),{tts:true, files:["zalgo.jpg"]});
			}
		}
		else{
			if(chance == 1){
				message.channel.send("<@" + message.author.id + ">"+' HAS SUCCEEDED THE VIBE CHECK. HAVE A GOOD DAY',{tts:true});
			}
			else{
				message.channel.send("<@" + message.author.id + ">"+ Zalgofy(' HAS FAILED THE VIBE CHECK'),{tts:true, files:["zalgo.jpg"]});
			}
		}
	}
	//Delete the Evidence	
	if(message.content.startsWith(`${prefix}`)){
		message.delete(2);
	}
	
	if(message.content.startsWith(`${prefix}p`)){
			var speak = message.content;
			speak = speak.substr(3);
			message.channel.send(speak);
	}
	function Zalgofy(pzalg){
		var uni =  ['\u0300',
					'\u0301','\u0302','\u0303','\u0304','\u0305','\u0306','\u0307','\u0308','\u0309','\u0310',
					'\u0311','\u0312','\u0313','\u0314','\u0315','\u0316','\u0317','\u0318','\u0319','\u0320',
					'\u0321','\u0322','\u0323','\u0324','\u0325','\u0326','\u0327','\u0328','\u0329','\u0330',
					'\u0331','\u0332','\u0333','\u0334','\u0335','\u0336','\u0337','\u0338','\u0339','\u0340',
					'\u0341','\u0342','\u0343','\u0344','\u0345','\u0346','\u0347','\u0348','\u0349','\u0350',
					'\u0351','\u0352','\u0353','\u0354','\u0355','\u0356','\u0357','\u0358','\u0359','\u0360',
					'\u036A','\u036B','\u036C','\u036D','\u036E','\u036F'];
		//Splitting into Parts
		var text = pzalg.split('');
		//Fun Bit
		for(var i = 0; i< text.length; i++){
			var dcn = Math.round(Math.random()*25) + 5;
			for(var j = 0; j < dcn; j++){
				var dc = Math.round(Math.random() * 66);
				text[i]+=uni[dc];
			}
		}
		//Putting back together
		pzalg='';
		for(var i=0; i < text.length;i++){
			pzalg+=text[i];
		}
		return pzalg;
	}
	
	function Wormify(pzalg){
		var text = pzalg.split('');
		
		for(var i = 0; i< text.length; i++){
			text[i]+='\u0303'+'\u02F7'+'\u0334'+'\u0360';
		}
		//Putting back together
		pzalg='';
		for(var i=0; i < text.length;i++){
			pzalg+=text[i];
		}
		return pzalg;
	}
});

client.login(token);