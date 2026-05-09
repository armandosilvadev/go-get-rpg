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

    // Get all characters
    public List<CharacterResponseDTO> getAllCharacters() {
        List<CharacterResponseDTO> charactersList = characterRepository.findAll().stream()
                .map(CharacterResponseDTO::new).toList();
        return charactersList;
    }

    // Save a new character
    public CharacterRequestDTO saveCharacter(CharacterRequestDTO data) {
        Character character = new Character(data);
        Character savedCharacter = characterRepository.save(character);
        return new CharacterRequestDTO(savedCharacter);
    }
}
