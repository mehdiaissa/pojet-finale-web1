  let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar')
menu.onclick =function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = function(){
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
 document.querySelector('#search-icon').onclick = function () {
     document.querySelector('#search-form').classList.toggle('active');

 }
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');

}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop :true ,

  });
  
  var somme=0;
  var total= document.getElementById('tot');
	var select = document.querySelector('.select');
	var button = document.getElementsByClassName('btn');
  var button1 = document.getElementsByClassName('btn1');
	for(var but of button){
		but.addEventListener('click', function (e) {

				// copy and paste //
				var parent = e.target.parentNode;
				var clone = parent.cloneNode(true);
				select.appendChild(clone);
        clone.lastElementChild.innerText='delete'
         var prix=parseFloat( clone.querySelector('span').innerText);
        somme= somme+prix;
        console.log(somme);
        total.innerText=(somme)+" d";
        var suprimer = clone.querySelector('.btn');
          suprimer.onclick = () =>{ 
          clone.remove();
            somme=somme-prix;
            console.log(somme);
            total.innerText=(somme.toFixed(2))+" d";
          }
        
    } );
    
  }
  

  for(var but1 of button1){
		but1.addEventListener('click', function (c) {

				// copy and paste //
				var parent = c.target.parentNode.parentNode;
				var clone1 = parent.cloneNode(true);
				select.appendChild(clone1);
        var del = clone1.querySelector('.btn1');
        var des= clone1.querySelector("p");
        des.remove();
        del.innerHTML = 'delete';
         var prix=parseFloat( clone1.querySelector('span').innerText);
        console.log("aissa")
        somme= somme+prix;
        console.log(somme);
        total.innerText=(somme)+" d";
        var suprimer1 = clone1.querySelector('.btn1');
          suprimer1.onclick = () =>{ 
          clone1.remove();
            somme=somme-prix;
            total.innerText=(somme.toFixed(2))+" d";
          }
    } );
    
  }

  document.querySelector('#shop').onclick = function () {
    document.querySelector('.select').classList.toggle('active');
  }

 //zoom
 var zoom =document.getElementsByClassName(" fa-eye");
 console.log(zoom);
 var image = document.querySelector('img');
 console.log(image);
 zoom.onclick=function(){
  image.style.transform = "scale(1)";
  console.log("rrrrrrrr");
  
 }




 