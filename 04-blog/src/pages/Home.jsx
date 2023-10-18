import { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf";
import { Container, PostCard } from "../components";

function Home() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        appwriteService.getAllPost().then((posts) => {
            if (posts) setPost(posts);
        });
    }, []);

    if (post.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                LOGIN TO VIEW POSTS
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
    return (
        <>
            <div className="w-full py-8">
                <Container>
                    <div className="flex flex-wrap">
                        {post.map((posts) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Home;
