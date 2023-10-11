const deleteMe = function (e) {
  console.log("ELIMINO!", e.target.parentElement.parentElement.parentElement);
  e.target.parentElement.parentElement.parentElement.remove();
};
