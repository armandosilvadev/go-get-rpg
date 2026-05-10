package dev.armando.go_get_rpg.character;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/character")
public class CharacterController {

    @Autowired
    private CharacterService characterService;

    // Get character by its Id
    @GetMapping("/{id}")
    public ResponseEntity<CharacterResponseDTO> getCharacterById(@PathVariable String id) {
        return ResponseEntity.ok(characterService.getCharacterById(id));
    }

    // Delete character by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCharacterById(@PathVariable String id) {
        characterService.deleteCharacterById(id);

        return ResponseEntity.noContent().build();
    }

    // Get all characters
    @GetMapping
    public List<CharacterResponseDTO> getAllCharacters() {
        return characterService.getAllCharacters();
    }

    // Delete all characters
    @DeleteMapping
    public ResponseEntity<Void> deleteAllCharacters() {
        characterService.deleteAllCharacters();

        return ResponseEntity.noContent().build();
    }

    // Save new character
    @PostMapping
    public CharacterRequestDTO saveCharacter(@RequestBody CharacterRequestDTO data) {
        return characterService.saveCharacter(data);
    }

    // Update character by its ID
    @PutMapping("/{id}")
    public ResponseEntity<CharacterResponseDTO> updateCharacterById(@PathVariable String id, @RequestBody CharacterRequestDTO data) {
        return ResponseEntity.ok(characterService.updateCharacterById(id, data));
    }
}
