import styles from "./Aside.module.scss";
import { BiPlanet, BiHeart } from "react-icons/bi";
import Option from "../Option/Option";

const optionsList = [
    {
        name: "Planetas",
        href: "/",
        Icon: <BiPlanet size={"2rem"} color={"#01A3FF"} />,
    },
    {
        name: "Favoritos",
        href: "/favoritos",
        Icon: <BiHeart size={"2rem"} color={"#01A3FF"} />,
    },
];

export const Aside = () => {
    return (
        <aside className={styles.Aside}>
            <div className={styles.AsideSession}>
                <h1>Star Wars.</h1>
            </div>
            <nav>
                <ul className={styles.OptionsContainer}>
                    {optionsList.map((option, value) =>
                        <Option
                            key={value}
                            name={option.name}
                            href={option.href}
                            icon={option.Icon}
                        />
                    )}
                </ul>
            </nav>
        </aside>
    )
}
