package dev.armando.go_get_rpg.character;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class CharacterService {
    @Autowired
    private CharacterRepository characterRepository;

    // Get character by its Id
    public ResponseEntity<CharacterResponseDTO> getCharacterById(String id) {
        return characterRepository.findById(id)
                .map(character -> ResponseEntity.ok(new CharacterResponseDTO(character)))
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete character by its ID
    public ResponseEntity<CharacterResponseDTO> deleteCharacterById(String id) {
        boolean characterExists = characterRepository.existsById(id);

        if(!characterExists) {
            return ResponseEntity.notFound().build();
        }

        characterRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    // Get all characters
    public List<CharacterResponseDTO> getAllCharacters() {
        List<CharacterResponseDTO> charactersList = characterRepository.findAll().stream()
                .map(CharacterResponseDTO::new).toList();
        return charactersList;
    }

    // Deletea all characters
    public ResponseEntity<CharacterResponseDTO> deleteAllCharacters() {
        characterRepository.deleteAll();
        return ResponseEntity.noContent().build();
    }

    // Save a new character
    public CharacterRequestDTO saveCharacter(CharacterRequestDTO data) {
        Character character = new Character(data);
        Character savedCharacter = characterRepository.save(character);
        return new CharacterRequestDTO(savedCharacter);
    }

    // Update character by its ID
    public CharacterResponseDTO udpateCharacterById(String id, CharacterRequestDTO data) {
        Character character = characterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Character not found"));

        character.setName(data.name());
        character.setMaxHp(data.maxHp());
        character.setHp(data.hp());
        character.setMaxMana(data.mana());
        character.setMana(data.mana());
        character.setNpc(data.npc());
        character.setImage(data.image());

        characterRepository.save(character);
        return new CharacterResponseDTO(character);
    }
}
