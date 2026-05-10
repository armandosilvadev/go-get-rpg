package dev.armando.go_get_rpg.character;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {
    @Autowired
    private CharacterRepository characterRepository;

    // Get character by its Id
    public CharacterResponseDTO getCharacterById(String id) {
        Character character = characterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Character not found"));

        return new CharacterResponseDTO(character);
    }

    // Delete character by its ID
    public void deleteCharacterById(String id) {
        Character character = characterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Character not found"));

        characterRepository.delete(character);
    }

    // Get all characters
    public List<CharacterResponseDTO> getAllCharacters() {
        List<CharacterResponseDTO> charactersList = characterRepository.findAll().stream()
                .map(CharacterResponseDTO::new).toList();
        return charactersList;
    }

    // Delete alll characters
    public void deleteAllCharacters() {
        characterRepository.deleteAll();
    }

    // Save a new character
    public CharacterRequestDTO saveCharacter(CharacterRequestDTO data) {
        Character character = new Character(data);
        Character savedCharacter = characterRepository.save(character);
        return new CharacterRequestDTO(savedCharacter);
    }

    // Update character by its ID
    public CharacterResponseDTO updateCharacterById(String id, CharacterRequestDTO data) {
        Character character = characterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Character not found"));

        character.setName(data.name());
        character.setMaxHp(data.maxHp());
        character.setHp(data.hp());
        character.setMaxMana(data.maxMana());
        character.setMana(data.mana());
        character.setNpc(data.npc());
        character.setImage(data.image());

        characterRepository.save(character);
        return new CharacterResponseDTO(character);
    }
}
