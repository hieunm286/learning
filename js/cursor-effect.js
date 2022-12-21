const selector = document.querySelector("#container")
const screenArea = window.innerWidth * window.innerHeight
const ballArea = 100 * 100
const createSanRound = () => {
  for (let i = 0; i < screenArea / ballArea + 20; i++) {
    const spanElement = document.createElement("span");
    selector.appendChild(spanElement)
  }
}

createSanRound()
