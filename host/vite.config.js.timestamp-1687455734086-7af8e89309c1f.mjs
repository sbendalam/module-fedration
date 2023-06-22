// vite.config.js
import { defineConfig } from "file:///D:/poc/host/node_modules/vite/dist/node/index.js";
import react from "file:///D:/poc/host/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///D:/poc/host/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig(
  {
    plugins: [
      react(),
      federation({
        remotes: {
          vueRemote: "http://localhost:5001/assets/vueButton.js",
          remoteApp: "http://localhost:5002/assets/remoteEntry.js"
        },
        shared: ["vue", "react", "react-dom"]
      })
    ],
    build: {
      target: "esnext"
    }
  }
);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwb2NcXFxcaG9zdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccG9jXFxcXGhvc3RcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3BvYy9ob3N0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gXCJAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvblwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgcmVtb3Rlczoge1xuICAgICAgICB2dWVSZW1vdGU6ICdodHRwOi8vbG9jYWxob3N0OjUwMDEvYXNzZXRzL3Z1ZUJ1dHRvbi5qcycsXG4gICAgICAgIHJlbW90ZUFwcDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMi9hc3NldHMvcmVtb3RlRW50cnkuanMnLFxuICAgICAgfSxcbiAgICAgIHNoYXJlZDogWyd2dWUnLCdyZWFjdCcsJ3JlYWN0LWRvbSddXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0J1xuICB9XG59LFxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sZ0JBQWdCO0FBR3ZCLElBQU8sc0JBQVE7QUFBQSxFQUFhO0FBQUEsSUFFMUIsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsV0FBVztBQUFBLFVBQ1gsV0FBVztBQUFBLFFBQ2I7QUFBQSxRQUNBLFFBQVEsQ0FBQyxPQUFNLFNBQVEsV0FBVztBQUFBLE1BQ3BDLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFDQTsiLAogICJuYW1lcyI6IFtdCn0K
