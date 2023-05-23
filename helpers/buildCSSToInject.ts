import type { TStyle } from "./constants"

export const buildCSSToInject = (state: TStyle, tabId: number) => {
  let globalStyles = ""
  let paragraphStyles = ""

  for (const [key, value] of Object.entries(state)) {
    // Default values are used for UI only!!
    // If you inject `unset` value to DOM, you break initial styling
    if (value === "unset") break

    // Parse style object and format CSS properties
    if (key === "paragraph-spacing") {
      paragraphStyles += `margin-bottom: ${value}em !important;`
    } else if (key !== "line-height") {
      globalStyles += `${key}: ${value}em !important;`
    } else {
      globalStyles += `${key}: ${value} !important;`
    }
  }

  const payload = {
    target: {
      tabId: tabId,
      allFrames: true
    },
    css: `* { ${globalStyles} } p { ${paragraphStyles} }`
  }

  return payload
}