const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs=require('fs');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
var message;

bot.on('ready', () => {
	bot.user.setActivity("codeforces duels"); 
	console.log(`Running ${bot.user.username}!`);
	bot.generateInvite(["ADMINISTRATOR"]).then(link => {
		console.log(link);
	})
});

bot.on('message', async Message => {
	message=Message;
	if(message.author.username==bot.user.username)
		return;
	check(message.content);
});

bot.login(token);



function text(a,temp)
{	
	a=''+a;
	message.reply(a);
	return a; 
}
	
/*input.form.submit(function(e){
	e.preventDefault();
	input._accept();
	pat = input.return text;
	for(var i in messages)
		messages[i]._move(messages[i].x,messages[i].y-60);
	messages.push( new _text(input.x,input.y-60,pat,"black","lime") );
	check();
});*/
	

function check(pat)
{				
				var times = 0;	
				var hask = 0;
				for(var k = 0; k < pat.length; k++)
				{	
				
					if(pat[k] + pat[k+1] + pat[k+2] + pat[k+3] =="meme")
					{
						const https = require('https');
						https.get("https://api.imgflip.com/get_memes", (resp) => {
						  let data = '';

						  // A chunk of data has been recieved.
						  resp.on('data', (chunk) => {
							data += chunk;
						  });

						  // The whole response has been received. Print out the result.
						  resp.on('end', () => {
							var x= JSON.parse(data);
							//console.log(x.data.memes[0].url);
							if(x.success && x.data!=undefined && x.data.memes.length>0)
							{				
								x.data.memes=random_shuffle(x.data.memes);
								text(x.data.memes[0].url);
								console.log(x.data.memes[0].name);
							}
						  });

						}).on("error", (err) => {
						  console.log("Error: " + err.message);
						});
						return 'meme';
						break;
					}
					else if(pat[k] + pat[k+1] + pat[k+2] + pat[k+3] =="nkar")
					{
						var nick="";
						for(var i=4;i<pat.length;i++)
							nick+=pat[i];
						if(nick.length==0)
							nick="DavitMarg";
						console.log(nick);
						const https = require('https');
						https.get("https://codeforces.com/api/user.info?handles=" + nick, (resp) => {
						  let data = '';

						  // A chunk of data has been recieved.
						  resp.on('data', (chunk) => {
							data += chunk;
						  });

						  // The whole response has been received. Print out the result.
						  resp.on('end', () => {
							var x= JSON.parse(data);
							if(x.status=="OK" && x.result!=undefined && x.result.length>0)
							{				
								//message.channel.send("", {files: ["https:" + x.result[0].titlePhoto]});
								text("https:" + x.result[0].titlePhoto);
							}
						  });

						}).on("error", (err) => {
						  console.log("Error: " + err.message);
						});
						return nick;
						break;
					}
					if(pat[k] + pat[k + 1] +  pat[k + 2] + pat[k + 3] == "inch" ) //4
					{
							hask = 1,times = 0;
						return text("inchy inch?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k +6] + pat[k + 7] + pat[k + 8] + pat[k + 9] + pat[k + 10] == "console.log" ) //11
					{
							hask = 1,times = 0;
						var conso ="";
						for(var g = k +11 ; g < pat.length; g++)
						{
							conso = conso + pat[g];
						}
						console.log( conso );
						return text("areci",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k +6] + pat[k + 7] + pat[k + 8] == "hetaqrqir" ) //9
					{
							hask = 1,times = 0;
						return text("hetaqrqir chi",3000);
						break;				
					}				
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k +6] == "aysinqn" ) //7
					{
							hask = 1,times = 0;
						return text("henc tenc",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k +6] == "inch es" ) //7
					{
							hask = 1,times = 0;
						return text("karevor chi",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k +6] == "inch ka" ) //7
					{
							hask = 1,times = 0;
						return text("voch mi ban");
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k +6] == "inchqan" ) //7
					{
							hask = 1,times = 0;
						return text("shat u yerkar");
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k +6] == "rad exi" ) //7
					{
							hask = 1,times = 0;
						return text("paxar!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "kaskac" ) //6
					{
							hask = 1,times = 0;
						return text("lezvit es talis",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "hayvan" ) //6
					{
							hask = 1,times = 0;
						return text("vat es aper?");
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "reload" ) //6
					{
							hask = 1,times = 0;
						location.reload();
						break;				
					}
					else if(pat[k] + pat[k + 1] +  pat[k + 2] == "ban" ) //3
					{
							hask = 1,times = 0;
						return text("inch ban?",3000);
						break;				
					}
						
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "karas" ) //5
					{
						hask = 1,times = 0;
						return text("yerevi",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] +  pat[k + 2] + pat[k + 3] == "urax" ) //4
					{
							hask = 1,times = 0;
						return text("haaa",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] +  pat[k + 2] + pat[k + 3] == "tesa" ) //4
					{
							hask = 1,times = 0;
						return text("apres",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] +  pat[k + 2] + pat[k + 3] == "stop" ) //4
					{
							hask = 1,times = 0;
						return text("chem kara",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "hastat" || pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "100%" || pat[k] + pat[k + 1] + pat[k + 2] == "ha?" ) //6
					{
							hask = 1,times = 0;
						return text("ha!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "hambal") //6
					{
							hask = 1,times = 0;
						//"red");
						return text("hambaly du es",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "ktas" ) //4
					{
							hask = 1,times = 0;
						//"purple");
						return text("chem ta",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "shat" ) //4
					{
							hask = 1,times = 0;
						//"blue");
						return text("che qich!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "hesa" ) //4
					{
							hask = 1,times = 0;
						//"blue");
						return text("hesa yerb?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k + 6] + pat[k + 7] == "lav ches" ) //6
					{
							hask = 1,times = 0;
						//"red");
						return text("du lav ches!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "gitei" || pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "gitem" ) //5
					{
							hask = 1,times = 0;
						return text("chgiteir",3000);
						break;				
					}	
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "hajox" ) //5
					{
							hask = 1,times = 0;
						return text("ctesutyun",3000);
						break;				
					}	
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "chisht" ) //6
					{
							hask = 1,times = 0;
						return text("ctesutyun",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "sxal" ) //4
					{
							hask = 1,times = 0;
						return text("sxal chka",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "unes" ) //4
					{
							hask = 1,times = 0;
						return text("chunem",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] == "ha"  || pat[k] + pat[k + 1] + pat[k + 2] == "ayo" ) //2 //3
					{
						hask = 1,times = 0;
						return text("vonc te " + pat + "?" ,3000);
						break;				
					}
					else if( pat[k] + pat[k + 1] + pat[k + 2] == "im" && pat[pat.length - 1] == "?") //2
					{
						hask = 1,times = 0;
						return text("ha ba" ,3000);
						break;				
					}
					else if( pat[k] + pat[k + 1] + pat[k + 2] == "qo" && pat[pat.length - 1] == "?") //2
					{
						hask = 1,times = 0;
						return text("ha" ,3000);
						break;				
					}
					else if( pat[k] + pat[k + 1]  == "du" && pat[pat.length - 1] == "?" ) //2
					{
						hask = 1,times = 0;
						return text("yerevi" ,3000);
						break;				
					}
					else if( pat[k] + pat[k + 1] + pat[k + 2] == "dav") //3
					{
						hask = 1,times = 0;
						return text("Dav-Davit-Davo" ,3000);
						break;				
					}
					else if( pat[k] + pat[k + 1] + pat[k + 2] == "yes") //3
					{
						hask = 1,times = 0;
						return text("du?" ,3000);
						break;				
					}
					else if( pat[k] + pat[k + 1] + pat[k + 2] == "yes" && pat[pat.length - 1] == "?") //3
					{
						hask = 1,times = 0;
						return text("ha achqis" ,3000);
						break;				
					}
					else if( pat[k] + pat[k + 1] + pat[k + 2] == "im?") //3
					{
						hask = 1,times = 0;
						return text("ha" ,3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] == "im"  ) //2
					{
							hask = 1,times = 0;
						return text("qo?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] == "qo"  ) //2
					{
							hask = 1,times = 0;
						return text("im?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] == "ka" ) //2
					{
							hask = 1,times = 0;
						return text("inch ka?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "tenc" ) //4
					{
							hask = 1,times = 0;
						return text("lav ches?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "arel" ) //4
					{
							hask = 1,times = 0;
						return text("chem arel",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "guyn" ) //4
					{
							hask = 1,times = 0;
						return text("DimGray (	696969 )",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "hech" ) //4
					{
							hask = 1,times = 0;
						return text("du es hech",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "patmi" ) //5
					{
							hask = 1,times = 0;
						return text("inch patmem",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "barev" ) //5
					{
							hask = 1,times = 0;
						return text("bari luys :) ",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "nairi" ) //5
					{
							hask = 1,times = 0;
						return text("nairin davoi .axpern a",4000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "apush" ) //5
					{
							hask = 1,times = 0;
						return text("apushy du es!!!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "anelu" ) //5
					{
							hask = 1,times = 0;
						return text("apres",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "baylus" ) //6
					{
							hask = 1,times = 0;
						return text("lezvit es talis",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "lav es" ||  pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k + 6] == "vonc es")
					{
							hask = 1,times = 0;
						//"orange");
						return text("lav du?",3000);
						break;				
					}
					else if(pat == "i" || pat == "i?" )
					{
							hask = 1,times = 0;
						return text("inchy i?",3000);
						break;				
					}
					else if( pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4]  == "anund"  || pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4]  == "anunt" ) //5
					{
							hask = 1,times = 0;
						return text("Davit-bot-0.2.2",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] == "lav" ) //3
					{
							hask = 1,times = 0;
						return text("hastat lav?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] == "sut" ) //3
					{
							hask = 1,times = 0;
						return text("sut a",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] == ":-)"  || pat[k] + pat[k + 1] + pat[k + 2] == "(-:" ) //3
					{
							hask = 1,times = 0;
						return text("(-;",3000);
						break;				
					}
						else if(pat[k] + pat[k + 1] + pat[k + 2] == "ari" ) //3
					{
							hask = 1,times = 0;
						return text("ekel em",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] == "ara" ) //3
					{
							hask = 1,times = 0;
						return text("aran du es!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "davit" ) //5
					{
							hask = 1,times = 0;
						return text("Davon lav txa a!!!!!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "gitem" ) //5
					{
							hask = 1,times = 0;
						return text("vstah es?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "paxar" ) //5
					{
							hask = 1,times = 0;
						//"red");
						return text("rad exi!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "mersi" || pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "merci") //5
					{
							hask = 1,times = 0;
						//"yellow");
						return text("xndrem",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "qyal" ) //4
					{
							hask = 1,times = 0;
						//"red");
						return text("vonc te qyal!",3000);
						break;				
					}
						
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "lurj" ) //4
					{
							hask = 1,times = 0;
						//"purple");
						return text("che ha",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "normal" ) //6
					{
							hask = 1,times = 0;
						//"orange");
						return text("shat normal?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "dzer" ) //4
					{
							hask = 1,times = 0;
						return text("vot",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "nenc" ) //4
					{
							hask = 1,times = 0;
						return text("nenc vonc?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] == "asa" ) //3
					{
							hask = 1,times = 0;
						return text("inch asem?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] == "mti" ) //3
					{
							hask = 1,times = 0;
						return text("ur mtnem?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "ches" ) //4
					{
							hask = 1,times = 0;
						return text("sut a",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "aper" ) //4
					{
							hask = 1,times = 0;
						return text("aper???",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "jogeir" ) //6
					{
							hask = 1,times = 0;
						return text("lav ches ara!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "chjoga" ) //6
					{
							hask = 1,times = 0;
						return text("jogeir!!!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] == "xi" ) //2
					{
							hask = 1,times = 0;
						return text("tenc",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] == "du"  ) //2
					{
							hask = 1,times = 0;
						return text("yes?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "tufta" || pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "debil" ) //5 //5
					{
							hask = 1,times = 0;
						return text("du es " + pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + "!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "axper" ) //5
					{
							hask = 1,times = 0;
						return text("asa!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] == "che" ) //3
					{
							hask = 1,times = 0;
						return text("inchy che?",3000);
						break;				
					}
						
					else if(pat[k] + pat[k + 1] + pat[k + 2] == "yes" ) //3
					{
							hask = 1,times = 0;
						return text("du?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "bari" ) //4
					{
							hask = 1,times = 0;
						return text("ba urish?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "vat es" ) //6
					{
							hask = 1,times = 0;
						return text("du es vat!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "yerkir" || pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "yerkr") //6
					{
							hask = 1,times = 0;
						return text("hayastan!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "lezvit") //6
					{
							hask = 1,times = 0;
						return text("yes lezu chunem",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "qaxaq" ) //10 
					{	
							hask = 1,times = 0;
						return text("yerevan",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k +6] + pat[k + 7] + pat[k + 8] + pat[k + 9] == "anhaskacox" ) //10 
					{
							hask = 1,times = 0;
						return text("inqt es!",3000);
						break;				
					}
						
					else if(pat[k] + pat[k + 1] + pat[k + 2] == "vat" ) //3
					{
							hask = 1,times = 0;
						return text("shat vat?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] == "bad" ) //3
					{
							hask = 1,times = 0;
						return text("kov",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] == "ba"  ) //2
					{
							hask = 1,times = 0;
						return text("qo gorcy chi!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] == "ov" ) //2
					{
							hask = 1,times = 0;
						return text("yes em",3000);
						break;				
					}
						
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "vonc" || pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] + pat[k +6] == "inchpes") //4 //7
					{
						hask = 1,times = 0;
						return text("tenc",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2]  == "jam" ) //3
					{
						var d = new Date();
						var hask = 0;
						var hour = d.getHours();
						var min = d.getMinutes();
						hask = 1,times = 0;
						var fh = hour + ":" + min;
						return text( fh ,3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2]  == "ams" || pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  == "esor") //3
					{
					
						var d = new Date();
						var hask = 0;
						var month = (Number(d.getMonth()) + 1).toString();
						var year = d.getFullYear() ;
						var day = d.getDate();
						hask = 1,times = 0;
						var fm = day + "/" + month + "/" + year;
						return text( fm ,3000);
						break;				
					}
						
						
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "anasun" ) //6
					{	
							hask = 1,times = 0;
						return text("anasuny du es!");
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "amen" ) //4
					{
							hask = 1,times = 0;
						return text("sax?",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "liqy" ) //4
					{
							hask = 1,times = 0;
						return text("shat liqy?",3000);
						break;				
					}
						
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "himar" ) //5
					{
							hask = 1,times = 0;
						return text("du es himar!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "vstah" ) //5
					{
							hask = 1,times = 0;
						return text("ha!",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] == "ur"  && pat[k+2] == undefined) //2
					{
							hask = 1,times = 0;
						return text("stex",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "cndel" || pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] == "gjvel" ) //5
					{
							hask = 1,times = 0;
						return text("du es " + pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + "!" ,3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3]  + pat[k + 4] + pat[k + 5] == "hambal") //6
					{
							hask = 1,times = 0;
						return text("hambaly du es",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2]  == "gna" ) //3
					{
							hask = 1,times = 0;
						//"orange");
						return text( "chem kara!" ,3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2]  == "hey" ) //3
					{
							hask = 1,times = 0;
						//"orange");
						return text( "hoy" ,3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2]  == "rad" ) //3
					{
							hask = 1,times = 0;
						return text( "du rad exi!" ,3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2]  == "qez" ) //3
					{
							hask = 1,times = 0;
						return text( "indz?" ,3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2]  == "txa" ) //3
					{
							hask = 1,times = 0;
						return text( "lav txa" ,3000);
						break;				
					}
					else if(pat[k] + pat[k + 1]  == "ia" ) //2
					{
							hask = 1,times = 0;
						return text( "inchy ia?" ,3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "yerb" ) //4
					{
							hask = 1,times = 0;
						return text("mot orers",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "kgas" ) //4
					{
							hask = 1,times = 0;
						return text("chem kara",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "utes" ) //4
					{
							hask = 1,times = 0;
						return text("chem uti",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] == "hela" ) //4
					{
							hask = 1,times = 0;
						return text("lav de",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] + pat[k + 4] == "urish" ) //5
					{
							hask = 1,times = 0;
						return text("nuynn a",3000);
						break;				
					}
					else if(pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] + pat[k + 4] == "axjik" || pat[k] + pat[k + 1] + pat[k + 2] + pat[k + 3] + pat[k + 4] + pat[k + 5] == "aghjik" ) //5
					{
							hask = 1,times = 0;
						return text("inch aghjik?",3000);
						break;				
					}
						
						
						
				}
					
					
				if(hask == 0)
					{
						if(pat[pat.length - 1] == "?")
							{
								return text("tufta harc",3000);
								times = 0;
						//		console.log('"' + pat + '":anhaskanali e');
							}	
						else if(pat[pat.length - 1] == "!")
							{
								return text("aysinqn?",3000);
								times = 0;
						//		console.log('"' + pat + '":anhaskanali e');
							}	
						else
							{
								return text(":face_with_monocle:",3000);
								times = 0;
						//		console.log('"' + pat + '":anhaskanali e');
							}
													
					}
}

function random_shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}