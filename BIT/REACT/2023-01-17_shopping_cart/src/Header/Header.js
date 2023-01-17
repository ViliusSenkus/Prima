import style from "./header.module.css";

const Header = () => {
    return (
        <div className={style.container}>
            <h1>Shopping cart</h1>
            <div>Create, Save, Edit and Delete items to buy</div>
        </div>
    )
}

export default Header