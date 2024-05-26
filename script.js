document.addEventListener("DOMContentLoaded", function (event) {
  const uiImage = new Image();
  uiImage.src = "./outline-ui.gif";
  document.querySelector(".shigure-ui").appendChild(uiImage);

  // Mouse Cursor Animation
  gsap.set(".shigure-ui", { xPercent: -50, yPercent: -50 });
  const ui = document.querySelector(".shigure-ui");
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.08;

  const xSet = gsap.quickSetter(ui, "x", "px");
  const ySet = gsap.quickSetter(ui, "y", "px");

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });

  const clock = { start: performance.now() };

  function getColor(time, variation) {
    const r = 0.5 + 0.5 * Math.cos(time * 0.002 + variation);
    const g = 0;
    const b = 1 - r;
    return `rgba(${Math.floor(
      r * 255
    )}, ${Math.floor(g * 255)}, ${Math.floor(b * 255)}, 1)`;
  }

  function updateTextShadow() {
    const time = performance.now() - clock.start;
    const variations = [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2];

    const textShadow = variations
      .map((variation, index) => {
        const color = getColor(time, variation);
        return `0 0 ${6 + index * 10}px ${color}`;
      })
      .join(", ");

    document.querySelector(".title").style.textShadow = textShadow;

    requestAnimationFrame(updateTextShadow);
  }

  updateTextShadow();
});
