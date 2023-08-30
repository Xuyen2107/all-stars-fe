import styles from './SideBar.module.scss'
import { SideBarRoutes1 } from '../../../../routes'
import Button from '../../../Button/Button'

const SideBar = () => {
    const NewFeed = [{}]
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={`${styles.caption} text-sm font-medium text-gray-900`}  >
                        <psan>New Feeds</psan>
                    </div>
                    <div className={styles.nav}>
                        {SideBarRoutes1.map((route, index) => {
                            return (
                                <Button path={route.path} className={styles.button}>{route.name}</Button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SideBar