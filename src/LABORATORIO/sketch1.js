import CanvasSketch from "./CanvasSketch";

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };
};

 export default CanvasSketch(sketch, settings);
