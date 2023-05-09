import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Check from './pages/Check';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/check" element={<Check />} />
    </Route>
  )
);

const Routes = () => <RouterProvider router={router} />;

export default Routes;