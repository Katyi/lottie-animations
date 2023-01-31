import React, {useEffect, useRef} from "react";
import Lottie from "lottie-web";
import './App.css';

function App() {

  const container = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./purple')
    });
    return () => {
      Lottie.destroy();
    };
  },[])

  return (
    <div className="App">
      <h1>React Lottie Demo</h1>
      <div className="container" ref={container}></div>
    </div>
  );
}

export default App;
