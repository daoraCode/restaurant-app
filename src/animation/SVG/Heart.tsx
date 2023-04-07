import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import heartAnimation from '../heart.json';

export const Heart = () => {
  const animation = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: animation.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: heartAnimation,
    });
    return () => lottie.stop();
  }, []);

  return <svg ref={animation}></svg>;
};
