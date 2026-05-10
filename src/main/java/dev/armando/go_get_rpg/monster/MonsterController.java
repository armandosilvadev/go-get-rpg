package dev.armando.go_get_rpg.monster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/monster")
public class MonsterController {

    @Autowired
    private MonsterService monsterService;

    // Get The Monster by its ID
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ResponseEntity<MonsterResponseDTO> getMonsterById(@PathVariable String id) {
        return monsterService.getMonsterById(id);
    }

    // Delete the monster by its ID
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<MonsterResponseDTO> deleteMonsterById(@PathVariable String id) {
        return monsterService.deleteMonsterById(id);
    }

    // Get all monsters
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<MonsterResponseDTO> getAllMonsters() {
        return monsterService.getAllMonsters();
    }

    // Delete all monsters
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping
    public ResponseEntity<MonsterResponseDTO> deleteAll() {
        return monsterService.deleteAllMonsters();
    }

    // Save a new monster
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public ResponseEntity<MonsterRequestDTO> saveMonster(@RequestBody MonsterRequestDTO data) {
        return ResponseEntity.ok(monsterService.saveMonster(data));
    }

    // Update monster
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public ResponseEntity<MonsterResponseDTO> updateMonsterById(@PathVariable String id, @RequestBody MonsterRequestDTO data) {
        return ResponseEntity.ok(monsterService.updateMonsterById(id, data));
    }
}
