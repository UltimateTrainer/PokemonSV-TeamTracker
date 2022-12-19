window.onload = init;
var Pokemon1="";
var Pokemon2="";
var Pokemon3="";
var Pokemon4="";
var Pokemon5="";
var Pokemon6="";

var startup = true; //flag for if looping functions are on their first pass or not
function init()
{
	var pokemon1 = $('#Poke1');
	var pokemon2 = $('#Poke2');
	var pokemon3 = $('#Poke3');
	var pokemon4 = $('#Poke4');
	var pokemon5 = $('#Poke5');
	var pokemon6 = $('#Poke6');
	
	var poke1Img = $('#Pokeimg1');
	var poke2Img = $('#Pokeimg2');
	var poke3Img = $('#Pokeimg3');
	var poke4Img = $('#Pokeimg4');
	var poke5Img = $('#Pokeimg5');
	var poke6Img = $('#Pokeimg6');
	
	setInterval(function(){picture();},50);
	function pokePicFunc(poke,pokeimg)
	{
		console.log(poke.text());
		if(poke.text()==""){
			pokeimg.css('opacity', 0);
			pokeimg.attr('src','img/empty.png');
		}
		else
		{
			TweenMax.to(pokeimg,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
			pokeimg.attr('src','img/Paldea/'+poke.text()+'.png');
				
			}});
			TweenMax.to(pokeimg,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.5});
		}
	}
	
	function picture()
	{
		if(pokemon1.text()!=Pokemon1)
		{
			pokePicFunc(pokemon1,poke1Img);	
			Pokemon1=pokemon1.text();
		}
		if(pokemon2.text()!=Pokemon2)
		{
			pokePicFunc(pokemon2,poke2Img);	
			Pokemon2=pokemon2.text();
		}
		if(pokemon3.text()!=Pokemon3)
		{
			pokePicFunc(pokemon3,poke3Img);	
			Pokemon3=pokemon3.text();
		}
		if(pokemon4.text()!=Pokemon4)
		{
			pokePicFunc(pokemon4,poke4Img);	
			Pokemon4=pokemon4.text();
		}
		if(pokemon5.text()!=Pokemon5)
		{
			pokePicFunc(pokemon5,poke5Img);	
			Pokemon5=pokemon5.text();
		}
		if(pokemon6.text()!=Pokemon6)
		{
			pokePicFunc(pokemon6,poke6Img);	
			Pokemon6=pokemon6.text();
		}
	}
	setTimeout(picture, 10000);
}