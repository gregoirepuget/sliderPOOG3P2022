 class HeticSlider{
   constructor(container,speed,pagination,arrow)
   {
     this.container = document.querySelector(container)
     this.sliderContainer
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

      this.sliderContainer = document.createElement("div")
      this.sliderContainer.classList.add("sliderContainer");
      this.sliderContainer.innerHTML = this.container.innerHTML

      let speed = this.speed/1000
      this.sliderContainer.style.transition= `all ${this.transition} ${speed}s`

      this.container.innerHTML='';
      this.container.appendChild(this.sliderContainer)

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

        let _this = this
        this.rightArrow.addEventListener(
          'click',
          function(e)
          {
              e.preventDefault()
              _this.next()
          }
        )

        this.leftArrow.addEventListener(
          'click',
          function(e)
          {
              e.preventDefault()
              _this.previous()
          }
        )


      }
   }

   next(){
     this.currentImage++;
     let position = -600 * this.currentImage;
     console.log(position);
     this.sliderContainer.style.transform = `translateX(${position}px)`
   }

   previous()
   {
     this.currentImage--;
     let position = -600 * this.currentImage;
     console.log(position);
     this.sliderContainer.style.transform = `translateX(${position}px)`
   }

 }
