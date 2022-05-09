import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
            <img src="https://www.pics4learning.com/images/pics-banner1-1300.jpg"/>
            </div>
                <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}

