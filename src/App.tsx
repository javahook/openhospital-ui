import React, { FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import "./App.scss";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { LangContext } from "./libraries/langContext/langContext";
import { initReactI18next } from "react-i18next";
import resources from "./resources";
import { I18N_FALLBACK_LNG } from "./resources/config";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { Router } from "react-router-dom";
import history from "./history";
import { Routes } from "./routes";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: I18N_FALLBACK_LNG,
    interpolation: {
      escapeValue: false,
    },
  });

const App: FunctionComponent = () => {
  const [, setLang] = useState(i18n.language);
  const changeLang = (l: string) => {
    i18n.changeLanguage(l).then(() => {
      setLang(l);
    });
  };

  const pickerTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fc1812",
        contrastText: "#fff",
      },
      secondary: {
        light: "#444444",
        main: "#444444",
        contrastText: "#fff",
      },
    },
  });

  return (
    <Router history={history}>
      <div className="App">
        <MuiThemeProvider theme={pickerTheme}>
          <LangContext.Provider value={{ changeLang }}>
            <Routes />
          </LangContext.Provider>
        </MuiThemeProvider>
      </div>
    </Router>
  );
};

export default connect()(App);
