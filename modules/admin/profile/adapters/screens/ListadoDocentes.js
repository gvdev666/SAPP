import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

const ListadoDocentes = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('https://localhost:8080/users/teachers');
        setTeachers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeachers();
  }, []);

  const renderTeacher = ({ item }) => {
    return (
      <View style={styles.teacherContainer}>
        <Text style={styles.teacherName}>{item.name} {item.primer_apellido} {item.segundo_apellido}</Text>
        <Text style={styles.teacherEmail}>{item.correo_electronico}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={teachers}
        renderItem={renderTeacher}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  teacherContainer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  teacherEmail: {
    fontSize: 14,
  },
});

export default TeacherList;
