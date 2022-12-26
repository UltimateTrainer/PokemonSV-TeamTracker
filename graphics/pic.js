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
	
	var Glow1 = $('#glow1');
	var Glow2 = $('#glow2');
	var Glow3 = $('#glow3');
	var Glow4 = $('#glow4');
	var Glow5 = $('#glow5');
	var Glow6 = $('#glow6');
	var Glow1Checkbox=document.querySelector('#glow1Checkbox');
	var Glow2Checkbox=document.querySelector('#glow2Checkbox');
	var Glow3Checkbox=document.querySelector('#glow3Checkbox');
	var Glow4Checkbox=document.querySelector('#glow4Checkbox');
	var Glow5Checkbox=document.querySelector('#glow5Checkbox');
	var Glow6Checkbox=document.querySelector('#glow6Checkbox');
	
	const GlowReplicant = nodecg.Replicant('glowCheckbox');
	
	var poke1Img = $('#Pokeimg1');
	var poke2Img = $('#Pokeimg2');
	var poke3Img = $('#Pokeimg3');
	var poke4Img = $('#Pokeimg4');
	var poke5Img = $('#Pokeimg5');
	var poke6Img = $('#Pokeimg6');
	
	GlowReplicant.on('change', (newValue, oldValue) => {
		Glow1Checkbox.checked=GlowReplicant.value.glow1;
		Glow2Checkbox.checked=GlowReplicant.value.glow2;
		Glow3Checkbox.checked=GlowReplicant.value.glow3;
		Glow4Checkbox.checked=GlowReplicant.value.glow4;
		Glow5Checkbox.checked=GlowReplicant.value.glow5;
		Glow6Checkbox.checked=GlowReplicant.value.glow6;
	});
	
	setInterval(function(){picture();},50);
	setInterval(function(){glowRefresh();},2600);
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
			TweenMax.to(pokeimg,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.75});
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
	function glowFunc(glow){
		TweenMax.to(glow,1.5,{css:{opacity: .5},ease:Quad.easeOut,delay:1,onComplete:function(){
			TweenMax.to(glow,1,{css:{opacity: 1},ease:Quad.easeOut,delay:0});
				
		}});
	}
	function glowRefresh(){
		if(Glow1Checkbox.checked)
			glowFunc(Glow1);
		else
			TweenMax.to(Glow1,1,{css:{opacity: 0}});
		if(Glow2Checkbox.checked)
			glowFunc(Glow2);
		else
			TweenMax.to(Glow2,1,{css:{opacity: 0}});
		if(Glow3Checkbox.checked)
			glowFunc(Glow3);
		else
			TweenMax.to(Glow3,1,{css:{opacity: 0}});
		if(Glow4Checkbox.checked)
			glowFunc(Glow4);
		else
			TweenMax.to(Glow4,1,{css:{opacity: 0}});
		if(Glow5Checkbox.checked)
			glowFunc(Glow5);
		else
			TweenMax.to(Glow5,1,{css:{opacity: 0}});
		if(Glow6Checkbox.checked)
			glowFunc(Glow6);
		else
			TweenMax.to(Glow6,1,{css:{opacity: 0}});
		
	}
	setTimeout(picture, 1000);
	setTimeout(glowRefresh(),9000);
}