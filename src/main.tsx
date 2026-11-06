import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { trackAppOpened } from "./tracking.ts";

trackAppOpened();

createRoot(document.getElementById("root")!).render(<App />);
