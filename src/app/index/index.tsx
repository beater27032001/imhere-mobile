import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "@/src/components/Participant";

import { styles } from "./styles";
import { useState } from "react";

// Componente principal da aplicação
export default function Home() {
  // Estado para armazenar a lista de participantes
  const [participants, setParticipants] = useState<string[]>([]);
  // Estado para armazenar o nome do participante atual
  const [participantName, setParticipantName] = useState("");

  // Função para adicionar um participante à lista
  function handleParticipantAdd() {
    if (!participantName) {
      return Alert.alert("Erro", "O nome do participante é obrigatório.");
    }
    if (participants.includes(participantName)) {
      return Alert.alert("Erro", "Este participante já foi adicionado.");
    }

    setParticipants((prevParticipants) => [...prevParticipants, participantName]);
    setParticipantName("");
  }

  // Função para remover um participante da lista
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      { text: "Sim", onPress: () => setParticipants((prevParticipants) => prevParticipants.filter((participant) => participant !== name)) },
      { text: "Não", style: "cancel" },
    ]);
  }

  return (
    <View style={styles.container}>
      {/* Título do evento */}
      <Text style={styles.eventName}>Nome do evento</Text>

      {/* Data do evento */}
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        {/* Campo de entrada para o nome do participante */}
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        {/* Botão para adicionar participante */}
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de participantes */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante foi adicionado
          </Text>
        )}
      />
    </View>
  );
}
