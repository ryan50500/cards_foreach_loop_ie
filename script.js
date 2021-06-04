const panels = document.querySelectorAll('.panel')




// (es6 not compatible for IE)

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         // removing active class from all cards first
//         removeActiveClasses()
//         // then add active to the clicked card
//         panel.classList.add('active')
//     })
// })





// (array prototype fix for IE)

Array.prototype.slice.call(panels).forEach(function(panel) {
    panel.addEventListener('click', function() {
        // removing active class from all cards first
        removeActiveClasses()
        // then add active to the clicked card
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}