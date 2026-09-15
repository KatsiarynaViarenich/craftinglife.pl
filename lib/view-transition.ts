type DocumentWithViewTransitions = Document & {
  startViewTransition?: (callback: () => void) => void
}

export function navigateWithTransition(navigate: () => void) {
  const doc = document as DocumentWithViewTransitions
  if (typeof doc.startViewTransition === "function") {
    doc.startViewTransition(navigate)
  } else {
    navigate()
  }
}
