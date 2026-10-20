import { createBrowserRouter, RouterProvider } from "react-router";
import GlobalStyle from "./components/GlobalStyle.tsx";
import Root from "./components/Root.tsx";

const router = createBrowserRouter([
    { path: "*", Component: Root },
]);

export default function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}
