// Camera class
/// need to fix moving the camera

class Camera  {
    constructor(scene){

        this.scene = scene





    }

   MoveRight(x){
        this.scene.objs.forEach(obj =>{
         obj.x += x
        })
    }
    MoveLeft(x){
        this.scene.objs.forEach(obj =>{
         obj.x -= x
        })
     }
     MoveTop(y){
        this.scene.objs.forEach(obj =>{
         obj.y += y
        })
 }
     MoveDown(y){
       this.scene.objs.forEach(obj =>{
        obj.y -= y
       })
      }


}


export default Camera

