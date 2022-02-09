import React, { useState, useEffect } from "react";
import PostLists from "../components/PostLists";
import postStore from "../stores/postStore";
import { getPosts } from "../actions/postActions";

function PostPage() {
    const [posts, setposts] = useState(postStore.getPosts());
    useEffect(() => {
        postStore.addChangeListener(onChange);
        if (postStore.getPosts().length === 0) getPosts();
        return () => postStore.removeChangeListener(onChange);
    }, []);


    function onChange() {
        setposts(postStore.getPosts());
    }
    return (
        <div>
            <PostLists posts={posts} />
        </div>
    );
}

export default PostPage;
