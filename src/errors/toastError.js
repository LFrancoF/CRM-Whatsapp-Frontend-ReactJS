import { toast } from "react-toastify";

const toastError = err => {
	const errorMsg = err.response?.data?.message || err.response?.data?.error;
	if (errorMsg) {
        toast.error(errorMsg, {
            toastId: errorMsg,
        });
	} else {
		toast.error("An error occurred!");
	}
};

export default toastError;
