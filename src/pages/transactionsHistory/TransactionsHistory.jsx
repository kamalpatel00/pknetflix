// import "./transactionHistry.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { transactionRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TransactionHistry() {
  const [data, setData] = useState(transactionRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "date",
      headerName: "Date",
      width: 120,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,

      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}> */}
            <Link >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

// import "./widgetLg.css";

// export default function TransactionHistry() {
//   const Button = ({ type }) => {
//     return <button className={"widgetLgButton " + type}>{type}</button>;
//   };
//   return (
//     <div className="widgetLg">
//       <h3 className="widgetLgTitle">Latest transactions</h3>
//       <table className="widgetLgTable">
//         <tr className="widgetLgTr">
//           <th className="widgetLgTh">Customer</th>
//           <th className="widgetLgTh">Email</th>
//           <th className="widgetLgTh">Date</th>
//           <th className="widgetLgTh">Amount</th>
//           <th className="widgetLgTh">Status</th>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Kamal Patel</span>
//           </td>
//           <td className="widgetLgDate">kamal@gmail.com</td>
//           <td className="widgetLgDate">2 Jun 2021</td>
//           <td className="widgetLgAmount">$122.00</td>
//           <td className="widgetLgStatus">
//             <Button type="Approved" />
//           </td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">susan@gmail.com</td>
//           <td className="widgetLgDate">2 Jun 2021</td>
//           <td className="widgetLgAmount">$122.00</td>
//           <td className="widgetLgStatus">
//             <Button type="Declined" />
//           </td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">susan@gmail.com</td>
//           <td className="widgetLgDate">2 Jun 2021</td>
//           <td className="widgetLgAmount">$122.00</td>
//           <td className="widgetLgStatus">
//             <Button type="Pending" />
//           </td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">susan@gmail.com</td>
//           <td className="widgetLgDate">2 Jun 2021</td>
//           <td className="widgetLgAmount">$122.00</td>
//           <td className="widgetLgStatus">
//             <Button type="Approved" />
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// }


