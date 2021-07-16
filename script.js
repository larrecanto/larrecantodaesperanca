// abre modal para exibir a imagem em tamanho inteiro
document.addEventListener("click",function (e){
  if(e.target.classList.contains("gallery-item")){
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
      myModal.show();
  }
})

// mostra mais da galeria
function verMais() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("mais");
  var btnText = document.getElementById("ver-botao");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<img src=\"imgs/angle-down.png\">";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<img src=\"imgs/angle-up.png\">";
    moreText.style.display = "inline";
  }
}