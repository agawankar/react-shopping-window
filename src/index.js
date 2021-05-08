import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import App from "./App";

const stripeProps = {
  apiKey:
    "pk_test_51IokG1SIyKFT9RZZlLxKmNQauwEZXS2VV0YsVWLJ0atmqqE23TD7SVJaZVpgM6ITwuJaLhbi49tcgHe3s3WUem8R00nK8ZPyHD",
};
const app = (
  <Provider store={store}>
    <BrowserRouter>
      {/* StripeProvider initializes the stripe and passes in the publishable key */}
      <StripeProvider {...stripeProps}>
        <Elements>
          <App />
        </Elements>
      </StripeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
