class EnemyAI  {
    constructor(enemyObject,playerObject){
        this.enemyObject = enemyObject
        this.playerObject = playerObject

         // init new properties enemy object/s  to listen when ai moves
         // isMoveing,isMoveRight,isMoveLeft,isMoveTop,isMoveDown,DistanceX,DistanceY

         
        this.settings = {
            enemySpeed:.5,
            isStop:false,
            isCollide:false,
            enemyDirectionLog:null,

            
        
        }

    }
    follow(){
        this.enemyObject.DistanceX  = this.playerObject.x - this.enemyObject.x
        this.enemyObject.DistanceY  = this.playerObject.y - this.enemyObject.y

                        

        if( this.enemyObject.DistanceX  > 0){
            this.enemyObject.isMoveLeft = false
            this.enemyObject.isMoveRight = true
   

            this.enemyObject.x += this.settings.enemySpeed
        }
        else{
            this.enemyObject.isMoveLeft = true
            this.enemyObject.isMoveRight = false
   

            this.enemyObject.x -= this.settings.enemySpeed
        }
        if( this.enemyObject.DistanceY > 0){
            this.enemyObject.isMoveDown= true
            this.enemyObject.isMoveTop = false

            this.enemyObject.y += this.settings.enemySpeed
        }
        else{
    
            this.enemyObject.isMoveTop= true
            this.enemyObject.isMoveDown = false

            this.enemyObject.y -= this.settings.enemySpeed
        }

      
    }

}


export default EnemyAI