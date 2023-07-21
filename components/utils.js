export const removeAllExceptCharacter = (text, character) => {
  const lines = text.split("\n")
  const filteredLines = lines.filter((line) => line.includes(character))
  const newText = filteredLines.join("\n")
  return newText
}

export const blinkingCursorStyles = {}
