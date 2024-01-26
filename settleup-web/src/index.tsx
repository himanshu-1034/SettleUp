import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound404 from './components/NotFound404.tsx'
import MainComponent from './components/MainComponent.tsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    errorElement: <NotFound404 />,
    children: [
      {
        path: '/main',
        element: <MainComponent />
      }
    ]
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
