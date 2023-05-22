export const fetchPosts = async (path: string) => {
    const postIds = await fetchIds(path)
    const postRequests = postIds.slice(0, 30).map(fetchSinglePost)
    return await Promise.all(postRequests)

}

export const fetchSinglePost = async (postId: number) => {
    const postResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`)
    return await postResponse.json()
}


export const fetchIds = async (path: string) => {
    const postResponse = await fetch(`https://hacker-news.firebaseio.com/v0${path}.json`)
    return await postResponse.json();
}