
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"

import Home from "./pages/Home"
import Plantas from "./pages/Plantas"
import CadastroPlanta from "./pages/CadastroPlanta"
import CadastroUsuario from "./pages/CadastroUsuario"
import Login from "./pages/Login"
import Calendario from "./pages/Calendario"
import Artigos from "./pages/Artigos"
import Perfil from "./pages/Perfil"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/plantas" element={<Plantas />} />
          <Route path="/cadastro" element={<CadastroPlanta />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
