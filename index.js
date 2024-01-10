const input = document.querySelector('#input')
const button = document.querySelector('#button')
const lista = document.querySelector('#lista')

button.addEventListener('click', event => {
    event.preventDefault()
    console.log(input.value)
    lista.innerHTML += `<li>${input.value}</li>`
    input.value = ''
})