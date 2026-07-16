import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./js/dashboard_main.js",
  output: {
    'filename': "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
