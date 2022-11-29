import React from "react";
import s from "./Users.module.css"
export const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://static01.nyt.com/images/2022/02/25/world/25-HP-zelenskym-promo/25zelensky2-mediumSquareAt3X.jpg',
                followed: false,
                fullname: 'Stanislav Kharchenko',
                status: 'I`m a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://static01.nyt.com/images/2022/02/25/world/25-HP-zelenskym-promo/25zelensky2-mediumSquareAt3X.jpg',
                followed: false,
                fullname: 'Oleg Valov',
                status: 'I`m a boss',
                location: {city: 'Poznan', country: 'Polska'}
            },
            {
                id: 3,
                photoUrl: 'https://static01.nyt.com/images/2022/02/25/world/25-HP-zelenskym-promo/25zelensky2-mediumSquareAt3X.jpg',
                followed: false,
                fullname: 'Anastasia Kutsarieva',
                status: 'I`m a queen',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://static01.nyt.com/images/2022/02/25/world/25-HP-zelenskym-promo/25zelensky2-mediumSquareAt3X.jpg',
                followed: false,
                fullname: 'Tetiana Kharchenko',
                status: 'I`m a mother',
                location: {city: 'Tomusl', country: 'Poland'}
            },
            {
                id: 4,
                photoUrl: 'https://static01.nyt.com/images/2022/02/25/world/25-HP-zelenskym-promo/25zelensky2-mediumSquareAt3X.jpg',
                followed: false,
                fullname: 'Slavik Kutsariev',
                status: 'I`m a driver',
                location: {city: 'Belsko-Byala', country: 'Poland'}
            },
        ])
    }
    return (
        <div className={s.friends_find_list}>
            <div className={s.page_header_block}>
                <div>
                    <input type="text" placeholder="Find friends " className={s.ui_searchInput}/>
                    <button className={s.ui_searchBtn}><svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1a5.5 5.5 0 0 1 4.38 8.82l3.9 3.9a.75.75 0 0 1-1.06 1.06l-3.9-3.9A5.5 5.5 0 1 1 6.5 1zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" fill="currentColor"></path></svg></button>
                </div>
            </div>
            {
                props.users.map(u => <div className={s.friends_find_user} key={u.id}>
                        <img
                            src={u.photoUrl}
                            alt='avatar'/>
                    <div className={s.description_user}>
                        <span>{u.fullname}</span>
                        <span>{u.status}</span>
                        <div><span>{u.location.country}</span><span>{u.location.city}</span></div>
                    </div>
                    {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>)
            }
        </div>
    )
}

