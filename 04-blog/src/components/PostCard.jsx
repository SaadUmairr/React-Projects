import appwriteService from "../appwrite/conf";
import { Link } from "react-router-dom";
function PostCard({ $id, title, featuredImage }) {
    return (
        <>
            <Link to={`/post/${$id}`}>
                <div className="w-full bg-gray-500 rounded-xl p-4">
                    <div className="w-full justify-center mb-4">
                        <img
                            src={appwriteService.imagePreview(featuredImage)}
                            alt={title}
                            className="rounded-xl"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">
                        {title}
                    </h2>
                </div>
            </Link>
        </>
    );
}

export default PostCard;
