import React, { useEffect, useState } from "react";
import "./AdminContactPage.css";

import { FaSearch } from "react-icons/fa";

import { getFirestore } from "firebase/firestore";
import app from "../../../firebase";

import { getDocs, collection } from "firebase/firestore";

// import { EventAvailable, Search, Visibility } from "@mui/icons-material";

export default function AdminContactPage({ pageName }) {
  const db = getFirestore(app);

  const [contacts, setContacts] = useState([]);

  const getDocSnap = async () => {
    const doc_refs = await getDocs(collection(db, "contact"));

    const res = [];

    doc_refs.forEach((contact) => {
      res.push({
        id: contact.id,
        ...contact.data(),
      });
    });

    setContacts([...res]);
  };
  // console.log(contacts);

  const [search, setSearch] = useState("");

  const filteredData = contacts?.filter((data) => {
    if (search !== "") {
      const searchItems = data.email.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  const renderedRows = filteredData?.map((data, index) => {
    return (
      <tr
        key={index}
        // onClick={() => setOrderData(mappedData)}
      >
        <td style={{ width: "80px" }}>{index + 1}</td>
        {/* <td>{data.id}</td> */}
        <td>{data.email}</td>
        <td>{data.city}</td>
        <td>{data.fullName}</td>
        <td>{data.phone}</td>
        <td>{data.program}</td>

        {/* <td>
          <Visibility
            style={{ cursor: "pointer" }}
            //   onClick={handleOpen}
          />
        </td> */}
      </tr>
    );
  });
  useEffect(() => {
    getDocSnap();
  }, []);

  return (
    <div className='Admin-section-page'>
      <div className='Admin-section-page-header'>
        <h3>{pageName}</h3>
        <div className='Admin-section-page-header-search'>
          <input
            className='Admin-section-page-header-input'
            placeholder='Search with email...'
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch />
        </div>
      </div>

      <div className='Admin-section-page-table'>
        <table>
          <thead>
            <tr>
              <th style={{ width: "80px" }}>S/N</th>
              {/* <th>Order Code</th> */}
              <th>Email</th>
              <th>City</th>
              <th>Full Name</th>
              {/* <th>Payment Status</th> */}
              <th>Phone</th>
              <th>Program</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                <td>#G-Store:22</td>
                <td style={{ width: "250px" }}>Nemesis</td>
                <td>NEMESIS@gmail.com</td>
                <td>9454545454</td>
                <td>Processing</td>
                <td>Room</td>
                <td>
                  <Visibility onClick={handleOpen} />
                </td>
              </tr> */}
            {renderedRows.reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
