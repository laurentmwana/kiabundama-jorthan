(function (){
    // recuperation de l'element 

    var menu = document.querySelector("[menu-fixe]")
    var fake = document.createElement("div")
    
    menu.classList.add("fixed")
    
    var rect = menu.getBoundingClientRect()
    var height = rect.height
    var width = rect.width
  
        // ajout de la classe fixed
    var classe = menu.classList.contains("fixed")
    if(classe) {
        menu.parentNode.insertBefore(fake ,menu)
        fake.style.height = height + "px"
        fake.style.width = width + "px" 
    }
    var redimensionnement = function(){

            
        var rect = menu.getBoundingClientRect()
        var height = rect.height
        var width = rect.width
        fake.style.height = height + "px"
        fake.style.width = width + "px" 
    }




    window.addEventListener("resize", redimensionnement)
  




})()