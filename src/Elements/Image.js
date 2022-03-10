class Image  {
    constructor(image,x,y,width,height){
        this.image= image
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.rotate = 0
        this.filter = 'none'



    }

    onCollideArr(arr){
      arr.forEach(element => {
        
        let dx=(this.x+this.width/2)-(element.x+element.width/2);
        let dy=(this.y+this.height/2)-(element.y+element.height/2);
        let width=(this.width  +element.width)/2;
        let height=(this.height +element.height)/2;
        let crossWidth=width*dy;
        let crossHeight=height*dx;
        let collision = 'none'
  
        if (this.x < element.x + element.width &&
            this.x + this.width > element.x &&
            this.y < element.y + element.height &&
            this.y + this.height > element.y)
            {

  
  
            if(crossWidth>crossHeight){
              if(crossWidth>(-crossHeight)){
  
               collision = 'bottom'
               return element.collision = collision
  
              }
              else{
               collision = 'left'
  
               return element.collision = collision
              }
  
           }
           else{
               if(crossWidth>-(crossHeight)){
                   collision ='right'
                   return element.collision = collision
  
                  }
                  else{
                   collision = 'top'
                   return element.collision = collision
  
                  }
  
              }
  
  
  
  
  
  
            }
            else{
              collision = 'none'
              return element.collision = collision
            }
  



      });

      
    }
     // onCollide
     onCollide(target,callback){
      let t = target
      let dx=(this.x+this.width/2)-(t.x+t.width/2);
      let dy=(this.y+this.height/2)-(t.y+t.height/2);
      let width=(this.width+t.width)/2;
      let height=(this.height+t.height)/2;
      let crossWidth=width*dy;
      let crossHeight=height*dx;
      let collision = 'none'

      if (this.x < t.x + t.width &&
          this.x + this.width > t.x &&
          this.y < t.y + t.height &&
          this.y + this.height > t.y)
          {

          callback()


          if(crossWidth>crossHeight){
            if(crossWidth>(-crossHeight)){

             collision = 'bottom'

             return t.collision = collision

            }
            else{
             collision = 'left'

             return t.collision = collision
            }

         }
         else{
             if(crossWidth>-(crossHeight)){
                 collision ='right'
                 return t.collision = collision

                }
                else{
                 collision = 'top'
                 return t.collision = collision

                }

            }

          }


    }




    onClick(func){

        window.addEventListener('click',(e)=>{
          let x = e.clientX
          let y = e.clientY
          let mouseDistanceX,mouseDistanceY
          mouseDistanceX = this.x - x
          mouseDistanceY = this.y - y
           if(mouseDistanceX > -this.width && mouseDistanceX < 0 && mouseDistanceY > -this.height && mouseDistanceY < 0) func()
  
  
  
        })
  
      }
  
  
      // onMouse
      onMouse(options){
  
        window.addEventListener('mousemove',(e)=>{
          let x = e.clientX
          let y = e.clientY
          let mouseDistanceX,mouseDistanceY
          mouseDistanceX = this.x - x
          mouseDistanceY = this.y - y
           if(mouseDistanceX > -this.width && mouseDistanceX < 0 && mouseDistanceY > -this.height && mouseDistanceY < 0) options.onHover()
           else options.onLeave()
  
               
  
        })
  
      }
  
  
      // onTouch
      onTouch(options){
  
        window.addEventListener('touchmove',(e)=>{
          let x = e.touches[0].clientX
          let y = e.touches[0].clientY
          let mouseDistanceX,mouseDistanceY
          mouseDistanceX = this.x - x
          mouseDistanceY = this.y - y
           if(mouseDistanceX > -this.width && mouseDistanceX < 0 && mouseDistanceY > -this.height && mouseDistanceY < 0) options.onHover()
           else options.onLeave()
  
               
  
        })
  
      }
  
    

}


export default Image