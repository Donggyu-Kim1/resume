function toggleContent(id, button) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "후기 접기";
    } else {
        content.style.display = "none";
        button.textContent = "후기 보기";
    }
}