/// <reference path="./types.d.ts" />

import { Application } from "./views/application.tsx";
import { urlApi } from "./url_api.ts";
import { loadUsers, selectUserByHistory } from "./actions.ts";


ReactDOM.render(React.createElement(Application), document.getElementById("content"));

urlApi(selectUserByHistory);
loadUsers("/payloads.json");