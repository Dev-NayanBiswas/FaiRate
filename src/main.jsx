import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactLenis from 'lenis/react'
import { RouterProvider} from 'react-router-dom'
import Routes from './Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={Routes}/>
    </ReactLenis>
  </StrictMode>,
)
