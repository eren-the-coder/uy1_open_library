import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./pages/Feed/Feed";
import AddPostForm from "./pages/AddPostForm/AddPostForm";
import "./styles/global.css";
import RootLayout from "./pages/RootLayout/RootLayout";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Feed /> },
      { path: "contribute", element: <AddPostForm /> },
    ],
  },
  {
    path: "*",
    element: <>
      <Header />
      <div className="page">
        <NotFound />
      </div>
      <Footer />
    </>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
