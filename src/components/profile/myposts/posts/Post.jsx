import s from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg" alt="avatar"/>
                <div>{props.message}</div>
                <div>
                    <span>Like {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}