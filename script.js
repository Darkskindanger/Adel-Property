// Auto slider
let counter = 1
setInterval(function () {
  document.getElementById('radio' + counter).checked = true
  counter++

  if (counter > 4) {
    counter = 1
  }
}, 5000)

let navBtn = document.getElementById('nav-menu')
let closeBtn = document.getElementById('closeMenu')

function navMenu() {
  navBtn.classList.add('active')
  if ((navBtn.classList.contains = 'active')) {
    document.getElementById('nav-popout-menu').style.display = 'flex'
    document.getElementById('nav-menu').style.display = 'none'
  } else {
    document.getElementById('nav-popout-menu').style.display = 'none'
  }
}
function closeMenu() {
  closeBtn.classList.remove('active')
  if ((closeBtn.classList.contains = 'active')) {
    document.getElementById('nav-popout-menu').style.display = 'none'
    document.getElementById('nav-menu').style.display = 'block'
  } else {
    document.getElementById('nav-popout-menu').style.display = 'flex'
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hid')
const hiddenElements2 = document.querySelectorAll('.hid2')
hiddenElements.forEach((el) => observer.observe(el))
hiddenElements2.forEach((el) => observer.observe(el))

const focusList = document.querySelector('.sliderContainer')

const focusdescription = document.querySelector('#focusDescription')
const focusName = document.querySelector('#focusName')
const focusImg = document.querySelector('#focusImg')
const preSelectionHeader = document.querySelector('#preProjectSelectionHeader')

console.log(focusImg)

focusList.addEventListener('click', (evt) => {
  // Event delegating the parent Div
  const element = evt.target.closest('.item')
  //   selecting/delegating the image tag
  let imageTag = evt.target.closest('img')
  //   selecting/delegating the span tag
  let cost = document.querySelector('#projectPrice')
  let buildTime = document.querySelector('#projectTime')
  let location = document.querySelector('#projectLocation')
  if (element) {
    focusName.innerText = element.dataset.name
    focusdescription.innerText = element.dataset.description
    focusdescription.classList.remove('text-white')
    focusImg.src = imageTag.src
    focusImg.style.display = 'block'
    preSelectionHeader.style.display = 'none'

    cost.innerText = element.dataset.price
    buildTime.innerText = element.dataset.time
    location.innerText = element.dataset.location
  }
})

// Form validation
const inputs = document.querySelectorAll('input')
const form = document.querySelector('#contactForm')
const submitBtn = document.querySelector('#submitBtn')

// Regex
const patterns = {
  phoneNumber: new RegExp(/^(\+61|04)\d{8}$/gi),
  fullName: new RegExp(/^(?!\s*$)[\p{L} .'-]+$/iu),
  email: new RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/),
}
//n1. the patterns above must match with the 'name' attribute of the input fields to ensure they are testing the correct regex.

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid'
    submitBtn.disabled = false
  } else {
    field.className = 'invalid'
    submitBtn.disabled = true
  }
  // n2.Above tests the regex with the value in the input field with every key
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.name]) //n1 - here the name is used

    //n3. Above calls the validate function with every keyUp event
  })
})
// set up form submitting
form.addEventListener('submit', (e) => {
  e.preventDefault
  if (inputs.className === 'invalid') {
    return false
  }
})
