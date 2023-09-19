import styles from "./ItemSB.module.scss";
import { useNavigate } from "react-router-dom";

const ItemSB = ({ title, leftIcon, path }) => {
  let navigate = useNavigate();
  const handleTransferPage = (path) => {
    navigate(path);
  };
  return (
    <div
      className={`${styles.item} flex items-center hover:bg-gray-200 cursor-pointer rounded-lg  `}
      onClick={() => handleTransferPage(path)}
    >
      <span className={`${styles.iconLeft} bg-blue-300 me-3`}>{leftIcon}</span>
      <>
        <p>{title}</p>
      </>
    </div>
  );
};

export default ItemSB;
