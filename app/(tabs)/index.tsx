import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2JbGxgiXrrvFFq7g05waOqXMfuRvw6HuZg&s' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Cristiano Ronaldo</Text>
      <Text style={styles.description}>
      Cristiano Ronaldo dos Santos Aveiro, também conhecido como CR7, é um futebolista português que atua como ponta-esquerda ou avançado. Nascido no Funchal, na Madeira, a 5 de fevereiro de 1985, é considerado um dos maiores jogadores de futebol de todos os tempos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
