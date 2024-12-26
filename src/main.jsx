import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactLenis from 'lenis/react'
import { RouterProvider} from 'react-router-dom'
import Routes from './Routes.jsx'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CURDProvider from './Providers/CURDProvider.jsx'
import { ToastContainer } from "react-toastify";
import AuthProvider from './Providers/AuthProvider.jsx'


axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true;
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root>
      <AuthProvider>
      <CURDProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes}/>
      </QueryClientProvider>
      </CURDProvider>
      <ToastContainer position='top-center' />
      </AuthProvider>
    </ReactLenis>
  </StrictMode>,
)
