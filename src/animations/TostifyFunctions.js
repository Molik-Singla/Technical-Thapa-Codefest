import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);
const notifyWarn = (message) => toast.warn(message);

export { notifySuccess, notifyError, notifyWarn };
