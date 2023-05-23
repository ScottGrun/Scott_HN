import { fetchComment, fetchPosts, fetchSinglePost } from "@/api/api"
import { Comment } from "@/components/Comment";
import { Post } from "@/components/Post"


export default async function PostPage({ params }: { params: { postId: string } }) {
    const post = await fetchSinglePost(parseInt(params.postId));
    const comments = await Promise.all(post.kids.map((id) => fetchComment(id)));

    return (
        <main className="p-4 h-screen overflow-y-scroll">
            <Post post={post} />

            <ul className="space-y-4 mt-6">
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} nested={false} /> </li>)}
            </ul>
        </main>
    )
}
