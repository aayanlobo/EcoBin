import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import axios from "axios";
import OrderConfirmationPdf from "./OrderConfirmationPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import "../Style/flags.css";

import { CustomerService } from "../constant/ProductService";
const getLocalItems = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return [];
  }
};
export default function ApprovedOrders() {
  const [rows, setRows] = useState(getLocalItems());

  const [customers, setCustomers] = useState([]);
  const [dialogVisible, setDialogVisible] = useState(false);

  useEffect(async () => {
    // CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    await axios
      .post("http://localhost:8000/getUserReq", {
        useremail: rows.email,
      })
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .post("http://localhost:8000/details", {
        email: rows.email,
      })
      .then((res) => {
        setRows(res.data);
        console.log(rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rows.email]);

  const dialogFooterTemplate = () => {
    return (
      <Button
        label="Ok"
        icon="pi pi-check"
        onClick={() => setDialogVisible(false)}
      />
    );
  };

  return (
    <div className="card">
      <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => setDialogVisible(true)}
      />
      <Dialog
        header="Request Order Slip"
        visible={dialogVisible}
        style={{ width: "50vw" }}
        // maximizable
        modal
        contentStyle={{ height: "300px" }}
        onHide={() => setDialogVisible(false)}
        footer={dialogFooterTemplate}
      >
        <DataTable
          value={customers}
          scrollable
          scrollHeight="flex"
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="date" header="Date"></Column>
          <Column field="wasteType" header="Waste Type"></Column>
          <Column field="status" header="Status"></Column>
          <Column
            header="Download"
            body={(rowData) => (
              <PDFDownloadLink
                document={
                  <OrderConfirmationPdf
                    date={rowData.date}
                    wasteType={rowData.wasteType}
                    status={rowData.status}
                    email={rows.email}
                    username={rows.username}
                  />
                }
                fileName="order_receipt.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Generating PDF..." : "Downlond Receipt"
                }
              </PDFDownloadLink>
            )}
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
}
