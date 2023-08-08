import { Layout } from "antd"
import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
    return (
        <Layout>
            <Header />
            <Outlet />
        </Layout>
    )
}