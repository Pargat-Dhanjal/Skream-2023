const handleClick = (name, imageSrc) => {
  $("#modal-image").attr("src",imageSrc);
  $("#overlay").attr("style", "display:flex").hide().fadeIn()
  $("body").attr("style", "overflow:hidden")
};

const closeModal = () => {
  $("body").attr("style", "overflow:auto")
  $("#overlay").fadeOut()
};
