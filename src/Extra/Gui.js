 /// Gui Class

class Gui  {
    constructor(){
        this.guiInterval = null
        this.guiIntervalTime = 100
        this.mobileWidth = window.matchMedia('(max-width: 800px)');
        this.GuiHolder= document.createElement('div')
        if(this.mobileWidth.matches) this.GuiHolder.style.width = '100%'
        else this.GuiHolder.style.width = '25vw'
        this.GuiHolder.style.position = 'fixed'
        this.GuiHolder.style.backgroundColor = '#2a2b2a'
        this.GuiHolder.style.height= 'auto'
        this.GuiHolder.style.left = '0%'
        this.GuiHolder.style.top = '0%'
        this.GuiHolder.style.overflow = 'hidden'
        this.GuiHolder.style.zIndex = '999 !important'
        document.querySelector('body').appendChild(this.GuiHolder)
        this.GuiClose = document.createElement('div')
        let GuiCloseText = document.createTextNode('Close GUI')
        this.GuiClose.appendChild(GuiCloseText)
        this.GuiClose.style.fontFamily = 'arial'
        this.GuiClose.style.lineHeight = '25px'
        this.GuiClose.style.borderRadius = '0px'
        this.GuiClose.style.letterSpacing = '2px'
        this.GuiClose.style.position = 'relative'
        this.GuiClose.style.textAlign = 'center'
        this.GuiClose.style.cursor = 'pointer'
        this.GuiClose.style.zIndex = '9999'
        this.GuiClose.style.borderRadius = '5px'
        this.GuiClose.style.margin = '3% 0%'
        this.GuiClose.style.color = 'white'
        this.GuiClose.style.width = '90%'
        this.GuiClose.style.left = '5%'
        this.GuiClose.style.backgroundColor = 'rgb(30 29 29)'
        this.GuiClose.style.height = 'auto'
        this.clicked = false
        // this.guiResize = document.createElement('div')
        // this.guiResize.style.width = '10px'
        // this.guiResize.style.height = '50%'
        // this.guiResize.style.position = 'absolute'
        // this.guiResize.style.top = '25%'
        // this.guiResize.style.right = '0%'
        // this.guiResize.style.zIndex = '4'
        // this.guiResize.style.backgroundColor = 'red'
        // this.GuiHolder.appendChild(this.guiResize)

        



        this.GuiHolder.appendChild(this.GuiClose)
       }
       Set(){

       }
       add(settings){


          let divObj = document.createElement('div')
          divObj.style.width = '95%'
          divObj.style.left = '2.5%'
          divObj.style.height = 'auto'
          divObj.style.margin = '2% 0%'
          divObj.style.position = 'relative'
          divObj.style.padding = '0 1%'
          divObj.style.backgroundColor = 'rgb(27 30 29)'
          divObj.setAttribute('class','guiDiv')
          let pName = document.createElement('p')
          let pNameText = document.createTextNode(settings.name)
          pName.style.color = 'white'
          pName.style.position ='absolute'
          pName.style.display = 'inline'
          pName.style.fontSize = '.8em'
          pName.style.fontFamily = 'arial'
          pName.style.left = '2.5%'
          pName.style.top = '-60%'
          pName.style.lineHeight = '40px'
          pName.appendChild(pNameText)
          divObj.appendChild(pName)


          let slider = document.createElement('input');
          slider.setAttribute('class','guiSlide')
          slider.style.outline = 'none'
          slider.type = 'range';
          slider.min =settings.min
          slider.max = settings.max;
          slider.value = 2.5;
          slider.step = 0.1;
          slider.style.position = 'relative'
          slider.style.top = '0px'
          slider.style.marginLeft = '30%'
          slider.style.width  = '11vw'
          slider.style.borderRadius = '0px'
          slider.style.background = '#fff'
          slider.style.boxShadow ='inset 1px 3px 1px rgba(0,0,0,0.8)'
          slider.style.webkitAppearance = 'none'
          slider.style.height = '22px'
          divObj.appendChild(slider)

          let NumValue = document.createElement('input')
          NumValue.type ='number'
          NumValue.style.display = 'inline'
          NumValue.style.position = 'relative'
          NumValue.style.width ='50px'
          NumValue.style.height = '20px'
          NumValue.style.float = 'right'
          NumValue.style.top = '7px'
          NumValue.style.textAlign = 'center'
          NumValue.style.border = '2px solid black'
          NumValue.setAttribute('class','guiValue')




          // Check if value exist in object
          let exist = settings.obj.hasOwnProperty(`${settings.value}`);

          if(exist){
           const checkNum = Number(settings.obj[settings.value] )
           if(checkNum ){

           NumValue.value = settings.obj[settings.value]

          slider.oninput = ()=>{
            NumValue.value = slider.value
            this.guiInterval = setInterval(() => {
              settings.obj[settings.value] = slider.value
           }, this.guiIntervalTime);
          }
          slider.onended = ()=>{     
            clearInterval(this.guiInterval)
          console.log('end');


          }

            }
           else{
               clearInterval(this.guiInterval)
             // display choose numeric value
             console.warn('please use a numeric value')

           }

          }
          else{
              clearInterval(this.guiInterval)
            // Display error gui
            console.warn(`the value "${settings.value}" is undefined`)
          }

          divObj.appendChild(NumValue)
          this.GuiHolder.insertBefore(divObj,this.GuiClose)
          let uClick = false
         /// gui close and open
          this.divs = [...document.querySelectorAll('.guiDiv')]
          this.handleClose = ()=>{
           if(uClick === false){
             uClick = true
             this.GuiClose.innerText = 'Open GUI'
              this.divs.forEach(d => {
                d.style.display = 'none'

              });


           }
           else{
             uClick = false
             this.GuiClose.innerText = 'Close GUI'

             this.divs.forEach(d => {
              d.style.display = 'block'

            });


           }
          }

          this.GuiClose.addEventListener('click',this.handleClose)



       }
}


export default Gui