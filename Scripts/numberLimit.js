const numberInput = document.getElementById("numberContact");

numberInput.addEventListener("input", function() {
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength);
  }
});
