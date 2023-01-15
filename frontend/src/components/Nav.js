/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

export const Nav = ({ account, setAccount }) => {
  const connectWallet = async () => {
    try {
      const { ethereum } = window
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setAccount(accounts[0])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          Todo Dapp
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className="button is-primary"
                onClick={(e) => {
                  e.preventDefault()
                  connectWallet()
                }}
              >
                <strong>{account ? 'Connected' : 'Connect Wallet'}</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
