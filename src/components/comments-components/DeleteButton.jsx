import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteComment } from "../../functions/api";

// <<<<< DELETE COMMENT COMPONENT >>>>> ------
const DeleteButton = ({ comment_id, onDelete }) => {
    const { user } = useContext(UserContext);
    const [ error, setError ] = useState(null);

    // <<<<< HANDLE THE DELETION COMPONENT >>>>> ------
    const handleDelete = async () => {
        try {
            await deleteComment(comment_id);
            onDelete(comment_id);
        } catch (error) {
            setError("Failed to Delete Comment, Please Try Again.")
        }
    };

    // <<<<< CONDITIONAL RETURN >>>>> ------
    if (error) return <p>{error}</p>;

    // <<<<< MAIN RETURN >>>>> ------
    return (
        user && (
            <button
            onClick={handleDelete}
            className="absolute bottom-5 right-5 text-white hover:font-bold font-semibold bg-red-500 rounded-full px-4 transition-transform transform hover:scale-110"
            >
                Delete
            </button>
        )
    );
};

export default DeleteButton;