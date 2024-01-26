import { ReactElement } from "react"
import { Outlet } from "react-router-dom"

function App():ReactElement {

  return (
    <>
      Hi
      <section>
        <Outlet/>
      </section>
    </>
  )
}

export default App
