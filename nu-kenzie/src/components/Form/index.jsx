import "./style.css";
import "../../styles/globalStyle.css";
import lixo from "../../img/trash.png";

import { useState } from "react";
import { List } from "../List";
import { Card } from "../Card";
import { TotalMoney } from "../TotalMoney";

export function Form() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const [listTransactions, setListTransactions] = useState([
    { description: "Recieved revenue", type: "income", value: 2500 },
    { description: "Electricity bill", type: "outcome", value: -150 },
  ]);

  function handleTransaction(event) {
    event.preventDefault();

    if (description !== "" && value !== "" && type !== "") {
      if (type === "income") {
        setListTransactions((listTransactions) => [
          ...listTransactions,
          {
            description:
              description.slice(0, 1).toUpperCase() + description.slice(1),
            value,
            type,
          },
        ]);
      } else {
        setListTransactions((listTransactions) => [
          ...listTransactions,
          {
            description:
              description.slice(0, 1).toUpperCase() + description.slice(1),
            value: -value,
            type,
          },
        ]);
      }
    }
  }

  function removeTransaction(item) {
    const newList = listTransactions.filter(
      (transaction) => transaction.description !== item.target.id
    );

    setListTransactions(newList);
  }

  return (
    <div className="globalContainer">
      <section className="left">
        <main className="containerMainForm">
          <p className="mainTxt">Description</p>

          <section className="descriptionContainer">
            <input
              placeholder="Write the description here"
              className="inputDescription"
              type="text"
              name="description"
              id="description"
              onChange={(event) => setDescription(event.target.value)}
            />
            <p className="descriptionExample">Eg: Bought some clothes</p>
          </section>

          <section className="bottomContainerForm">
            <div className="valueContainer">
              <p className="valueTxt">Ammount</p>

              <section className="valueInput">
                <input
                  placeholder="1"
                  className="numberInput"
                  type="number"
                  name="value"
                  id="value"
                  onChange={(event) => setValue(parseInt(event.target.value))}
                />

                <p className="RS">$</p>
              </section>
            </div>

            <div className="typeContainer">
              <p className="typeTxt">Value type</p>

              <select
                className="typeSelect"
                name="type"
                id="type"
                onChange={(event) => setType(event.target.value)}
              >
                <option value="null">Select type</option>
                <option value="income">Income</option>
                <option value="outcome">Outcome</option>
              </select>
            </div>
          </section>

          <button
            onClick={handleTransaction}
            type="submit"
            className="formButton"
          >
            Insert Value
          </button>
        </main>

        <TotalMoney>
          {listTransactions.reduce((acc, cur) => {
            return acc + cur.value;
          }, 0)}
        </TotalMoney>
      </section>

      <section className="right">
        <List listTransactions={listTransactions}>
          {listTransactions.map((transaction, index) => (
            <Card
              description={transaction.description}
              type={transaction.type}
              value={transaction.value}
              transaction={transaction}
              key={index}
            >
              <img
                onClick={removeTransaction}
                id={transaction.description}
                className="lixo"
                src={lixo}
                alt="lixo"
              />
            </Card>
          ))}
        </List>
      </section>
    </div>
  );
}
