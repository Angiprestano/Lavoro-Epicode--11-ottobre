const deleteButtons = document.querySelectorAll("button");
deleteButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    button.remove();
  });
});

deleteButton();
