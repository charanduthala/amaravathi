import { createBrowserRouter, Navigate, ScrollRestoration } from "react-router-dom";

import App from '../../App'
// import ScrollToTop from "../../util/ScrollToTop";

const router = createBrowserRouter([
    {
        path: "/", element: <Navigate to="/amaravathi" replace />
    },
    {
        path: "/amaravathi",
        element: <>
            <ScrollRestoration />
            <App />
        </>,
        children: [
            {
                path: "",
                lazy: async () => {
                    const { default: Home } = await import('../pages/home/Home')
                    return { element: <Home /> }
                }
            },
            {
                path: "about",
                lazy: async () => {
                    const { default: About } = await import('../pages/about/About')
                    return { element: <About /> }
                }
            },
            {
                path: "menu",
                lazy: async () => {
                    const { default: Menu } = await import('../pages/menu/Menu')
                    return { element: <Menu /> }
                }
            },
            {
                path: "order",
                lazy: async () => {
                    const { default: Order } = await import('../pages/order/Order')
                    return { element: <Order /> }
                }
            },
            {
                path: "reserve",
                lazy: async () => {
                    const { default: Reserve } = await import('../pages/reserve/Reserve')
                    return { element: <Reserve /> }
                }
            },
            {
                path: "contact",
                lazy: async () => {
                    const { default: Reserve } = await import('../pages/contact/Contact')
                    return { element: <Reserve /> }
                }
            },
            {
                path: "catering",
                lazy: async () => {
                    const { default: Catering } = await import('../pages/catering/Catering')
                    return { element: <Catering /> }
                }
            },
            {
                path: "events",
                lazy: async () => {
                    const { default: Event } = await import('../pages/events/Event')
                    return { element: <Event /> }
                }
            }
        ]
    }
])

export default router