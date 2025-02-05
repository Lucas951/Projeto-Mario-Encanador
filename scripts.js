const form = document.querySelector(".form-fale-conosco")
const mascara = document.querySelector(".mascara-form")

function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function sairFormulario() {
    mascara.style.visibility = "hidden"
    form.style.transform = "translateX(0)"
    form.style.left = "-260px"
}
