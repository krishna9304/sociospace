import "./App.css";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import api from "./api/api";
import { useCurrentUser } from "./hooks/user";

const pages: any = import.meta.glob("./pages/**/*.tsx", {
  eager: true,
});

const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

  const { setUser } = useCurrentUser();

  const fetchUser = async () => {
    try {
      const data = await api.getAccount();
      setUser({ ...data });
      toast("Logged in", { icon: "✅" });
    } catch (error) {}
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <MantineProvider
      theme={{
        colorScheme,
        primaryColor: "cyan",
        loader: "bars",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={() =>
          setColorScheme(colorScheme === "light" ? "dark" : "light")
        }
      >
        <RouterProvider router={router} />
        <Toaster />
      </ColorSchemeProvider>
    </MantineProvider>
  );
}

export default App;
