import styles from './SideBar.module.scss'
import Button from '../../../Button/Button'
import NavLeft from '../../NavLeft'
import { headerHeight } from '../../../../utils'

const MenuSideBar = [
    {
        icon: <i class="fa-solid fa-tv"></i>,
        title: "Newsfeed",
        to: "/newfeed"
    },
    {
        icon: <i class="fa-solid fa-ribbon"></i>,
        title: "Badges",
        to: "/badge",
    },
    {
        icon: <i class="fa-solid fa-globe"></i>,
        title: "Explores Stories",
        to: "/stories"
    },
    {
        icon: <i class="fa-regular fa-heart"></i>,
        title: "Popular Groups",
        to: "/popular"
    },
    {
        icon: <i class="fa-regular fa-user"></i>,
        title: "Author Profile",
        to: "/profile"
    },
]
const morePages = [
    {
        icon: <i class="fa-solid fa-inbox"></i>,
        title: "Email Box",
        to: "/email"
    },
    {
        icon: <i class="fa-solid fa-house"></i>,
        title: "Near Hotel",
        to: "/hotel"
    },
    {
        icon: <i class="fa-solid fa-location-dot"></i>,
        title: "Latest Event",
        to: "/event"
    },
    {
        icon: <i class="fa-brands fa-youtube"></i>,
        title: "Live Stream",
        to: "/live"
    },
]
const Account = [
    {
        icon: <i class="fa-solid fa-inbox"></i>,
        title: "Author Profile",
        to: "/profile"
    },
    {
        icon: <i class="fa-solid fa-house"></i>,
        title: "Author Profile",
        to: "/profile"
    },
    {
        icon: <i class="fa-solid fa-location-dot"></i>,
        title: "Author Profile",
        to: "/profile"
    },

]
const SideBar = () => {


    return (

        <div className={`${styles.content}`}>
            <div className={styles.container} >
                <div className={styles.wrapper}>
                    <NavLeft >
                        {MenuSideBar.map((item, index) => {
                            return (
                                <Button leftIcon={item.icon} to={item.to}>
                                    {item.title}
                                </Button>
                            )
                        })}
                    </NavLeft>
                </div>
                <div>
                    <NavLeft >
                        {morePages.map((item, index) => {
                            return (
                                <Button leftIcon={item.icon} to={item.to}>
                                    {item.title}
                                </Button>
                            )
                        })}
                    </NavLeft>
                </div>
                <div>
                    <NavLeft>
                        {Account.map((item, index) => {
                            return (
                                <Button leftIcon={item.icon} to={item.to}>
                                    {item.title}
                                </Button>
                            )
                        })}
                    </NavLeft>
                </div>
            </div>
        </div>
    )
}


export default SideBar