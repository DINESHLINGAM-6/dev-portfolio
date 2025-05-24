import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Function to manually split text into spans
  function splitText(element: string, className: string): HTMLElement[] {
    const el = document.querySelector(element) as HTMLElement;
    if (!el) return [];

    const text = el.innerText;
    el.innerHTML = text
      .split("")
      .map((char) =>
        char.trim()
          ? `<span class="${className}">${char}</span>`
          : "&nbsp;"
      )
      .join("");

    return Array.from(el.querySelectorAll(`.${className}`)) as HTMLElement[];
  }

  const landingTextChars = splitText(
    ".landing-info h3, .landing-intro h2, .landing-intro h1",
    "split-char"
  );

  gsap.fromTo(
    landingTextChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const landingText2Chars = splitText(".landing-h2-info", "split-h2-char");
  gsap.fromTo(
    landingText2Chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const landingText3Chars = splitText(".landing-h2-info-1", "split-h2-char");
  const landingText4Chars = splitText(".landing-h2-1", "split-h2-char");
  const landingText5Chars = splitText(".landing-h2-2", "split-h2-char");

  if (landingText2Chars.length && landingText3Chars.length)
    LoopText(landingText2Chars, landingText3Chars);
  if (landingText4Chars.length && landingText5Chars.length)
    LoopText(landingText4Chars, landingText5Chars);
}

function LoopText(Text1: HTMLElement[], Text2: HTMLElement[]) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4; // This delay is used for the first animation

  tl.to(Text1, {
    opacity: 0,
    y: -80,
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.1,
    delay: delay,
  }).fromTo(
    Text2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
    },
    "-=0.5" // This makes the transition smooth instead of overlapping
  );
}

