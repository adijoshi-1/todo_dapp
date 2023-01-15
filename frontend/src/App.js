import { useState } from 'react'
import 'bulma/css/bulma.min.css'
import { Nav } from './components/Nav'
import { Main } from './components/Main'

export const App = (props) => {
  const [account, setAccount] = useState('')
  return (
    <>
      <Nav account={account} setAccount={setAccount} />
      <Main account={account} />
    </>
  )
}
