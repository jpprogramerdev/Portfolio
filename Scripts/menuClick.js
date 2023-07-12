document.getElementById("menuDropdown").addEventListener("click", function(event) {
    event.preventDefault()
    var dropdownContent = event.target.nextElementSibling
    dropdownContent.classList.toggle("show")
})