import styles from "./ItemSB.module.scss"
import { useNavigate } from "react-router-dom"

const ItemSB = ({ title, leftIcon, path }) => {
    let navigate = useNavigate()
    const handleTransferPage = (path) => {
        navigate(path)
    }
    return (
        <div className={`${styles.item} flex items-center`} onClick={() => handleTransferPage(path)} >
            <span className={`${styles.iconLeft} bg-blue-300 me-3`}>{leftIcon}</span>
            <>
                <p className="hover:bg-sky-700">{title}</p>
            </>
        </div>
    )
}

export default ItemSB