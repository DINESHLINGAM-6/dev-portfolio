import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
}

const splitText = (element: HTMLElement, type: "words" | "chars" | "lines") => {
  const text = element.innerText;
  element.innerHTML = "";

  if (type === "words") {
    element.innerHTML = text
      .split(" ")
      .map((word) => `<span class="split-word">${word}&nbsp;</span>`)
      .join("");
  } else if (type === "chars") {
    element.innerHTML = text
      .split("")
      .map((char) =>
        char.trim() ? `<span class="split-char">${char}</span>` : "&nbsp;"
      )
      .join("");
  } else if (type === "lines") {
    element.innerHTML = text
      .split(". ")
      .map((line) => `<div class="split-line">${line}.</div>`)
      .join("");
  }

  return element.querySelectorAll(
    type === "words" ? ".split-word" : type === "chars" ? ".split-char" : ".split-line"
  );
};

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
    }

    const words = splitText(para, "words");

    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }

    const chars = splitText(title, "chars");

    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.refresh();
}
