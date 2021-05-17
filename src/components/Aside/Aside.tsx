import styles from "./Aside.module.scss";
import Option from "../Option/Option";
import { menu } from '../../utils/mockData';



export const Aside = () => {
    return (
        <aside className={styles.Aside}>
            <div className={styles.AsideSession}>
                <h1>Star Wars.</h1>
            </div>
            <nav>
                <ul className={styles.OptionsContainer}>
                    {menu.map((option, value) =>
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
