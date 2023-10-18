import appwriteService from "../appwrite/conf";
import { Container, PostCard } from "../components";
import { useState, useEffect } from "react";
function AllPost() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        appwriteService
            .getAllPost([])
            .then((posts) => {
                if (posts) setPost(posts.documnets);
            })
            .catch((error) =>
                console.log(
                    "UNABLE TO FETCH ALL POSTS : AllPost.jsx :: ",
                    error
                )
            );
    }, []);
    return (
        <>
            <div className="w-full py-8">
                <Container>
                    <div className="flex flex-wrap">
                        {post.map((posts) => (
                            <div className="p-2 w-1/4" key={posts.$id}>
                                <PostCard key={post.$id} post={post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
}

export default AllPost;
