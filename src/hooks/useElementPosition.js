import { useState, useEffect } from "react"

export function useElementPosition(el) {
  function getElement(x, y) {
    return {
      x: x,
      y: y,
    }
  }
  const [elementPos, setElementPos] = useState(getElement)
  useEffect(() => {
    function handlePosition() {
      let element = el.current
      let x =
        element.getBoundingClientRect().left +
        document.documentElement.scrollLeft +
        element.offsetWidth / 2
      let y =
        element.getBoundingClientRect().top +
        document.documentElement.scrollTop +
        element.offsetHeight / 2
      setElementPos(getElement(x, y))
    }
    handlePosition()
  }, [el])
  return elementPos
}

export default useElementPosition
