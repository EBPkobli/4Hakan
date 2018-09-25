$(function () {
	
	setInterval(topKontrol,100);


});
function topKontrol()
{
	switch(sayac)
	{
		case 1: //ilk sarkaç salla
			$("#ilkSarkac").css("animation","solTop 2s linear");
			$("#ilkSarkac #topEfek").css("animation","anim_vertex 1s linear infinite");
			$("#ilkSarkac #topEfek").css("display","inline-block");

			$("#ikinciTop").css('animation','');
			$("#ikinciSarkac #topEfek").css("animation","");
			$("#ikinciSarkac #topEfek").css("display","");
			
			$("#ucuncuTop").css('animation','');
			$("#dorduncuTop").css('animation','');
			$("#sonSarkac").css('animation','');
		break;
		case 22: //ikinci top parlat
			$("#ilkSarkac").css('animation','');
			$("#ilkSarkac #topEfek").css("animation","");
			$("#ilkSarkac #topEfek").css("display","none");

			$("#ikinciTop").css('animation','parlat 0.3s linear');
			$("#ikinciSarkac #topEfek").css("animation","anim_vertex 1s linear infinite");
			$("#ikinciSarkac #topEfek").css("display","inline-block");

			$("#ucuncuTop").css('animation','');
			$("#dorduncuTop").css('animation','');
			$("#sonSarkac").css('animation','');
		break;
		case 25:  //üçüncü top parlat
			$("#ilkSarkac").css('animation','');

			$("#ikinciTop").css('animation','');
			$("#ikinciSarkac #topEfek").css("animation","");
			$("#ikinciSarkac #topEfek").css("display","");

			$("#ucuncuTop").css('animation','parlat 0.3s linear');
			$("#ucuncuSarkac #topEfek").css("animation","anim_vertex 1s linear infinite");
			$("#ucuncuSarkac #topEfek").css("display","inline-block");

			$("#dorduncuTop").css('animation','');
			$("#sonSarkac").css('animation','');

		break;
		case 26:  //dördüncü top parlat
			$("#ilkSarkac").css('animation','');
			$("#ikinciTop").css('animation','');

			$("#ucuncuTop").css('animation','');
			$("#ucuncuSarkac #topEfek").css("animation","");
			$("#ucuncuSarkac #topEfek").css("display","");


			$("#dorduncuTop").css('animation','parlat 0.3s linear');
			$("#dorduncuSarkac #topEfek").css("animation","anim_vertex 1s linear infinite");
			$("#dorduncuSarkac #topEfek").css("display","inline-block");


			$("#sonSarkac").css('animation','');
		break;

		case 29:  //son sarkaç salla
			$("#ilkSarkac").css('animation','');
			$("#ikinciTop").css('animation','');
			$("#ucuncuTop").css('animation','');

			$("#dorduncuTop").css('animation','');
			$("#dorduncuSarkac #topEfek").css("animation","");
			$("#dorduncuSarkac #topEfek").css("display","");


			$("#sonSarkac #topEfek").css("animation","anim_vertex 1s linear infinite");
			$("#sonSarkac #topEfek").css("display","inline-block");
			$("#sonSarkac").css('animation','sagTop 2s linear');
		break;

		case 49: //dördüncü top geri dönüş
			$("#ilkSarkac").css('animation','');
			$("#ikinciTop").css('animation','');
			$("#ucuncuTop").css('animation','');
			$("#dorduncuTop").css('animation','parlat 0.3s linear');
			$("#dorduncuSarkac #topEfek").css("animation","anim_vertex 1s linear infinite");
			$("#dorduncuSarkac #topEfek").css("display","inline-block");

			$("#sonSarkac #topEfek").css("display","none");
			$("#sonSarkac #topEfek").css("animation","");
			$("#sonSarkac").css('animation','');
		break;
		case 52: //üçüncü top geri dönüş
			$("#ilkSarkac").css('animation','');
			$("#ikinciTop").css('animation','');

			$("#ucuncuTop").css('animation','parlat 0.3s linear');
			$("#ucuncuSarkac #topEfek").css("animation","anim_vertex 1s linear infinite");
			$("#ucuncuSarkac #topEfek").css("display","inline-block");

			$("#dorduncuTop").css('animation','');
			$("#dorduncuSarkac #topEfek").css("animation","");
			$("#dorduncuSarkac #topEfek").css("display","");

			$("#sonSarkac").css('animation','');
		break;
		case 55: //ikinci top geri dönüş
			$("#ilkSarkac").css('animation','');
			$("#ikinciTop").css('animation','parlat 0.3s linear');
			$("#ikinciSarkac #topEfek").css("animation","anim_vertex 1s linear infinite");
			$("#ikinciSarkac #topEfek").css("display","inline-block");

			$("#ucuncuTop").css('animation','');
			$("#ucuncuSarkac #topEfek").css("animation","");
			$("#ucuncuSarkac #topEfek").css("display","");

			$("#dorduncuTop").css('animation','');
			$("#sonSarkac").css('animation','');
		break;
		case 58: //ilk sarkaç top geri dönüş
			sayac=0;
		break;

	}
	sayac++;

}
var sayac=0;
/*
var z_msaniye=0;

function zamanDamgasi()
{

	var zaman = new Date();
	var milisaniye = zaman.getMilliseconds();
	var saniye = zaman.getSeconds();

	var tmpZaman = saniye*1000+milisaniye;
	if(z_msaniye<tmpZaman)
	{
		z_msaniye = tmpZaman;
	}


}*/