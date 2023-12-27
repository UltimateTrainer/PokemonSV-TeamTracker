window.onload = init;
var Pokemon1="";
var Pokemon2="";
var Pokemon3="";
var Pokemon4="";
var Pokemon5="";
var Pokemon6="";
var Pokemon7="";
var Pokemon8="";
var Pokemon9="";
var Pokemon10="";
var Pokemon11="";
var Pokemon12="";

var Item1="";
var Item2="";
var Item3="";
var Item4="";
var Item5="";
var Item6="";
var Item7="";
var Item8="";
var Item9="";
var Item10="";
var Item11="";
var Item12="";

var ko1=false;
var ko2=false;
var ko3=false;
var ko4=false;
var ko5=false;
var ko6=false;
var ko7=false;
var ko8=false;
var ko9=false;
var ko10=false;
var ko11=false;
var ko12=false;

var startup = true; //flag for if looping functions are on their first pass or not
function init()
{
	$('#Pokeimg1').attr('src','img/empty.png');
	$('#Pokeimg2').attr('src','img/empty.png');
	$('#Pokeimg3').attr('src','img/empty.png');
	$('#Pokeimg4').attr('src','img/empty.png');
	$('#Pokeimg5').attr('src','img/empty.png');
	$('#Pokeimg6').attr('src','img/empty.png');
	$('#Pokeimg7').attr('src','img/empty.png');
	$('#Pokeimg8').attr('src','img/empty.png');
	$('#Pokeimg9').attr('src','img/empty.png');
	$('#Pokeimg10').attr('src','img/empty.png');
	$('#Pokeimg11').attr('src','img/empty.png');
	$('#Pokeimg12').attr('src','img/empty.png');
	
	var pokemon1 = $('#Poke1');
	var pokemon2 = $('#Poke2');
	var pokemon3 = $('#Poke3');
	var pokemon4 = $('#Poke4');
	var pokemon5 = $('#Poke5');
	var pokemon6 = $('#Poke6');
	var pokemon7 = $('#Poke7');
	var pokemon8 = $('#Poke8');
	var pokemon9 = $('#Poke9');
	var pokemon10 = $('#Poke10');
	var pokemon11 = $('#Poke11');
	var pokemon12 = $('#Poke12');
	
	var item1 = $('#ItemName1');
	var item2 = $('#ItemName2');
	var item3 = $('#ItemName3');
	var item4 = $('#ItemName4');
	var item5 = $('#ItemName5');
	var item6 = $('#ItemName6');
	var item7 = $('#ItemName7');
	var item8 = $('#ItemName8');
	var item9 = $('#ItemName9');
	var item10 = $('#ItemName10');
	var item11 = $('#ItemName11');
	var item12 = $('#ItemName12');
	
	var Glow1 = $('#glow1');
	var Glow2 = $('#glow2');
	var Glow3 = $('#glow3');
	var Glow4 = $('#glow4');
	var Glow5 = $('#glow5');
	var Glow6 = $('#glow6');
	var Glow7 = $('#glow7');
	var Glow8 = $('#glow8');
	var Glow9 = $('#glow9');
	var Glow10 = $('#glow10');
	var Glow11 = $('#glow11');
	var Glow12 = $('#glow12');
	var Glow1Checkbox=document.querySelector('#glow1Checkbox');
	var Glow2Checkbox=document.querySelector('#glow2Checkbox');
	var Glow3Checkbox=document.querySelector('#glow3Checkbox');
	var Glow4Checkbox=document.querySelector('#glow4Checkbox');
	var Glow5Checkbox=document.querySelector('#glow5Checkbox');
	var Glow6Checkbox=document.querySelector('#glow6Checkbox');
	var Glow7Checkbox=document.querySelector('#glow7Checkbox');
	var Glow8Checkbox=document.querySelector('#glow8Checkbox');
	var Glow9Checkbox=document.querySelector('#glow9Checkbox');
	var Glow10Checkbox=document.querySelector('#glow10Checkbox');
	var Glow11Checkbox=document.querySelector('#glow11Checkbox');
	var Glow12Checkbox=document.querySelector('#glow12Checkbox');
	
	var KO1 = $('#KO1');
	var KO2 = $('#KO2');
	var KO3 = $('#KO3');
	var KO4 = $('#KO4');
	var KO5 = $('#KO5');
	var KO6 = $('#KO6');
	var KO7 = $('#KO7');
	var KO8 = $('#KO8');
	var KO9 = $('#KO9');
	var KO10 = $('#KO10');
	var KO11 = $('#KO11');
	var KO12 = $('#KO12');
	var KO1Checkbox=document.querySelector('#KO1Checkbox');
	var KO2Checkbox=document.querySelector('#KO2Checkbox');
	var KO3Checkbox=document.querySelector('#KO3Checkbox');
	var KO4Checkbox=document.querySelector('#KO4Checkbox');
	var KO5Checkbox=document.querySelector('#KO5Checkbox');
	var KO6Checkbox=document.querySelector('#KO6Checkbox');
	var KO7Checkbox=document.querySelector('#KO7Checkbox');
	var KO8Checkbox=document.querySelector('#KO8Checkbox');
	var KO9Checkbox=document.querySelector('#KO9Checkbox');
	var KO10Checkbox=document.querySelector('#KO10Checkbox');
	var KO11Checkbox=document.querySelector('#KO11Checkbox');
	var KO12Checkbox=document.querySelector('#KO12Checkbox');
	
	const GlowReplicant = nodecg.Replicant('glowCheckbox');
	const KOReplicant = nodecg.Replicant('KOCheckbox');
	
	var poke1Img = $('#Pokeimg1');
	var poke2Img = $('#Pokeimg2');
	var poke3Img = $('#Pokeimg3');
	var poke4Img = $('#Pokeimg4');
	var poke5Img = $('#Pokeimg5');
	var poke6Img = $('#Pokeimg6');
	var poke7Img = $('#Pokeimg7');
	var poke8Img = $('#Pokeimg8');
	var poke9Img = $('#Pokeimg9');
	var poke10Img = $('#Pokeimg10');
	var poke11Img = $('#Pokeimg11');
	var poke12Img = $('#Pokeimg12');
	
	var item1Img = $('#Itemimg1');
	var item2Img = $('#Itemimg2');
	var item3Img = $('#Itemimg3');
	var item4Img = $('#Itemimg4');
	var item5Img = $('#Itemimg5');
	var item6Img = $('#Itemimg6');
	var item7Img = $('#Itemimg7');
	var item8Img = $('#Itemimg8');
	var item9Img = $('#Itemimg9');
	var item10Img = $('#Itemimg10');
	var item11Img = $('#Itemimg11');
	var item12Img = $('#Itemimg12');
	
	GlowReplicant.on('change', (newValue, oldValue) => {
		Glow1Checkbox.checked=GlowReplicant.value.glow1;
		Glow2Checkbox.checked=GlowReplicant.value.glow2;
		Glow3Checkbox.checked=GlowReplicant.value.glow3;
		Glow4Checkbox.checked=GlowReplicant.value.glow4;
		Glow5Checkbox.checked=GlowReplicant.value.glow5;
		Glow6Checkbox.checked=GlowReplicant.value.glow6;
		Glow7Checkbox.checked=GlowReplicant.value.glow7;
		Glow8Checkbox.checked=GlowReplicant.value.glow8;
		Glow9Checkbox.checked=GlowReplicant.value.glow9;
		Glow10Checkbox.checked=GlowReplicant.value.glow10;
		Glow11Checkbox.checked=GlowReplicant.value.glow11;
		Glow12Checkbox.checked=GlowReplicant.value.glow12;
	});
	
	KOReplicant.on('change', (newValue, oldValue) => {
		KO1Checkbox.checked=KOReplicant.value.KO1;
		KO2Checkbox.checked=KOReplicant.value.KO2;
		KO3Checkbox.checked=KOReplicant.value.KO3;
		KO4Checkbox.checked=KOReplicant.value.KO4;
		KO5Checkbox.checked=KOReplicant.value.KO5;
		KO6Checkbox.checked=KOReplicant.value.KO6;
		KO7Checkbox.checked=KOReplicant.value.KO7;
		KO8Checkbox.checked=KOReplicant.value.KO8;
		KO9Checkbox.checked=KOReplicant.value.KO9;
		KO10Checkbox.checked=KOReplicant.value.KO10;
		KO11Checkbox.checked=KOReplicant.value.KO11;
		KO12Checkbox.checked=KOReplicant.value.KO12;
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
		if(pokemon7.text()!=Pokemon7)
		{
			Pokemon7=pokemon7.text();
			pokePicFunc(pokemon7,poke7Img);
		}
		if(pokemon8.text()!=Pokemon8)
		{
			Pokemon8=pokemon8.text();
			pokePicFunc(pokemon8,poke8Img);
		}
		if(pokemon9.text()!=Pokemon9)
		{
			Pokemon9=pokemon9.text();
			pokePicFunc(pokemon9,poke9Img);
		}
		if(pokemon10.text()!=Pokemon10)
		{
			Pokemon10=pokemon10.text();
			pokePicFunc(pokemon10,poke10Img);
		}
		if(pokemon11.text()!=Pokemon11)
		{
			Pokemon11=pokemon11.text();
			pokePicFunc(pokemon11,poke11Img);
		}
		if(pokemon12.text()!=Pokemon12)
		{
			Pokemon12=pokemon12.text();
			pokePicFunc(pokemon12,poke12Img);
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
		if(item7.text()!=Item7)
		{
			Item7=item7.text();
			itemPicFunc(item7,item7Img);
		}
		if(item8.text()!=Item8)
		{
			Item8=item8.text();
			itemPicFunc(item8,item8Img);
		}
		if(item9.text()!=Item9)
		{
			Item9=item9.text();
			itemPicFunc(item9,item9Img);
		}
		if(item10.text()!=Item10)
		{
			Item10=item10.text();
			itemPicFunc(item10,item10Img);
		}
		if(item11.text()!=Item11)
		{
			Item11=item11.text();
			itemPicFunc(item11,item11Img);
		}
		if(item12.text()!=Item12)
		{
			Item12=item12.text();
			itemPicFunc(item12,item12Img);
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
		if(ko7!=KO7Checkbox.checked)
		{
			ko7=KO7Checkbox.checked;
			KOFunc(ko7,KO7);
		}
		if(ko8!=KO8Checkbox.checked)
		{
			ko8=KO8Checkbox.checked;
			KOFunc(ko8,KO8);
		}
		if(ko9!=KO9Checkbox.checked)
		{
			ko9=KO9Checkbox.checked;
			KOFunc(ko9,KO9);
		}
		if(ko10!=KO10Checkbox.checked)
		{
			ko10=KO10Checkbox.checked;
			KOFunc(ko10,KO10);
		}
		if(ko11!=KO11Checkbox.checked)
		{
			ko11=KO11Checkbox.checked;
			KOFunc(ko11,KO11);
		}
		if(ko12!=KO12Checkbox.checked)
		{
			ko12=KO12Checkbox.checked;
			KOFunc(ko12,KO12);
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
		if(Glow7Checkbox.checked)
			glowFunc(Glow7);
		else
			TweenMax.to(Glow7,1,{css:{opacity: 0}});
		if(Glow8Checkbox.checked)
			glowFunc(Glow8);
		else
			TweenMax.to(Glow8,1,{css:{opacity: 0}});
		if(Glow9Checkbox.checked)
			glowFunc(Glow9);
		else
			TweenMax.to(Glow9,1,{css:{opacity: 0}});
		if(Glow10Checkbox.checked)
			glowFunc(Glow10);
		else
			TweenMax.to(Glow10,1,{css:{opacity: 0}});
		if(Glow11Checkbox.checked)
			glowFunc(Glow11);
		else
			TweenMax.to(Glow11,1,{css:{opacity: 0}});
		if(Glow12Checkbox.checked)
			glowFunc(Glow12);
		else
			TweenMax.to(Glow12,1,{css:{opacity: 0}});
		
	}
	setTimeout(picture, 1000);
	setTimeout(glowRefresh(),9000);
}