import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Footer from "../../components/Footer";

import Spinner from "../../components/Spinner";

function Layout() {
    const isVisible = useSelector(state => state.profileVisibility.isVisible);
    return (
        <>
            <Header />
            {isVisible ? <Profile /> : null}
            <main className="container max-w-xl mx-auto min-h-full my-15 px-4 pt-20">
                <Suspense fallback={<Spinner />}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </>
    )
}

export default Layout;