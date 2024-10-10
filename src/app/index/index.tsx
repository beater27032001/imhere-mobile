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

export default function Index() {
  const participants = [
    "José",
    "Carlos",
    "João",
    "Laura",
    "Pedro",
    "Ricardo",
    "Daniel",
    "Rafael",
    "Paula",
    "Luciana",
    "Patricia",
    "Paulo",
    "Leda",
    "Sinflo",
  ];
  function handleParticipantAdd() {
    if (participants.includes("Sinflo")) {
      Alert.alert(
        "Participante Existente",
        "Ja existe um participante com esse nome!"
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      { text: "Sim", onPress: () => Alert.alert("Removido") },
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

      {/* <ScrollView>
        {participants.map((name) => (
          <Participant
            key={name}
            name={name}
            onRemove={handleParticipantRemove}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}
