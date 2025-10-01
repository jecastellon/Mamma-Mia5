import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navegar = useNavigate()
  return (
    <>
    <Alert>Error 404</Alert>
    <p>🚨 La página no existe ⚠️</p>
    <Button onClick={() => navegar("/")}>Volver</Button>
    </>
  )
}
