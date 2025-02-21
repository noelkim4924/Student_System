import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './routes/index'
import { RouterProvider } from 'react-router-dom'; // ✅ 올바른 import로 수정
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
