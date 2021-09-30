
export default class Canva{

    constructor(){

        let objects = []

        console.log('%cCanva Beta 0.1', 'color: white; background: #84b29f; font-size: 20px;border:2px solid #baa06a;padding:5px;color:#efece6;');
        






    // Render2D class
      Canva.Render2D = class{
          constructor(canvas){
              this.canvas = canvas
              this.ctx = this.canvas.canvas.getContext('2d')
               this.ctx.imageSmoothingEnabled = true;
               this.ctx.imageSmoothingQuality = 'high';



          }

          RenderSize(width,height){
            this.canvas.canvas.width = width
            this.canvas.canvas.height = height
          }

          Render(){
            this.ctx.clearRect(0,0,this.canvas.canvas.width,this.canvas.canvas.height)

           









            objects.forEach(obj => {
                let _obj = obj.image
                let img = new Image()
                img.src = _obj.image

                if(obj.image.sprite === true){
                    // image is sprite

                 
                    this.ctx.save()
                    this.ctx.beginPath()
                    this.ctx.drawImage(img,_obj.col * _obj.frameW,_obj.row*_obj.frameH,_obj.frameW,_obj.frameH,_obj.x,_obj.y,_obj.width,_obj.height)
                    this.ctx.fill()
                    this.ctx.restore()
                }
                else{
                    // reg 
                    this.ctx.save()
                    this.ctx.beginPath()
                    this.ctx.drawImage(img,_obj.x,_obj.y,_obj.width,_obj.height)
                    this.ctx.fill()
                    this.ctx.restore()
                }
              
              
            });

          }
      }

    // Scene class
      Canva.Scene2D = class{
        constructor(){
        }

        add(__object){
         __object.forEach(__obj => {
            objects.push(__obj)

         });
        }
        remove(object){

            if(objects.includes(object)=== true){
                let index = objects.indexOf(object)
                objects.splice(index,1)
            }


           }


    }



    // Sprite class
    Canva.Sprite = class{
        constructor(image){
            this.image= image


        }
    }

    //Collision check class
    Canva.Collision = class{
        constructor(){

        }
        checkCollisionSingular(element){
            let element0 = element.firstEl
            let element1 = element.secondEl


            if (element0.image.x < element1.image.x + element1.image.width &&
                element0.image.x + element0.image.width > element1.image.x &&
                element0.image.y < element1.image.y + element1.image.height &&
                element0.image.y + element0.image.height > element1.image.y)
                {
                 console.log(' collision detected!');
                }


           }
        checkCollisionBetweenArr(element){
            let elementToCheck = element.elementToCheck.image
            let elementsToCheckBetween = element.elementsArr
             elementsToCheckBetween.forEach(objARR => {
                 let obj = objARR.image
                 if ( elementToCheck.x < obj.x + obj.width &&
                     elementToCheck.x +  elementToCheck.width > obj.x &&
                     elementToCheck.y < obj.y + obj.height &&
                     elementToCheck.y +  elementToCheck.height > obj.y)
                    {

                        objARR.image.collide = true
                     console.log(` collision detected with ${objARR.image.image}`);

                    }

             });


          }
    }


    // assetsLoader
    Canva.LoadingMangement = class{
        constructor(){
            this.assetsCount = 0
            this.assetsArray = []


        }
        load(imgs){

            imgs.assets.forEach(img => {
                    let image = new Image()
                    image.src = img
                    this.assetsArray.push(image)

             });
             for(let i = 0; i < this.assetsArray.length; i++) {

                   this.assetsArray[i].onload = ()=>{
                    this.assetsCount++;
                //    console.log( this.assetsArray[i].src + ' loaded');

                  if( this.assetsCount === this.assetsArray.length) {
                          console.log("assets fully loaded");
                  }
                   }


              }



            }

    }




    }
// end of Canva constructor









}
