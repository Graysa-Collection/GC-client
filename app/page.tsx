import Link from "next/link";
import style from "./page.module.scss";

const { home } = style;

const Home = () => {
  return (
    <main className={home}>
       <h1>Graysa Collection Home Page</h1>
       <p><Link href="/about">About</Link></p>
    </main>
  );
}

export default Home;
