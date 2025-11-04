import logo from './assets/img/dc-logo.png'

function App() {
  return (
    <>
      <header>
        <div className="d-flex justify-content-around py-3">
          <img width={70} className="logo" src={logo} alt="Logo DC" />
          <nav class="navbar navbar-expand navbar-light">
            <div class="nav navbar-nav">
              <a class="nav-item nav-link" href="#">Characters</a>
              <a class="nav-item nav-link border-bottom border-4 border-primary" href="#">Comics</a>
              <a class="nav-item nav-link" href="#">Movie</a>
              <a class="nav-item nav-link" href="#">TV</a> 
              <a class="nav-item nav-link" href="#">Games</a>
              <a class="nav-item nav-link" href="#">Collectibles</a>
              <a class="nav-item nav-link" href="#">Videos</a>
              <a class="nav-item nav-link" href="#">Fans</a>
              <a class="nav-item nav-link" href="#">News</a>
              <a class="nav-item nav-link" href="#">Shop</a>
            </div>
          </nav> 
        </div>
      </header>

      <main></main>
      <footer></footer>
    </>
  )
}

export default App
