function media() {
  var numberone = parseFloat(document.getElementById('numberone').value)
  var numbertwo = parseFloat(document.getElementById('numbertwo').value)
  var numberthree = parseFloat(document.getElementById('numberthree').value)

  var resultado = (numberone + numbertwo + numberthree) / 3
  typeof resultado

  document.getElementById(
    'resultado'
  ).innerText = `O resultado entre ${numberone}, ${numbertwo} e ${numberthree} é ${resultado}.`
}
