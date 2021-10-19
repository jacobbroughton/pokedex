import { useEffect, useState } from "react"
import styled from "@emotion/styled"

export const ThemeToggle = () => {

  type BodyType = string | undefined

  const [activeTheme, setActiveTheme] = useState<BodyType>(document.body.dataset.theme)
  const inactiveTheme = activeTheme === "light" ? "dark" : "light"

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme)
  }, [activeTheme])

  const Button = styled.button`
    background: transparent;
    border: 0;
    font-size: 1rem;
    height: 28px;
  `

  return (
    <Button onClick={() => setActiveTheme(inactiveTheme)} >
      {activeTheme === "light" ? <span>🌙</span> : <span>☀️</span>}
    </Button>
  )
}