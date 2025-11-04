import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <section className='bg-dark'>
          <div className="container d-flex align-items-center">
            <h3 className='text-white'>--&gt; Content goes here &lt;--</h3>
          </div>
        </section>
        <section>
          <div className="container"></div>
        </section>
      </main>

      <footer></footer>
    </>
  )
}

export default App
