import { render, screen } from "@testing-library/react"
import { Header } from "./index.jsx"

describe("Header", () => {
  test("Deveria renderizar o componente", () => {
    expect(render(<Header/>)).toBeTruthy()
  })

  test("Deveria renderizar o componente com a classe correta", () => {
    const { container } = render(<Header/>)
    
    expect(container.firstChild).toHaveClass("header")
  })
})