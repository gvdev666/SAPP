import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const IncidenceList = () => {
  const [incidences, setIncidences] = useState([]);

  useEffect(() => {
    fetch('http://localhost/api-sirid/incidence')
      .then(response => response.json())
      .then(data => setIncidences(data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.finish_at}</Text>
      <Text>{item.id_classroom.name}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={incidences}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default IncidenceList;
