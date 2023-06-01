import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  Image,
} from "@react-pdf/renderer";
import AbhiramImage from "../Assets/abhiramsign.png";

const styles = StyleSheet.create({
  container: {
    padding: "1cm",
  },
  title: {
    fontSize: 20,
    marginBottom: "0.5cm",
    textAlign: "center",
  },
  content: {
    fontSize: 12,
    marginBottom: "0.3cm",
  },
  table: {
    marginTop: "0.5cm",
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: "0.3cm",
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
  },
  signatureContainer: {
    marginTop: "1cm",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  signatureImage: {
    width: "6cm",
    height: "3cm",
  },
});
const randomId = function (length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};
const getLocalItems = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return [];
  }
};

let newId = randomId();
const OrderConfirmationPdf = ({ date, wasteType, status, email, username }) => {
  return (
    <Document>
      <Page style={styles.container}>
        <Text style={styles.title}>Order Confirmation</Text>
        <Text style={styles.content}>
          Thank you for Requesting Waste Pickup.
        </Text>

        <Text style={styles.tableRow}> </Text>
        <Text style={styles.tableRow}>Order ID: {newId}</Text>
        <Text style={styles.tableRow}>Date: {date}</Text>

        <Text style={styles.tableRow}> </Text>
        <Text style={styles.tableRow}>User Name: {username}</Text>
        <Text style={styles.tableRow}>Email: {email}</Text>

        <Text style={styles.tableRow}></Text>
        <Text style={styles.tableRow}>Waste Type: {wasteType}</Text>
        <Text style={styles.tableRow}>Approved Status: {status}</Text>
        <View style={styles.signatureContainer}>
          <Text>Authorized by:</Text>
          <Image style={styles.signatureImage} src={AbhiramImage} />
        </View>
      </Page>
    </Document>
  );
};

export default OrderConfirmationPdf;
