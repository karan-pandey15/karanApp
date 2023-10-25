import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";


const Disbursaldata = () => {
  const [pendingData, setPendingData] = useState([]);
  const fetchPendingData = async () => {
    try {
      let data = await fetch(
        "https://7e83-2401-4900-1c5a-9e08-1150-92d0-4989-43f2.ngrok-free.app/approvedata"
      );
      let result = await data.json();
      setPendingData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPendingData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <ScrollView>
          <View>
            {/* Table Headers */}
            <View style={styles.row}>
              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Name</Text>
              </View>
              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Father Name</Text>
              </View>

              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Phone No</Text>
              </View>

              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Pan No</Text>
              </View>

              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Company Name </Text>
              </View>
              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Loan Amount</Text>
              </View>

              <View style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>Loan Application No</Text>
              </View>
            </View>

            {/* Table Data */}
            {pendingData.map((item, index) => (
              <View key={index} style={styles.row}>
                <View style={styles.cell}>
                  <Text>{item.name || "Oops, no data"}</Text>
                </View>
                <View style={styles.cell}>
                  <Text>{item.fatherName || "Oops, no data"}</Text>
                </View>

                <View style={styles.cell}>
                  <Text>{item.phoneNo || "Oops, no data"}</Text>
                </View>

                <View style={styles.cell}>
                  <Text>{item.panNo || "Oops, no data"}</Text>
                </View>

                <View style={styles.cell}>
                  <Text>{item.appliedBank || "HDFC BANK"}</Text>
                </View>

                <View style={styles.cell}>
                  <Text>{item.companyName || "Oops, no data"}</Text>
                </View>

                <View style={styles.cell}>
                  <Text>{item.additionalInfo1 || "Oops, no data"}</Text>
                </View>

                <View style={styles.cell}>
                  <Text>{item.additionalInfo2 || "Oops, no data"}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100, // Margin from the top
    marginLeft: 15, // Margin from the left
    marginRight: 15, // Margin from the right
    marginBottom: 20, // Margin from the bottom
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5, // Add margin between cells

    width: 100,
  },
  headerCell: {
    width: 120,
    fontSize: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Disbursaldata;
