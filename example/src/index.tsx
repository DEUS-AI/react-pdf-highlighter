import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(<App />);
