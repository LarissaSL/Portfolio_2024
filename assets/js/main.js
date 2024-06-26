//  Menu
function funcaoMenu(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
}

// Funcao para Download do CV
function downloadCV() {
    var link = document.createElement('a');
    link.href = 'assets/files/Larissa Sousa da Silva - 2024.pdf';
    link.download = 'Larissa_Sousa_da_Silva_2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Efeito de Escrita 
 var typingEffect = new Typed(".typedText",{
    strings : ["Programadora","Estudante"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
})

// Destaque Sessao ativa 

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)
