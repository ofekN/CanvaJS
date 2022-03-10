    // assetsLoader

class LoadingMangement  {

    constructor(loader){
        this.loader = loader
        this.assetsCount = 0
        this.assetsArray = []
        this.assetsLoad = false



    }
    add(imgs){
        imgs.forEach(img => {
                let image = new Image()
                image.src = img
                this.assetsArray.push(image)

         })

        
   }
   onLoad(func){
    for(let i = 0; i < this.assetsArray.length; i++) {

        this.assetsArray[i].onload = ()=>{
         this.assetsCount++;

       if( this.assetsCount === this.assetsArray.length) {
               this.assetsLoad = true
               func()


       }
        }

   }
   }

}


export default LoadingMangement

