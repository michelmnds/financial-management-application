import "./style.css";

export function TotalMoney({ children }) {
  return (
    <section className="totalContainer">
      <div className="totalAmount">
        <span className="amountTxt">Total ammount:</span>

        <span className="amountValue">${children}</span>
      </div>

      <span className="bottomTotalTxt">The value refers to the balance</span>
    </section>
  );
}
