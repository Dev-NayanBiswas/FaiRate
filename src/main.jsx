import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactLenis from 'lenis/react'
import { RouterProvider} from 'react-router-dom'
import Routes from './Routes.jsx'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from "react-toastify";
import AuthProvider from './Providers/AuthProvider.jsx'
import {HelmetProvider } from 'react-helmet-async';


axios.defaults.baseURL = 'https://assignment-11-server-rust-eight.vercel.app'
// axios.defaults.baseURL = 'http://localhost:5000'
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root>
      <HelmetProvider>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes}/>
      </QueryClientProvider>
      <ToastContainer position='top-center' />
      </AuthProvider>
      </HelmetProvider>
    </ReactLenis>
  </StrictMode>,
)
