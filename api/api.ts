export interface Post {
    title: string
    url: string
    time: number
    by: string
    score: number
    id: number
    kids: number[]
    descendants: number
}


export const fetchPosts = async (path: string): Promise<Post[]> => {
    const postIds = await fetchIds(path)
    const postRequests = postIds.slice(0, 30).map(fetchSinglePost)
    return await Promise.all(postRequests)

}

export const fetchSinglePost = async (postId: number): Promise<Post> => {
    const postResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`)
    return await postResponse.json()
}


export const fetchIds = async (path: string): Promise<number[]> => {
    const postResponse = await fetch(`https://hacker-news.firebaseio.com/v0${path}.json`)
    return await postResponse.json();
}

export interface Comment {
    "by": string,
    "id": number,
    "kids": Comment[],
    "parent": number,
    "text": string,
    "time": number,
    "type": "comment"

}


export const fetchComment = async (commentId: number): Promise<Comment> => {
    const commentResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
    const comment = await commentResponse.json()

    if (!comment?.kids) {
        return comment
    }

    const resolvedComments = await Promise.all(comment?.kids.map((id: number) => fetchComment(id)))

    return {
        ...comment,
        kids: resolvedComments
    }

}

