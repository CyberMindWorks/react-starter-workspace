import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: [".codeengineprod.blackbucks.me"],
  },
  test: {
    globals: true, // enables `describe`, `it` globally
    environment: "jsdom", // simulate browser DOM
    setupFiles: "./src/setupTests.js", // optional: setup file
    reporters: ["json"],
    outputFile: "result.json",
  },
});
