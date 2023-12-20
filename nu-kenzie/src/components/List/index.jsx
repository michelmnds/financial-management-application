import "./style.css";

export function List({ children, listTransactions }) {
  console.log(listTransactions);
  if (!listTransactions.length) {
    return (
      <div className="listContainer">
        <span className="listTxt">Financial Summary</span>

        <p className="listSecondaryTxt">You don't have any</p>
      </div>
    );
  } else {
    return (
      <div className="listContainer">
        <span className="listTxt">Financial Summary</span>

        {children}
      </div>
    );
  }
}
