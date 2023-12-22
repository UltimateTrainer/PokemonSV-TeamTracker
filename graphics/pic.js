window.onload = init;
var Pokemon1="";
var Pokemon2="";
var Pokemon3="";
var Pokemon4="";
var Pokemon5="";
var Pokemon6="";

var Item1="";
var Item2="";
var Item3="";
var Item4="";
var Item5="";
var Item6="";


var startup = true; //flag for if looping functions are on their first pass or not
function init()
{
	$('#Pokeimg1').attr('src','img/empty.png');
	$('#Pokeimg2').attr('src','img/empty.png');
	$('#Pokeimg3').attr('src','img/empty.png');
	$('#Pokeimg4').attr('src','img/empty.png');
	$('#Pokeimg5').attr('src','img/empty.png');
	$('#Pokeimg6').attr('src','img/empty.png');
	
	var pokemon1 = $('#Poke1');
	var pokemon2 = $('#Poke2');
	var pokemon3 = $('#Poke3');
	var pokemon4 = $('#Poke4');
	var pokemon5 = $('#Poke5');
	var pokemon6 = $('#Poke6');
	
	var item1 = $('#ItemName1');
	var item2 = $('#ItemName2');
	var item3 = $('#ItemName3');
	var item4 = $('#ItemName4');
	var item5 = $('#ItemName5');
	var item6 = $('#ItemName6');
	
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
	
	var item1Img = $('#Itemimg1');
	var item2Img = $('#Itemimg2');
	var item3Img = $('#Itemimg3');
	var item4Img = $('#Itemimg4');
	var item5Img = $('#Itemimg5');
	var item6Img = $('#Itemimg6');
	
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
		//console.log(poke.text())
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
	
	function itemPicFunc(item,itemimg)
	{
		if(item.text()==""){
			itemimg.css('opacity', 0);
			itemimg.attr('src','img/empty.png');
		}
		else
		{
			TweenMax.to(itemimg,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
			itemimg.attr('src','img/Items/'+item.text()+'.png');
				
			}});
			TweenMax.to(itemimg,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.75});
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
		if(item1.text()!=Item1)
		{
			itemPicFunc(item1,item1Img);	
			Item1=item1.text();
		}
		if(item2.text()!=Item2)
		{
			itemPicFunc(item2,item2Img);	
			Item2=item2.text();
		}
		if(item3.text()!=Item3)
		{
			itemPicFunc(item3,item3Img);	
			Item3=item1.text();
		}
		if(item4.text()!=Item4)
		{
			itemPicFunc(item4,item4Img);	
			Item4=item4.text();
		}
		if(item5.text()!=Item5)
		{
			itemPicFunc(item5,item5Img);	
			Item5=item5.text();
		}
		if(item6.text()!=Item6)
		{
			itemPicFunc(item6,item6Img);	
			Item6=item6.text();
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