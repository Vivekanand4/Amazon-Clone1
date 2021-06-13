import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './Stateprovider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
function Subtotal() {
  

  const history =useHistory();
  const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <h2>Your Subtotal</h2>
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({ basket?.length } items): 
              <strong>
               {value}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
      <button  onClick={e => history.push('/payment')} className="subtotal_buttom">Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
