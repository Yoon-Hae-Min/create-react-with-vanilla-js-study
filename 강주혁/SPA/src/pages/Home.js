import Kreact from "../Kreact";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
    }}>
      <NavBar />
      <section>
        <h1>메인 페이지 입니다.</h1>
        <p>ASDFASDF</p>
      </section>
    </div>
  );
}
