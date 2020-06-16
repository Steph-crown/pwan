var $ = x => document.getElementById(x)
var menu = $("menu-icon")
menu.addEventListener("click", openClose, false);
menuLine = menu.innerHTML
function openClose() {
  if (menu.innerHTML == menuLine) {
    $("content").style.display = "flex";
    menu.innerHTML = "<span style='font-size:20px'>&#x274C;</span>"
  }
  else {
    $("content").style.display = "none";
    menu.innerHTML = menuLine;
  }
}

var preList = ["Experienced In Saving You Money.",
	"Helping You Get More For Your Real Estate.",
	"Your Dream Home Awaits.",
	"Where would you rather live?",
	"Going Above and Beyond To Find Your Next Home.",
	"Your Concern Is Our Priority",
	"We’ll Find Your Ideal Home.",
	"Dedicated to results.",
	"Creating real value in property and places.",
	"Coming soon to a closing near you!",
	"Don’t buy from us unless you are ready for success"
	]
window.addEventListener("load", start, false);
function start() {
	imgg()
	curr = 0
	$('pre').innerHTML = "<span>" + preList[curr] +"</span";
	window.setInterval(function() {
	  opaque = 1
	  idd = setInterval(function() {
	    if (opaque < 0.2) {
	      curr = (curr + 1)%9
	      clearInterval(idd);
	      $('pre').innerText = preList[curr];
	      iddd = setInterval(function() {
	        if (opaque > 0.9) {
    	      clearInterval(iddd)
	        }
	        else {
	          opaque += 0.05;
	          $('pre').style.opacity = String(opaque);
	        }
	      },200)
	    }
	    else {
	      opaque -= 0.05;
	      $('pre').style.opacity = String(opaque);
	    }
	  },200)
	}, 7000)
}
function imgg() {
  imagess = ["fiveOaks.jpg", "1.jpg", "2.jpg", "3.jpg","4.jpg", "5.jpg","6.jpg","7.jpg","8.jpg"]
  imgSlide = document.getElementById("imgSlide")
  dot = document.getElementsByClassName("dot")
  for (i = 0; i < 9; i++) {
    dot[i].id = "";
  } 
  imgSlide.setAttribute("src", imagess[indexx]);
  
  dot[indexx].id = "active";
}
var indexx = 0
	function plus(x){
		if (indexx + x < 0){
			indexx = 8
			}
		else if (indexx + x > 8){
			indexx = 0
			}
		else{
			indexx += x
		}
		imgg()
		}
	function currentSlide(x){
		indexx = x
		imgg()
		}
	imgId = setInterval(plus, 5000, 1);

markup = ""
for (var i=0; i<=29; ++i) {
  markup += "<div><img src='" + i + ".jpg'>" +
  				"<div class='texts'><h3>An example of promo</h3>"+
  				"<p>Location:Thissisjs<p>" +
  				"<p>Contact: -$+#8#8#+$+</p></div>" +
  			"</div>"
}
$('promo').innerHTML = markup;
