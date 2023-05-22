import { ChatBubbleLeftEllipsisIcon, ChevronUpIcon, HandThumbUpIcon, LinkIcon } from "@heroicons/react/24/outline"
import { cx } from "classix"

interface PostProps {
    title: string
    url: string
    time: number
    by: string
    score: number
    id: number
    kids: number[]
    descendants: number
}

export const Post = ({ post }: { post: PostProps }) => {
    const timeSince = (pastDate: number) => {
        const milliseconds = new Date().getTime() - pastDate * 1000;
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365)


        if (years > 0) {
            return years === 1 ? `${years} year ago` : `${years} years ago`;
        } else if (days > 0) {
            return `${days} days ago`;
        } else if (hours > 0) {
            return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
        } else if (minutes > 0) {
            return `${minutes} minutes ago`;
        } else {
            return `${seconds} seconds ago`;
        }
    }

    const getHostFromUrl = (url: string) => {
        if (!url) return null
        const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        // extract hostname (will be null if no match is found)
        return matches && matches[1];
    }

    return (
        <article className="md:grid grid-cols-[50px_1fr] gap-6 bg-[#121317] text-black p-4 rounded-[5px] md:p-6">

            {post.score && <div className="hidden  md:block">
                <ChevronUpIcon className="w-6 mx-auto text-[#ff6600]" />
                <span className="text-white mx-auto block w-fit text-[20px] font-semibold">{post.score}</span>
            </div>}

            <div>
                <h2 className="text-base md:text-xl font-semibold text-[#EDEEF0]">{post.title}</h2>
                <div className="text-sm md:text-base mt-2 block text-[#C2C2C2] j">
                    <span>by <a className="underline " href={`/users/${post.by}`}>{post.by}</a> {timeSince(post.time)} </span>


                    {/* Desktop Only */}
                    <div className="hidden md:inline-flex">
                        {(post.descendants || post.url) && <span className="mr-2">|</span>}
                        {post.descendants ? <a href={`/posts/${post.id}`} className="underline mr-[10px] ">{post.descendants} comments</a> : null}
                        {post.url &&
                            <a href={post.url} className="flex items-center w-fit" target="_blank" rel="noopener noreferrer">
                                <LinkIcon className="w-4 mr-1" />
                                {getHostFromUrl(post.url)}
                            </a>
                        }

                    </div>
                </div>


                {/* Mobile Only Footer */}
                <div className={cx("flex items-center mt-4 text-[#C2C2C2] md:hidden", post.url && post.descendants > 0 && post.score ? 'justify-between' : 'gap-3')}>
                    {post.score && <div className="flex items-center gap-2 ">
                        <HandThumbUpIcon className="w-[18px]" />
                        {post.score}
                    </div>}
                    {post.descendants > 0 && <a href={`/posts/${post.id}`} className="flex items-center gap-2">
                        <ChatBubbleLeftEllipsisIcon className="w-[18px]" />
                        {post.descendants}
                    </a>}
                    {post.url && <div className="text-sm ">
                        <a href={post.url} className="text-[#C2C2C2]  flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                            <LinkIcon className="w-[18px]" />
                            {getHostFromUrl(post.url)}
                        </a>
                    </div>}
                </div>
            </div>

        </article >
    )
}