// import CanvasSketch from "./CanvasSketch";
// import CanvasSketch from "./CanvasSketch";
import CanvasSketch from 'canvas-sketch'

const settings = {
  dimensions: [ 1080,1080 ],
  animate: false
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    for (let i=0; i<5; i++){
      for (let j=0; j<5; j++){

     

      context.lineWidth=5
      context.beginPath()
      context.rect(300+100*i,300+100*j,100,100)
      context.strokeStyle="black"
      context.stroke()
      
      if (Math.random()>0.5){
        context.beginPath()
        context.rect(100+110*i+16,100+100*j+16,100-8,100-8)
        context.fillStyle="brown"
        context.fill()
        context.strokeStyle="brown"
        context.stroke()
      }
    } }


  };
};

 export default CanvasSketch(sketch, settings);
