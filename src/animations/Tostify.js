import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Tostify({ children }) {
    const contextClass = {
        success: "bg-green-400",
        error: "bg-red-400",
        info: "bg-gray-400",
        warning: "bg-orange-400",
        default: "bg-indigo-400",
        dark: "bg-white font-gray-300",
    };

    return (
        <>
            <ToastContainer
                toastClassName={({ type }) =>
                    contextClass[type || "default"] + " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer flex-row"
                }
                bodyClassName={() => "text-sm font-white font-medium block p-3 flex flex-row z-[1000]"}
                position="top-center"
                autoClose={3000}
            />
            {children}
        </>
    );
}

export default Tostify;
