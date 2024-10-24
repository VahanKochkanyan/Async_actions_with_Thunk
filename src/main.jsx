import { Provider } from 'react-redux'; 
import './index.css';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Users } from './features/users/users.jsx';
import { AddUser } from './features/AddUser.jsx';
import { StrictMode } from 'react';
import { store } from './store.js';
import "./App.css"

const routes = createBrowserRouter([

  { 
    path: '/',
    element: <Users />
  },

  {
    path: '/add',
    element: <AddUser />
  }
  
]);


const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Provider store={store}> 
      <RouterProvider router = {routes}>
      </RouterProvider>
    </Provider>
  </StrictMode>
);