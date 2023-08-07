import { Route, Routes } from "react-router-dom"
import { RecoverPasswordUser } from "../pages/RecoverPasswordUser"
import { ResetPasswordUser } from "../pages/ResetPasswordUser"
import { LoginUser } from "../pages/LoginUser"
import { useContext } from "react"
import { LoginContext } from "../App"
import { AutenticationLayout } from "../layout/AutenticationLayout"
import { DashboardLayout } from "../layout/DashboardLayout"
import { NotFound } from "../pages/NotFound"

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
          <Route path="/ver-produtos" element={<DashboardLayout />} />
          <Route path="/cadastrar-produto" element={<DashboardLayout />} />
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