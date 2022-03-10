class Sound {
    // need to add more functions
    constructor(file)
    {
        this.file = file
        this.Audio = new Audio(this.file);
        this.duration = this.Audio.duration

    }

    Play(){

      if(this.Audio.readyState >= 2)
      {
             this.Audio.play()

      }
      else{
          console.warn('Audio is not ready')
      }

    }
    onEnd(func){
        this.Audio.addEventListener('ended',()=>{
            func()
        })
    }
    Pause(func){
        this.Audio.pause()
        this.Audio.addEventListener('pause',()=>{
            func()
        })
    }
    Repeat(){

            if(this.Audio.readyState >= 2)
            {
                   this.Audio.play()
                   this.onEnd(()=>{
                       this.Audio.currentTime = 0
                       this.Audio.play()
                   })


            }
            else{
                console.warn('Audio is not ready')
            }

    }
}

export default Sound