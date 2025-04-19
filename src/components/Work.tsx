import "./styles/Work.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      let translateX: number = 0;
      function setTranslateX() {
        const box = document.getElementsByClassName("work-box");
        if (box.length === 0) return;

        const rectLeft = document
          .querySelector(".work-container")!
          .getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        let padding: number =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      setTranslateX();

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        duration: 40,
        delay: 0.2,
      });

    });

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <div className="work-section" id="work">
      
    </div>
  );
};

export default Work;
