import React from "react";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import Routes from "./routes";
import { store } from "./redux/store";
import zh_CN from "antd/es/locale/zh_CN";
import vi_VN from "antd/es/locale/vi_VN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
function App() {
  return (
    <ConfigProvider locale={vi_VN}>
      <IntlProvider locale="en">
        <Provider store={store}>
          <Routes />
        </Provider>
      </IntlProvider>
    </ConfigProvider>
  );
}

export default App;
