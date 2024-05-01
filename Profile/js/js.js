// const inputImage = document.querySelector("#profilePic")
// const input = document.querySelector("#inputImage")
// let img = document.querySelector("img")

// input.addEventListener('change', () => {
//     let reader = new FileReader()
//     reader.readAsDataURL(input.files[0])
//     reader.addEventListener('load', ()=> {
//         display.innerHTML = `<img> src=${reader.result} alt=''/>`
//     })
// })

const txt1 = document.getElementById('usuario')
const btn1 = document.getElementById('usuarioConfirm')
const out1 = document.getElementById('nomeUsuario')

function mudaNome() {
  if (txt1.value == "") {
        out1.innerHTML = "Usuário"
        alert("Digite um nome")
    }
    else {
      out1.innerHTML = txt1.value
      localStorage.save = txt1.value
    }
    
}

const changeButton = document.getElementById('ver-mais');
const imageFile = document.getElementById('inputImage');
const image = document.getElementById('profilePic');

changeButton.addEventListener('click', () => {
  imageFile.click();
});

imageFile.addEventListener('change', () => {
  const file = imageFile.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    image.src = event.target.result;
    localStorage.imagem = event.target.result
  };

  reader.readAsDataURL(file);
});

window.onload = function() {
  if (localStorage.imagem != undefined) {
    image.src = localStorage.imagem;
  };
  if (localStorage.save != undefined) {
    out1.innerHTML = localStorage.save
  };
}