import path from "path";
import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ đổi đúng repo name của bạn
const GHP_REPO = "frontend";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  const isGhPages = mode === "gh"; // mình sẽ tạo script build:gh dùng mode này
  const base = isGhPages ? `/${GHP_REPO}/` : "/";

  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react()],
    base,
    define: { },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
