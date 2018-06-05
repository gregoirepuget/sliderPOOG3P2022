 class HeticSlider{
   constructor(container,speed,pagination,arrow)
   {
     this.container = document.querySelector(container)
     this.speed = speed
     this.transition = "ease-in"
     this.imagesNumber = 0
     this.currentImage = 0
     this.direction = "right"
     this.pagination = pagination
     this.arrow = arrow
     this.leftArrow
     this.rightArrow

     this.init()
   }

   init(){
      // ajout de la classe heticSlider au container
      this.container.classList.add("heticSlider")

      // gestion de la présence des fleches.
      if(this.arrow)
      {
        this.leftArrow = document.createElement("a")
        this.leftArrow.setAttribute("href","#")
        this.leftArrow.classList.add("leftArrow");
        this.container.appendChild(this.leftArrow);

        this.rightArrow = document.createElement("a")
        this.rightArrow.setAttribute("href","#")
        this.rightArrow.classList.add("rightArrow");
        this.container.appendChild(this.rightArrow);
        
      }
   }

 }
