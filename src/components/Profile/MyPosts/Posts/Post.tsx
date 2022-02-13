import s from './Post.module.css'

type PostPropsType = {
    message: string
    img: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (

        <div>
            <div className={s.item}>
                <img src={props.img}
                />
                {props.message}
            </div>
            <div><span>like {props.likeCount}</span></div>
        </div>

    )
}

