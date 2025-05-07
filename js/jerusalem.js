function setupSlider(sectionId, imageClass) {
    const images = document.querySelectorAll(`#${sectionId} .${imageClass}`);
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
    }

    document.querySelector(`#${sectionId} .prev-btn`).addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    document.querySelector(`#${sectionId} .next-btn`).addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    showImage(currentIndex);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupSlider("landmarks", "landmark-img");
  });

