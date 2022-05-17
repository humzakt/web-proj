import "./Dash.css";
import DashHeading from "./DashHeading";
import Navbar from "./navbar";
export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="DashBody">
        <DashHeading name="DashBoard" />

        <table>
          <tr>
            <th>Sr No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Visit Date</th>
          </tr>
          <tr>
            <td>1.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>

        <div className="DashInput">
          <input type="text" class="css-input" />
        </div>

        <div className="DashButtonDiv">
          <button type="button" class="DashmyButton">
            Register New Patient
          </button>
        </div>
      </div>
    </>
  );
}
