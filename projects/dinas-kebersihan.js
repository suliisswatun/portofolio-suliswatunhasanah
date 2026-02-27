// Scroll ke atas
const scrollBtn = document.getElementById("scrollTopBtn");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Preview gambar
function openPreview(img) {
  const modal = document.getElementById("previewModal");
  const preview = document.getElementById("previewImg");

  preview.src = img.src;
  modal.style.display = "flex";
}

function closePreview() {
  document.getElementById("previewModal").style.display = "none";
}
