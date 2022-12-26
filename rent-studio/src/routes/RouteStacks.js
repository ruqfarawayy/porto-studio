import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '@/src/routes/PrivateRoute'
import { Navigate } from 'react-router-dom'
import URLS from '@/src/enums/urls'
 
// pages
const Page404 = lazy(() => import('../pages/404'))
const Home = lazy(() => import('../pages/Home'))
// const Products = lazy(() => import('../pages/Products'))
// const Contacts = lazy(() => import('../pages/Contacts'))

 
const RouteStacks = () => {
 const loggedIn = () => {
   const token = localStorage.getItem('token') || ''
   return token.length > 0
 }
 const loggedOut = () => {
   const token = localStorage.getItem('token') || ''
   return token === ''
 }
 
 return (
   <Routes>
     <Route exact path={URLS.LANDING} element={<Navigate to={URLS.HOME} />} />
     <Route path={URLS.HOME} element={<Home />} />

    
 
     {/* keep  <Route path="*"> being the last of siblings */}
     <Route path="*" element={<Page404 />} />
   </Routes>
 )
}
export default RouteStacks