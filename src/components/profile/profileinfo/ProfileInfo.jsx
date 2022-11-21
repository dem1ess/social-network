import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.page_block}>
            <div className={s.image_block}>
            </div>
                <div className={s.page_cover_info}>
                    <div className={s.page_cover_image}>
                        <a className={s.page_cover_image} href="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"/>
                    </div>
                    <div className={s.page_cover_info_main}>
                        <div className={s.page_top}>
                            <h1 className={s.page_name}>DEM1ESS</h1>
                            <div className={s.page_current_info}>Front end the best</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

