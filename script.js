// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();


async function submitForm() {
      const signUpForm = document.getElementById('signUpForm');
      const formData = new FormData(signUpForm);

      // Workaround, hCaptcha adds two keys with same value
      formData.delete('g-recaptcha-response');

      const response = await fetch('/signup', {
        method: 'POST',
        body: formData
      });

      const ok = await response.json();
      if (ok) {
        console.log("a")
      } else {
        console.log('something went wrong');
        window.location.href = "index.html";
      }

    }