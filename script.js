const enviou = (event) => {
    event.preventDefault()
    alert('Enviando form')
}
document.querySelector('form').addEventListener('submit', enviou)
