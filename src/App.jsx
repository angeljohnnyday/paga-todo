import { BrowserRouter } from 'react-router-dom'
import routes, { RouterParent } from './routers/routes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <BrowserRouter>
            <RouterParent routes={routes} />
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App;
