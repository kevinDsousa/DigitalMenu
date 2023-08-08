import { Route, Routes } from "react-router-dom"
import { RecoverPasswordUser } from "../pages/RecoverPasswordUser"
import { ResetPasswordUser } from "../pages/ResetPasswordUser"
import { LoginUser } from "../pages/LoginUser"
import { useContext } from "react"
import { LoginContext } from "../App"
import { AutenticationLayout } from "../layout/AutenticationLayout"
import { DashboardLayout } from "../layout/DashboardLayout"
import { NotFound } from "../pages/NotFound"
import { Pedidos } from "../pages/Pedidos"
import { Produtos } from "../pages/Produtos"
import { Cadastrar } from "../pages/Cadastrar"

export const Ways = () => {

  const loginContextValue = useContext(LoginContext);

  if (loginContextValue === null) {
    throw new Error("LoginContext não foi provido corretamente");
  }

  const { logado } = loginContextValue;

  return (
    <Routes>
      {logado ? (
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/cadastrar-produto" element={<Cadastrar />} />
          <Route path="/ver-produtos" element={<Produtos />} />
        </Route>
      ) : (
        <Route path="/" element={<AutenticationLayout />}>
          <Route path="/" element={<LoginUser />} />
          <Route path="/recover-password" element={<RecoverPasswordUser />} />
          <Route path="/reset-password" element={<ResetPasswordUser />} />
        </Route>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}