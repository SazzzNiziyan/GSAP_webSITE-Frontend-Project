import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP} from '@gsap/react';

const App = () => {

  const container = useRef();

  const{ contextSafe } = useGSAP({scope: container})

  const onClickGood =  contextSafe(() => {
    gsap.to(".box", { x: 300, duration: 2, rotation: 360 , delay: 0 , height: 300 });
  });

  return (
    <div ref={container}>
      <div onClick={onClickGood}  className="box" style={{ width: '300px', height: '100px', background: 'red' }}></div>
    </div>
  );
};

export default App