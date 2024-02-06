import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/MainLayout.tsx";
import urlPath from "./constants/UrlPath.ts";
import Login from "./pages/login";
import {ToastContainer} from "react-toastify";
import Dashboard from "./pages/dashboard";
import Driver from "./pages/driver";
import User from "./pages/user";
import BookCar from "./pages/book-car";
import TripWasMatch from "./pages/trip-was-match/index.tsx";
import TripWasCanceled from "./pages/trip-was-canceled/index.tsx";
import UserPayment from "./pages/user-payment/index.tsx";
import DriverPayment from "./pages/driver-payment/index.tsx";
import ManagePlatformCosts from "./pages/manage-platform-costs/index.tsx";
import Role from "./pages/role";

function App() {

    return (
        <>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path={urlPath.DASHBOARD} element={<Dashboard/>}/>
                    <Route path={urlPath.DRIVER} element={<Driver/>}/>
                    <Route path={urlPath.USER} element={<User/>}/>
                    <Route path={urlPath.BOOK_CAR} element={<BookCar/>}/>
                    <Route path={urlPath.TRIP_WAS_MATCHED} element={<TripWasMatch/>}/>
                    <Route path={urlPath.TRIP_WAS_CANCELED} element={<TripWasCanceled/>}/>
                    <Route path={urlPath.USER_PAYMENT} element={<UserPayment/>}/>
                    <Route path={urlPath.DRIVER_PAYMENT} element={<DriverPayment/>}/>
                    <Route path={urlPath.MANAGE_PLATFORM_COSTS} element={<ManagePlatformCosts/>}/>
                    <Route path={urlPath.ROLES} element={<Role/>}/>
                </Route>
                <Route path={'*'} element={<div>{'Not found'}</div>}/>
                <Route path={urlPath.LOGIN} element={<Login/>}/>
            </Routes>
            <ToastContainer/>
        </>
    )
}

export default App
