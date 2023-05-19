import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Spinner from "../../components/Spinner";

function Layout() {
    return (
        <>
            <Header />

            <main className="container max-w-xl mx-auto min-h-full my-15 px-4">
                <Suspense fallback={<Spinner />}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </>
    )
}

export default Layout;