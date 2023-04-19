import axios from 'axios';
import { useEffect, useState } from "react";

function Tabl ()  {
  const [variable2, setVariable] = useState('');
  const [recordset, setRecordset] = useState([]);

  const sendVariableToServer = async (variable2) => {
    try {
      const response = await axios.post("http://localhost:5001/api/matches/q1", { variable2 });
      setRecordset(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    sendVariableToServer(variable2);
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Variable:
          <input type="text" value={variable2} onChange={(event) => setVariable(event.target.value)} />
        </label>
        <button type="submit">Send</button>
      </form>

      <table>
          {" "}
          <tbody>
            {" "}
            {recordset.map((row) => {
              return (
                <tr key={row.id} className="table-rows">
                  {" "}
                  {Object.keys(row).map((property) => (
                    <td key={property}>{row[property]}</td>
                  ))}{" "}
                </tr>
              );
            })}{" "}
          </tbody>{" "}
        </table>{" "}
    </>
  );
}

export default Tabl;