export const IF_ELSE_CONDITION = "if-else-condition";
export const LOOP_BY_COUNT = "loop-by-count";
export const LOOP_FROM_ELEMENT_BY_SELECTOR = "loop-from-element-by-selector";
export const LOOP_FROM_ELEMENT_BY_XPATH = "loop-from-element-by-xpath";
export const LOOP_FROM_ARRAY_OF_VARIABLE = "loop-from-array-of-variable";

export function isLoopStep(step) {
  return (
    step.options.type === LOOP_BY_COUNT ||
    step.options.type === LOOP_FROM_ARRAY_OF_VARIABLE ||
    step.options.type === LOOP_FROM_ELEMENT_BY_SELECTOR ||
    step.options.type === LOOP_FROM_ELEMENT_BY_XPATH
  );
}

export function ifElseStep(step) {
  return step.options.type === IF_ELSE_CONDITION;
}

export function flatten(destArray, nodeList) {
  nodeList.forEach((node) => {
    destArray.push(node);
    let n;
    if (node.type === "block") {
      n = node.sections
    } else if (node.type === "section") {
      n = node.steps
    } else if (isLoopStep(node)) {
      n = node.options.steps
    } else if (ifElseStep(node)) {
      n = [...node.options.stepsIfSatisfyCondition, ...node.options.stepsIfNotSatisfyCondition]
    } else {
      n = []
    }
    flatten(destArray, n || []);
  });
}


export function syntaxHighlight(json) {
  json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    },
  );
}

