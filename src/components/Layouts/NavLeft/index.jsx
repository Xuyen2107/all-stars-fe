import styles from "./NavLeft.module.scss"

const NavLeft = ({ children }) => {
    return (
        <div className={`${styles.wrapperLeft} bg-slate-200 bg-transparent rounded-lg `}>
            <div className={`${styles.caption} text-sm font-medium text-gray-900`}>
                <span>Newfeed</span>
            </div>
            <div className={styles.nav}>
                {children}
            </div>
        </div>
    )
}
export default NavLeft