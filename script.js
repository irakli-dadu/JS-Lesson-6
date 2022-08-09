let hamburger = document.querySelector(".hamburger")
let navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")

})

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")

}))

// -------------


let lineInput = document.querySelector('.inputClass')

let buttonAdd = document.querySelector('.button')

let inputUl = document.querySelector('.ghost-ul')

let formBox = document.querySelector('.form-box')

let clearBtn = document.createElement('button')
     clearBtn.textContent = 'Clear All'
     clearBtn.style.color = 'crimson'
     clearBtn.addEventListener('click', function() {
        inputUl.innerHTML = ' '
     })

     formBox.appendChild(clearBtn)


buttonAdd.addEventListener('click', function() {
    let response = lineInput.value

    if (response == ' ') {
        alert('type')
        return
    }

     let newLi = document.createElement('li')
     newLi.classList.add('new-li')

     
     let delBtn = document.createElement('button')
     delBtn.textContent = 'delete'
     delBtn.addEventListener('click', function() {
        newLi.remove()
     })
    newLi.textContent = response

    inputUl.appendChild(newLi)

    newLi.appendChild(delBtn)

    lineInput.value = ' '
})










lineInput.addEventListener('focus', function(objectEvent) {
    objectEvent.target.style.border = '2px solid crimson'
})