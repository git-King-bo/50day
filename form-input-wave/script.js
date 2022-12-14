const labels = document.querySelectorAll('.form-control label')
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})
var btn = document.getElementById('btn')
var inva = document.getElementsByName('username')[0]
inva.addEventListener('input', (e) => {
  if (e.target.value.length > 0) {
    inva.className = 'foc'
  } else {
    inva.classList.remove('foc')
  }
})
btn.addEventListener('click', () => {
  console.log(document.getElementsByName('username')[0].value, '---')
})
