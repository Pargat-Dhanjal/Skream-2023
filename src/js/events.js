const handleClick = (name, imageSrc) => {
  console.log(name, imageSrc);
  document.getElementById("modal-image").setAttribute("src", imageSrc);
  document.getElementById("overlay").style.display = "flex";
  document.body.style.position = "fixed";
};

const closeModal = () => {
  document.body.style.position = "initial";
  document.getElementById("overlay").style.display = "none";
};
