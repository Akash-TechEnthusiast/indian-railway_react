import "./list.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    name: "Toyota",
    calories: "Celica",
    fat: 35000,
    carbs: "Toyota",
    protein: "Celica",
    imgurl: "https://www.w3schools.com/images/w3schools_green.jpg",
    product: "pencil",
    status: "Submitted",
  },
  {
    name: "Toyota",
    calories: "Celica",
    fat: 35000,
    carbs: "Toyota",
    protein: "Celica",
    imgurl: "https://www.w3schools.com/images/w3schools_green.jpg",
    product: "pencil",
    status: "Pending",
  },
  {
    name: "Toyota",
    calories: "Celica",
    fat: 35000,
    carbs: "Toyota",
    protein: "Celica",
    imgurl: "https://www.w3schools.com/images/w3schools_green.jpg",
    product: "pencil",
    status: "Open",
  },
  {
    name: "Toyota",
    calories: "Celica",
    fat: 35000,
    carbs: "Toyota",
    protein: "Celica",
    imgurl: "https://www.w3schools.com/images/w3schools_green.jpg",
    product: "pencil",
    status: "Approved",
  },
];

const List = () => {
  return (
    <div className="list">
      <TableContainer component={Paper} className="table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Dessert</TableCell>
              <TableCell className="tableCell">Image&nbsp;Url</TableCell>
              <TableCell className="tableCell">Calories</TableCell>
              <TableCell className="tableCell">Fat&nbsp;(g)</TableCell>
              <TableCell className="tableCell">Carbs&nbsp;(g)</TableCell>
              <TableCell className="tableCell">Protein&nbsp;(g)</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>

                <TableCell className="tableCell">{row.name}</TableCell>

                <TableCell className="tableCell">
                  {" "}
                  <div className="cellWrapper">
                    <img src={row.imgurl} alt="W3Schools.com" className="image"/>
                    {row.product}
                  </div>
                </TableCell>

                <TableCell className="tableCell">{row.calories}</TableCell>
                <TableCell className="tableCell">{row.fat}</TableCell>
                <TableCell className="tableCell">{row.carbs}</TableCell>
                <TableCell className="tableCell">{row.protein}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
