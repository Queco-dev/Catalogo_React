import CanvasSketch1 from "./CanvasSketch";


const settings={
    dimensions:[1080,1080],
    animate:(false)
  }
  
  
export const sketch1=()=>{
    return ({context,width,height})=>{
      context.fillStyle= "white"
      context.fillRect(0,0,width,height)
  
      for (let i=0; i<5; i++ ){
        for (let j=0; j<5;j++){
  
          let gap=30
          let width=60
          let height=60
          let x= 300 +(width +gap)*i
          let y=300 +(height +gap)*j
      
      
            context.lineWidth=5
            context.beginPath()
            context.rect(x,y,width,height)
            context.stroke()
  
            if(Math.random()>0.5){
  
              context.beginPath()
              context.rect(x+8,y+8,width-16,height-16)
              context.stroke()
            }
          }
        }
        
      }
      
      
      
    }
    
    
    
   export default CanvasSketch1(sketch,settings)
  
  
  
  
  // const settings = {
  //   dimensions: [ 2048, 2048 ]
  // };
  
  // const sketch = () => {
  //   return ({ context, width, height }) => {
  //     context.fillStyle = 'red';
  //     context.fillRect(0, 0, width, height);
  //   };
  // };
  
  // canvasSketch(sketch, settings);