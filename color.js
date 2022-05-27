const rawcolor = `
#98c379
#c0bdbd
#495162
#5a637580
#e6e6e6
#2e3440
#7f848e
#e05561
#747d9180
#abb2bf
#5c6370
#c5c5c5
#737984
#323842
#3e4452
#1b1d23
#636b78
#ffffffc9
#1d1f23
#dcdcdc
#4d78cc
#42557b
#d7dae0
#30333d
#e06c75
#abb2bf26
#404754
#56b6c2
#1e2227
#ffffff10
#6b717d
#d18f52
#dddddd
#a5e075
#e5c07b
#22262b
#66017a
#3f4451
#67769660
#BE5046
#d2e0ff2f
#42b3c2
#2c313a
#f0a45d
#4cd1e0
#343a45
#61afef
#cc6633
#4dc4ff
#f8fafd
#de73ff
#d19a66
#948B60
#4aa5f0
#6199ff2f
#4e566660
#8cc265
#3b4048
#181a1f
#4b5362
#fff
#ffffff
#c24038
#515a6b
#29244b
#abb2bf30
#c678dd
#457dff
#4f5666
#23272e
#9da5b4
#9A353D
#00809b33
#23252c
#c8c8c859
#f44747
#109868
#2c313c
#528bff
#f0f0f0
#ff616e
#c162de
`

for (const color of rawcolor.split('\n')) {
  if (color.length === 7) {
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.classList.add('text')
    p.innerHTML = color
    div.appendChild(p)
    div.classList.add('box')
    div.title = 'click to copy'
    div.onclick = () => navigator.clipboard.writeText(color)
    div.style.backgroundColor = color
    document.getElementById("root").appendChild(div)
  }
}