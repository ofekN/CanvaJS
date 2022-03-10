import Rect from './Elements/Rect.js'
import Image from './Elements/Image.js'
import Sprite from './Elements/Sprite.js'
import Particles from './Elements/Particles.js'
import Text from './Elements/Text.js'
import Calc from './Functions/Calc.js'
import EnemyAI from './Functions/EnemyAI.js'
import EnemiesAI from './Functions/EnemiesAI.js'
import Gui from './Extra/Gui.js'
import Camera from './Functions/Camera.js'
import Sound  from './Functions/Sound.js'
import LoadingMangement from './Extra/Loader.js'
export default class Canva{

    constructor(){

        let objects = []
        console.log('%cCanvaJS Render2D', 'color: white; background: #84b29f;font-family:arial; font-size:1em;border:4px solid #fafafa;padding:5px;color:#efece6;');



    // Classes

    //Gui
     Canva.Gui = Gui
    //Loader
     Canva.LoadingMangement = LoadingMangement
   //Elements
     Canva.Rect = Rect
     Canva.Image = Image
     Canva.Sprite = Sprite
     Canva.Text = Text
     Canva.Particles = Particles
    //Functions
     Canva.Calc = Calc
     Canva.Camera = Camera
     Canva.Sound = Sound
     Canva.EnemyAI = EnemyAI
     Canva.EnemiesAI = EnemiesAI

    // Render2D class
      Canva.Render2D = class{
          constructor(canvas){
              this.canvas = canvas
              this.ctx = this.canvas.getContext('2d')
              this.ctx.imageSmoothingEnabled = true;
              this.ctx.imageSmoothingQuality = 'high';
              this.settings = {
                w:0,
                h:0,
                fullScreen:false
              }
         
              this.setSize = ()=>{
               

                  if(this.settings.fullScreen === true)
                  {
                    this.canvas.width = window.innerWidth
                    this.canvas.height = window.innerHeight
                  }
               
                  else 
                  {
             
                    this.canvas.width = this.settings.w
                    this.canvas.height = this.settings.h
                  }
                 
                
              }


              window.addEventListener('resize',()=>{
               this.setSize()

              })
             

         

          }

  

          RenderShake(settings){
            let numInc = 0
            let int

           int = setInterval(() => {
              if(settings.velocity > 1.5){
                settings.velocity -= 1.5

              }
              else{
                settings.velocity +=  1.5

              }
              this.canvas.canvas.style.transform = `translate(${settings.velocity}%,0%)`

            }, 100);
            setTimeout(() => {
              clearInterval(int)
              this.canvas.canvas.style.transform = `translate(0%,0%)`

            }, settings.duration * 1000);

          }

          Render(){

            this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
            this.ctx.setTransform(1,0,0,1,0,0);//reset the transform matrix as it is cumulative
            this.draw()




          }

          draw(){
            objects.forEach(obj => {
              this.isRect = obj instanceof Canva.Rect
              this.isSprite = obj instanceof Canva.Sprite
              this.isText = obj instanceof Canva.Text
              this.isImage = obj instanceof Canva.Image
              this.isParticles = obj instanceof Canva.Particles

              this.ctx.save()

              if(this.isText === true){
                this.ctx.font = `${obj.text.fontWeight} ${obj.text.fontSize} ${obj.text.fontFamily}`;
                this.ctx.fillStyle = `${obj.text.color}`;
                this.ctx.textAlign = `${obj.text.align}`;
                this.ctx.fillText(`${obj.text.text}`,obj.x,obj.y)
                this.ctx.fill()
              }
              else if(this.isRect === true){
                let centerX= obj.x + 0.5 * obj.width;
                let centerY= obj.y + 0.5 * obj.height;
                this.ctx.beginPath()
                this.ctx.translate(centerX, centerY);
                this.ctx.rotate((Math.PI/180) * obj.rotate)
                this.ctx.translate(-centerX, -centerY);
                this.ctx.fillStyle = `${obj.color}`;
                this.ctx.fillRect(obj.x,obj.y,obj.width,obj.height)



              }
              else if(this.isSprite === true){
                  let _obj = obj.image
                  let centerX= obj.x + 0.5 * obj.width;
                  let centerY= obj.y + 0.5 * obj.height;
                  this.ctx.save()  
                  this.ctx.globalAlpha =  obj.alpha
                  this.ctx.translate(centerX, centerY);
                  this.ctx.rotate((Math.PI/180) * obj.rotate)
                  this.ctx.translate(-centerX, -centerY);

                  this.ctx.drawImage(obj.image.image,_obj.col * _obj.frameW,_obj.row*_obj.frameH,_obj.frameW,_obj.frameH,obj.x,obj.y,obj.width,obj.height)
                  this.ctx.restore()
              


                  //  switch (obj.filter) {
                  //    case 'invert':
                  //     let imgData = this.ctx.getImageData(obj.x,obj.y+20,obj.width ,obj.height);
                  //     var pixel = imgData.data;

                  //     var r=0, g=1, b=2,a=3;
                  //     for (var p = 0; p<pixel.length; p+=4)
                  //     {
                  //       if (
                  //           pixel[p+r] == 255 &&
                  //           pixel[p+g] == 255 &&
                  //           pixel[p+b] == 255) // if white then change alpha to 0
                  //       {
                  //         pixel[p+a] = 0;


                  //       }
                  //       else if(

                  //         pixel[p+r] < 205 &&
                  //         pixel[p+g] < 205 &&
                  //         pixel[p+b] < 205 // if white then change alpha to 0

                  //       ){
                  //         pixel[p+g] += 100
                  //         pixel[p+r] += 100
                  //         pixel[p+b] += 100
                  //         pixel[p+a] -=10

                  //       }


                  //     }
                  //     // Paint pixel data into the context

                  //     this.ctx.putImageData(imgData, obj.x,obj.y+20);

                  //      break;


                  //  }






              }
              else if(this.isImage === true){
                let centerX= obj.x + 0.5 * obj.width;
                let centerY= obj.y + 0.5 * obj.height;

                this.ctx.translate(centerX, centerY);
                this.ctx.rotate((Math.PI/180) * obj.rotate)
                this.ctx.translate(-centerX, -centerY);

                this.ctx.drawImage(obj.image.image,obj.x,obj.y,obj.width,obj.height)


              }
              else if(this.isParticles === true){
                this.isRect = obj.type instanceof Canva.Rect
                this.isSprite = obj.type instanceof Canva.Sprite
                this.isImage = obj.type instanceof Canva.Image
                
                if(this.isRect === true){

                }
                else if(this.isImage === true){

                  // for (let i = 0; i < obj.number + 1; i++) {
                  //   let centerX= obj.x + 0.5 * obj.size;
                  //   let centerY= obj.y + 0.5 * obj.size;
    
                  //   this.ctx.translate(centerX, centerY);
                  //   this.ctx.rotate((Math.PI/180) * obj.rotate)
                  //   this.ctx.translate(-centerX, -centerY);
    
                  //   this.ctx.drawImage(obj.type.image.image,obj.x,obj.y,obj.size,obj.size)
                    
                  // }

                }
                else if(this.isSprite === true){

                }
                else{
                        // console.log('not valid');
                }



              }
              else{
                //
                console.warn(obj + 'is not valid')
              }



              this.ctx.restore()




            })

          }
      }

    // Scene class
      Canva.Scene2D = class{
        constructor(){
          this.objs = []
        }

        add(__object){

         __object.forEach(__obj => {
            objects.push(__obj)
            this.objs.push(__obj)


         });
        }
        remove(object){

            if(objects.includes(object)=== true){
                let index = objects.indexOf(object)
                objects.splice(index,1)
                this.objs.splice(index,1)
            }


           }


    }






    }
// end of Canva constructor










}
