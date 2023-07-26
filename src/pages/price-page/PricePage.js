import {Hero} from '../../components/hero'
import classes from "./PricePage.module.css";
import { Navbar } from '../../components/navbar'

function PricePage() {
  return  <div>
    <Navbar />
  <Hero heading="Cenovnik" />
  <div className={classes.tableBox}>
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead style={{ borderBottom: "3px solid blueviolet" }}>
        <tr style={{ textAlign: "left" }}>
          <th>MUŠKARCI</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Haircut</td>
          <td>$35</td>
        </tr>
        <tr>
          <td>Blow Dry</td>
          <td>$25</td>
        </tr>
        <tr>
          <td>Highlights</td>
          <td>$120</td>
        </tr>
        <tr>
          <td>Hair Color</td>
          <td>$80</td>
        </tr>
      </tbody>

      <thead style={{ borderBottom: "3px solid blueviolet" }}>
        <tr style={{ textAlign: "left" }}>
          <th>ŽENE</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Haircut</td>
          <td>$35</td>
        </tr>
        <tr>
          <td>Blow Dry</td>
          <td>$25</td>
        </tr>
        <tr>
          <td>Highlights</td>
          <td>$120</td>
        </tr>
        <tr>
          <td>Hair Color</td>
          <td>$80</td>
        </tr>
      </tbody>

      <thead style={{ borderBottom: "3px solid blueviolet" }}>
        <tr style={{ textAlign: "left" }}>
          <th>DECA</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Haircut</td>
          <td>$35</td>
        </tr>
        <tr>
          <td>Blow Dry</td>
          <td>$25</td>
        </tr>
        <tr>
          <td>Highlights</td>
          <td>$120</td>
        </tr>
        <tr>
          <td>Hair Color</td>
          <td>$80</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
}

export default PricePage
