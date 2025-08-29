import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import "../src/styles/global.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n/i18n";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;