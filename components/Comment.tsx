import { Comment as CommentType } from '@/api/api'
import { timeSince } from '@/helpers/timeSince'
import { cx } from 'classix'
import Image from 'next/image'
import React, { FC } from 'react'

type CommentProps = {
    comment: CommentType
    nested: boolean
}

export const Comment: FC<CommentProps> = ({ comment, nested }) => {
    return comment ? (

        <article className={cx("grid md:grid-cols-[max-content_1fr] gap-2  bg-[#101417]  rounded-[5px]", !nested && "p-2")}>
            {/* Pic & Name */}
            <div className="grid-rows-[max-content_1fr] gap-2 hidden md:grid">
                <Image
                    width={28}
                    height={28}
                    alt={`${comment.by} auto generated profile picture`}
                    className="bg-orange-300 w-[28px] h-[28px] rounded-full overflow-hidden mt-1"
                    src={`https://robohash.org/${comment.by}.webp?ignoreext=false&size=64x64`}
                    loading="lazy"
                />

                <div className="md:block border-r-[2px] w-[1px] h-full mx-auto" />
            </div>
            <div>
                <div className="flex items-center gap-2">

                    <div>
                        <a className="font-bold text-xs md:text-sm tracking-[-0.18px] " href="#">@{comment.by}</a>
                        <span className="font-normal text-xs text-primary-text block">{timeSince(comment.time)}</span>
                    </div>
                </div>
                {comment.text && <div className="prose prose-sm max-w-none mt-2 pb-2 text-white" dangerouslySetInnerHTML={{ __html: comment.text }}>
                </div>}
                <ul className="border-l-2 md:border-none">
                    {
                        comment?.kids && comment.kids.map((comment) => (
                            <li key={comment.id} className="pt-1 md:ml-[-12px] pl-3 md:pl-0">
                                <Comment comment={comment} nested={true} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </article>

    ) : null
}