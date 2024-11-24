var sidenav = document.getElementById("mySidenav");
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");
  
   
    openBtn.onclick = openNav;
    
    closeBtn.onclick = closeNav;
  
    
    var navLinks = document.querySelectorAll("#mySidenav ul li a");
    navLinks.forEach(link => {
      link.onclick = function(event) {
       
        event.preventDefault();
  
        
        closeNav();
  
        
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
      };
    });

    function openNav() {
      sidenav.classList.add("active");
    }
  
 
    function closeNav() {
      sidenav.classList.remove("active");
    }
  
  
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
  
    scrollToTopBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    

const toggleButton = document.getElementById("mode-toggle");
const modeIcon = document.getElementById("mode-icon");


toggleButton.addEventListener("click", () => {
 
    document.body.classList.toggle("light-mode");

    
    if (document.body.classList.contains("light-mode")) {
        modeIcon.src = "Image/moon.svg";  
        modeIcon.alt = "Mode Clair";      
    } else {
        modeIcon.src = "Image/sun.svg";   
        modeIcon.alt = "Mode Sombre";    
    }
});
