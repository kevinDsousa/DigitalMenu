import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RegisterUser } from "../pages/RegisterUser"
import { RecoverPasswordUser } from "../pages/RecoverPasswordUser"
import { Atutentication } from "../layout/Autentication"

export const Ways = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/login-user" element={<Atutentication />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/recover-password" element={<RecoverPasswordUser />} />
        </Routes>
      </BrowserRouter>
    )
}