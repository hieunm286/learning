import {treeData, longTreeData} from "./constants";
import {flatten, syntaxHighlight} from "./helpers"

let handlerData = longTreeData

const container = document.querySelector("#original");
const afterConvertBlock = document.querySelector("#after-convert");
const buttonRenderConvertList = document.querySelector("#render-list")

container.innerHTML = `<pre>${syntaxHighlight(JSON.stringify(handlerData, null, 2))}</pre>`
const convertArray = [];

const renderConvertList = () => {
  flatten(convertArray, handlerData)
  afterConvertBlock.innerHTML = `
  <div>
  <pre>${syntaxHighlight(JSON.stringify(convertArray.map(item => ({
    id: item.id,
    name: item.name,
    type: item.type
  })), null, 2))}</pre>
  <button id="rerender-list">Edit one step name</button>
</div>
`

  const button = document.querySelector("#rerender-list")
  console.log(button)
  if (button) {
    button.addEventListener("click", () => {
      renderNewList()
    })
  }
}
if (buttonRenderConvertList) {
  buttonRenderConvertList.addEventListener("click", renderConvertList)
}
// Try edit one step
const renderNewList = () => {
  const ITEM_ID = "qvn1sLLfjG"
  const item = convertArray.find(item => item.id === ITEM_ID)
  console.log(item)
  item.name = "Edit name";
  container.innerHTML = `<pre>${syntaxHighlight(JSON.stringify(handlerData, null, 2))}</pre>`
  afterConvertBlock.innerHTML = `
  <div>
  <pre>${syntaxHighlight(JSON.stringify(convertArray.map(item => ({
    id: item.id,
    name: item.name,
    type: item.type
  })), null, 2))}</pre>
</div>
`


}


