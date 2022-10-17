import { useEffect } from "react";
// @ts-ignore
import donate from "./donate";

export default function Donate() {
  const url =
    "https://www.paypal.com/sdk/js?client-id=AaBKBSpFdVSmZOHNrZJV4-sQ4wafDR2YiewMPy0GdY5dFBO9rWqvX1XtUkgzeM7R-7jYD2_3T_1lY1xb&enable-funding=venmo&currency=USD";
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    script.dataset.sdkIntegrationSource = "button-factory";
    script.onload = () => {
      donate();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <article className="container mt-16">
      <div id="smart-button-container">
        <div style={{ textAlign: "center" }}>
          <label>Please enter a donation amount:</label>
          <input
            type="number"
            name="amountInput"
            id="amount"
            defaultValue=""
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span> USD</span>
        </div>
        <p
          id="priceLabelError"
          style={{
            visibility: "hidden",
            color: "red",
            textAlign: "center",
          }}
        >
          Please enter a price
        </p>
        <div style={{ textAlign: "center" }}>
          <label>
            Please enter your name as you would like it to appear on your
            donation:
          </label>
          <input
            type="text"
            name="descriptionInput"
            id="description"
            maxLength={127}
            defaultValue=""
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <p
          id="descriptionError"
          style={{
            visibility: "hidden",
            color: "red",
            textAlign: "center",
          }}
        >
          Please enter a name; it can be "Anonymous".
        </p>
        <div id="invoiceidDiv" style={{ textAlign: "center", display: "none" }}>
          <label> </label>
          <input
            name="invoiceid"
            maxLength={127}
            type="text"
            id="invoiceid"
            defaultValue=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <p
          id="invoiceidError"
          style={{
            visibility: "hidden",
            color: "red",
            textAlign: "center",
          }}
        >
          Please enter an Invoice ID
        </p>
        <div
          style={{ textAlign: "center", marginTop: "0.625rem" }}
          id="paypal-button-container"
        ></div>
      </div>
    </article>
  );
}
