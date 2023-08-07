import { Outlet } from "react-router-dom";

export const AutenticationLayout = () => {
    return (
        <>
            <section className="bg-slate-900 bg-opacity-80 flex w-1/2 h-screen">
                <Outlet />
            </section>
        </>
    )
}