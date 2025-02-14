import "./globals.scss";
import { Providers } from "./providers";
import { AppRouter } from "./router";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
