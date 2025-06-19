// src/hooks/useCanvasAnimation.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useCanvasAnimation = (canvasRef) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const frameCount = 250;

    const currentFrame = (index) => `/src/assets/images/photos/${(index + 1).toString()}.png`;
    const images = [];
    let ball = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(ball, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
        pin: canvas,
        end: "500%",
      },
      onUpdate: render,
    });

    images[0].onload = render;

    function render() {
      context.canvas.width = images[0].width;
      context.canvas.height = images[0].height;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[ball.frame], 0, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [canvasRef]);
};

export {useCanvasAnimation};