// référence à l'élément <canvas> dans le fichier index.html
const canvas = document.querySelector('canvas')
// référence à l'élément <img id="vaisseau" ... >
const imageVaisseau = document.querySelector('#ship')
// on ajuste le canvas à la taille de la fenêtre
canvas.width = window.innerWidth
canvas.height = window.innerHeight

function main(){
    // c'est ici que ça commence
    console.log('Bonjour tout le monde')

}

// on appelle la fonction principale quand la page est entièrement chargée
window.addEventListener('load', main)
