

class Calc  {
    constructor(){

    }
    BetweenNumbers(min,max){
         return Math.random() * (max - min) + min
    }
    BetweenNumbersRound(min,max){
        return Math.floor(Math.random() * (max - min) + min)
   }
}


export default Calc


