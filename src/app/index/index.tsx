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

export default function Index() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

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

  function handleParticipantRemove(name: string) {
    

    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      { text: "Sim", onPress: () => setParticipants((prevParticipants) => prevParticipants.filter((participant) => participant !== name)) },
      { text: "Não", style: "cancel" },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

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
