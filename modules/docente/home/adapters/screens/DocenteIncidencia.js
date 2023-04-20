import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DocenteIncidencia = () => {
  const [incidences, setIncidences] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api_sirid/incidence')
      .then(response => response.json())
      .then(data => setIncidences(data))
      .catch(error => console.error(error))
  }, []);

  const renderIncidenceItem = ({ item }) => {
    return (
      <View style={styles.incidenceItem}>
        <View style={styles.incidenceTitleContainer}>
          <Text style={styles.incidenceTitle}>{item.title}</Text>
          <Text style={styles.incidenceDate}>{new Date(item.created_at).toLocaleDateString()}</Text>
        </View>
        <Text style={styles.incidenceDescription}>{item.description}</Text>
        <View style={styles.incidenceDetails}>
          <Text style={styles.incidenceClassroom}>{item.id_classroom.name}</Text>
          <Text style={styles.incidenceAssignedTo}>{item.asigned_at.name}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={incidences}
        renderItem={renderIncidenceItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.incidenceList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  incidenceList: {
    marginTop: 10,
  },
  incidenceItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  incidenceTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  incidenceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  incidenceDate: {
    fontSize: 14,
    color: '#999999',
  },
  incidenceDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },
  incidenceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incidenceClassroom: {
    fontSize: 14,
    color: '#666666',
  },
  incidenceAssignedTo: {
    fontSize: 14,
    color: '#666666',
  },
});

export default IncidenceList;
