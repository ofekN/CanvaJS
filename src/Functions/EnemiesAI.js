class EnemiesAI  {
    constructor(enemyObjects,playerObject){
        this.enemyObjects = enemyObjects
        this.playerObject = playerObject

        // init new properties enemy object/s  to listen when ai moves
         // isMoveRight,isMoveLeft,isMoveTop,isMoveDown,DistanceX,DistanceY

        this.settings = {
            enemySpeed:.5,
            enemyDirectionLog:null,
            enemyStopOnFollowX:false,
            from:0,
            to:100,

        }

        this.setFromTo = ()=>{

            this.enemyObjects.forEach(enemy => {
                 enemy.x = this.settings.from
            });
        }


    }
    follow(){
        this.enemyObjects.forEach(element => {
         element.DistanceX  = this.playerObject.x - element.x
         element.DistanceY  = this.playerObject.y - element.y

         if(element.DistanceX  > 0){
            element.isMoveLeft = false
            element.isMoveRight = true

            element.x += this.settings.enemySpeed + (Math.random() * (2 - .5) + .5)
        }
        else if(element.isStop === true){
            element.x = element.x

        }
        else{
            element.isMoveLeft = true
            element.isMoveRight = false

            element.x -= this.settings.enemySpeed + (Math.random() * (2 - .5) + .5)
        }
        if(element.DistanceY > 0){
            element.isMoveDown = true
            element.isMoveTop = false

            element.y += this.settings.enemySpeed + (Math.random() * (2 - .5) + .5)
        }
        else{
            element.isMoveTop = true
            element.isMoveDown = false

            element.y -= this.settings.enemySpeed + (Math.random() * (2 - .5) + .5)
        }

    });


    }

    followX(options){

        this.enemyObjects.forEach(element => {
            element.DistanceX  = this.playerObject.x - element.x
            if(element.DistanceX  > 0){
               element.isMoveLeft = false
               element.isMoveRight = true

               element.x += this.settings.enemySpeed + (Math.random() * (2 - .5) + .5)
           }
           if(element.isStop === true){
            element.x = element.x

           }
           else{
               element.isMoveLeft = true
               element.isMoveRight = false
               element.x -= this.settings.enemySpeed + (Math.random() * (2 - .5) + .5)
           }


       });



    }
    

   

    walkFromTo(repeat,num){
           
      if(repeat === true)
      {


        if(this.settings.from > this.settings.to){
            console.log('stop');

        }
        else{
            this.enemyObjects.forEach(e=>{
                if(e.x == this.settings.to){

                    // console.log('stop');


                }
                else{
                    e.x += 20

                }
              })

        }




      }

      else{
        if(this.settings.from > this.settings.to){

        }
        else{
           this.enemyObjects.forEach(e=>{
               if(e.x > this.settings.to -1)  e.x = e.x,console.log('stoped');
               else e.x += this.settings.enemySpeed

           })

        }

      }
         

  }

  updateFromTo(){

  }




}


export default EnemiesAI