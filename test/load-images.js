const wrapper = document.querySelector(".image-wrapper");

function loadImage(index) {
  const image = document.createElement("img");

  image.src = `assets/${index}.jpg`;
  image.alt = `Image number ${index}.`;

  return image;
}

if (wrapper) {
  for (let i = 1; i < 8; i++) wrapper.appendChild(loadImage(i));
  for (let i = 1; i < 8; i++) wrapper.appendChild(loadImage(i));
  for (let i = 1; i < 8; i++) wrapper.appendChild(loadImage(i));
}
