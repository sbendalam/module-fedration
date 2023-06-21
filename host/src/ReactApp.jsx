import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createApp, defineAsyncComponent, render, h, ref } from "vue";

import Button from "remoteApp/Button";
function ReactApp() {
  const [navFromVue, setnavFromVue] = useState("Home");
  const VueRef = useRef(null);
  function changeCount(val) {
    setnavFromVue(val);
  }
  // useEffect()
  useEffect(() => {
    let tempApp;
    // Replace "my_vue_app" with the name specified in your Vue config
    if (tempApp?.current) {
      tempApp?.current?.unmount();
    }

    async function loadVueComponent() {
      const MyButton = await import("vueRemote/Button"); // Replace "my_vue_app" with the name specified in your Vue config

      tempApp = createApp(MyButton.default, {
        vueNav: navFromVue,
        onNavChange: changeCount,
      });
      tempApp.mount(VueRef?.current);
    }
    loadVueComponent();

    return () => {
      tempApp?.unmount();
    };
  }, [navFromVue]);
  return (
    <>
        <div ref={VueRef}></div>
      <div>
       
      </div>
      <Button />

      <h1>Vite + React</h1>
      <div className="card">
          path is {navFromVue}
  

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default ReactApp;
