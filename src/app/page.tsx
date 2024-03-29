import { Ranking } from "./components/ranking";
import { Start } from "./components/start";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Start />
      <div className="absolute right-0 top-0">
        <Ranking />
      </div>
    </main>
  );
}

export default Home;