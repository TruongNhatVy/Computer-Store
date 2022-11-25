import React from 'react'
import PropTypes from 'prop-types'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
 
export default function App() {
  return (
      <PayPalScriptProvider options={{ "ARPSotQgRrzn3Q3hFRpC2Ojsg9xOCyIAqFhBZapMWugHUNVHMZPIEsmPrG8uxdYX7pLPZJHzZPkPeRap": "test" }}>
          <PayPalButtons style={{ layout: "horizontal" }} />
      </PayPalScriptProvider>
  );
}
// const OrderHistory = props => {
//   return (
//     <div>OrderHistory</div>
//   )
// }

// OrderHistory.propTypes = {}

// export default OrderHistory