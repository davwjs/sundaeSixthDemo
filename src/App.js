import { Route, Switch, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import RoadmapPage from "./components/RoadmapPage";
import MintPage from "./components/MintPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        {/* For framer-motion animation on page change! */}
        <AnimatePresence exitBeforeEnter>
          <Provider store={store}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/team" component={TeamPage} />
              <Route exact path="/roadmap" component={RoadmapPage} />
              <Route exact path="/mint" component={MintPage} />
            </Switch>
          </Provider>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
