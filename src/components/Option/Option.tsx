
import styles from "./Option.module.scss";
import { NavLink } from "react-router-dom";

interface Option {
    href: string,
    icon: any,
    name: string,
    key: number
}
const Option = ({ href, icon, name, key }: Option) => {
    return (
        <li className={styles.Option} key={key}>
            <NavLink exact to={href} activeClassName={styles.active}>
                {icon}
                {name}
            </NavLink>
        </li>
    )
}


export default Option;