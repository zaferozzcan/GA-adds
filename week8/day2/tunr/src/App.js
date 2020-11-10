import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <form>
        <label htmlFor="title">
          Song
          <input type="text" id="title" />
        </label>
        <label htmlFor="artist">
          Artist
          <input type="text" id="artist" />
        </label>
        <label htmlFor="time">
          Time
          <input type="text" id="time" />
        </label>
        <label>
          <input type="submit" />
        </label>
      </form>

      <main>
        <div>
          <h3>Playlist 1</h3>
          <table>
            <thead>
              <tr>
                <th>Song</th>
                <th>Arist</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Song</td>
                <td>Artist</td>
                <td>Time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
