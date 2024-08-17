function selectItem() {
  const selectElement = document.createElement("select");
  selectElement.id = "level";

  for (let i = 1; i <= 3; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Option ${i}`;
    selectElement.appendChild(option);
  }

  selectElement.addEventListener("change", function () {
    const selectedValue = selectElement.value;
    window.alert(`Selected option: ${selectedValue}`);
  });

  document.body.appendChild(selectElement);

  return selectElement;
}

selectItem();
