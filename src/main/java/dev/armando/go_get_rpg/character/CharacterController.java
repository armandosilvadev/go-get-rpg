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
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ResponseEntity<CharacterResponseDTO> getCharacterById(@PathVariable String id) {
        return characterService.getCharacterById(id);
    }

    // Get all characters
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<CharacterResponseDTO> getAllCharacters() {
        return characterService.getAllCharacters();
    }

    // Save new character
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public CharacterRequestDTO saveCharacter(@RequestBody CharacterRequestDTO data) {
        return characterService.saveCharacter(data);
    }
}
