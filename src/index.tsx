import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "catar latinha",
          type: "deposit",
          category: "mão de obra",
          value: 10000,
          createdAt: new Date("2022-02-02 02:02:02"),
        },
        {
          id: 2,
          title: "breja",
          type: "withdraw",
          category: "bem estar",
          value: 5000,
          createdAt: new Date("2022-02-02 02:02:02"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "/api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
