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

var ko1=false;
var ko2=false;
var ko3=false;
var ko4=false;
var ko5=false;
var ko6=false;

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
	
	var KO1 = $('#KO1');
	var KO2 = $('#KO2');
	var KO3 = $('#KO3');
	var KO4 = $('#KO4');
	var KO5 = $('#KO5');
	var KO6 = $('#KO6');
	var KO1Checkbox=document.querySelector('#KO1Checkbox');
	var KO2Checkbox=document.querySelector('#KO2Checkbox');
	var KO3Checkbox=document.querySelector('#KO3Checkbox');
	var KO4Checkbox=document.querySelector('#KO4Checkbox');
	var KO5Checkbox=document.querySelector('#KO5Checkbox');
	var KO6Checkbox=document.querySelector('#KO6Checkbox');
	
	const GlowReplicant = nodecg.Replicant('glowCheckbox');
	const KOReplicant = nodecg.Replicant('KOCheckbox');
	
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
	
	KOReplicant.on('change', (newValue, oldValue) => {
		KO1Checkbox.checked=KOReplicant.value.KO1;
		KO2Checkbox.checked=KOReplicant.value.KO2;
		KO3Checkbox.checked=KOReplicant.value.KO3;
		KO4Checkbox.checked=KOReplicant.value.KO4;
		KO5Checkbox.checked=KOReplicant.value.KO5;
		KO6Checkbox.checked=KOReplicant.value.KO6;
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
		if(item.text()=="")
		{
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
			Pokemon1=pokemon1.text();
			pokePicFunc(pokemon1,poke1Img);	
		}
		if(pokemon2.text()!=Pokemon2)
		{
			Pokemon2=pokemon2.text();
			pokePicFunc(pokemon2,poke2Img);
		}
		if(pokemon3.text()!=Pokemon3)
		{
			Pokemon3=pokemon3.text();
			pokePicFunc(pokemon3,poke3Img);
		}
		if(pokemon4.text()!=Pokemon4)
		{
			Pokemon4=pokemon4.text();
			pokePicFunc(pokemon4,poke4Img);
		}
		if(pokemon5.text()!=Pokemon5)
		{
			Pokemon5=pokemon5.text();
			pokePicFunc(pokemon5,poke5Img);
		}
		if(pokemon6.text()!=Pokemon6)
		{
			Pokemon6=pokemon6.text();
			pokePicFunc(pokemon6,poke6Img);
		}
		if(item1.text()!=Item1)
		{
			Item1=item1.text();
			itemPicFunc(item1,item1Img);
		}
		if(item2.text()!=Item2)
		{
			Item2=item2.text();
			itemPicFunc(item2,item2Img);
		}
		if(item3.text()!=Item3)
		{
			Item3=item3.text();
			itemPicFunc(item3,item3Img);	
		}
		if(item4.text()!=Item4)
		{
			Item4=item4.text();
			itemPicFunc(item4,item4Img);
		}
		if(item5.text()!=Item5)
		{
			Item5=item5.text();
			itemPicFunc(item5,item5Img);
		}
		if(item6.text()!=Item6)
		{
			Item6=item6.text();
			itemPicFunc(item6,item6Img);
		}
		if(ko1!=KO1Checkbox.checked)
		{
			ko1=KO1Checkbox.checked;
			KOFunc(ko1,KO1);
		}
		if(ko2!=KO2Checkbox.checked)
		{
			ko2=KO2Checkbox.checked;
			KOFunc(ko2,KO2);
		}
		if(ko3!=KO3Checkbox.checked)
		{
			ko3=KO3Checkbox.checked;
			KOFunc(ko3,KO3);
		}
		if(ko4!=KO4Checkbox.checked)
		{
			ko4=KO1Checkbox.checked;
			KOFunc(ko4,KO4);
		}
		if(ko5!=KO5Checkbox.checked)
		{
			ko5=KO5Checkbox.checked;
			KOFunc(ko5,KO5);
		}
		if(ko6!=KO6Checkbox.checked)
		{
			ko6=KO6Checkbox.checked;
			KOFunc(ko6,KO6);
		}
	}
	function glowFunc(glow){
		TweenMax.to(glow,1.5,{css:{opacity: .5},ease:Quad.easeOut,delay:1,onComplete:function(){
			TweenMax.to(glow,1,{css:{opacity: 1},ease:Quad.easeOut,delay:0});
				
		}});
	}
	
	function KOFunc(ko,KO){
		if(ko==false)
		{
			KO.css('opacity', 0);
			KO.attr('src','img/empty.png');
		}
		else
		{
			TweenMax.to(KO,.5,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
				KO.attr('src','img/KO.png');
				
			}});
			TweenMax.to(KO,.5,{css:{opacity: 1},ease:Quad.easeOut,delay:.75});
		}
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