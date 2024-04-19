import { Outlet, Link } from "react-router-dom";
import styles from './NavBar.module.css';
import Container from "./Container";

export default function NavBar(){
    return(
        <>

            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/livros'>LIVROS</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/novolivro'>NOVO LIVRO</Link>
                    </li>
                </ul>
            </Container>

            <Outlet></Outlet>
        </>
    )
}