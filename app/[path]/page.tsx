import { fetchPosts } from "@/api/api"
import { Post } from "@/components/Post"


export default async function Home({ params }: { params: { path: string } }) {
  const posts = await fetchPosts(`/${params.path}`);

  return (
    <main className="p-4 h-screen overflow-y-scroll">
      <ul className="space-y-4 m">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </main>
  )
}
