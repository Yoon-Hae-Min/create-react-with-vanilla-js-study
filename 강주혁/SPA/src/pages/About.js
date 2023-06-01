import Kreact from "../Kreact";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <div style={{
      display: 'flex',
    }}>
      <NavBar />
      <section>
        <h1>About 페이지입니다.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </section>
    </div>
  )
}