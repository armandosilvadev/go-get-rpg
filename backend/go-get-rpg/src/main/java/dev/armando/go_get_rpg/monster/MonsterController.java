package dev.armando.go_get_rpg.monster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/monster")
public class MonsterController {

    @Autowired
    private MonsterService monsterService;

    // Get The Monster by its ID
    @GetMapping("/{id}")
    public ResponseEntity<MonsterResponseDTO> getMonsterById(@PathVariable String id) {
        return ResponseEntity.ok(monsterService.getMonsterById(id));
    }

    // Delete the monster by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMonsterById(@PathVariable String id) {
        monsterService.deleteMonsterById(id);

        return ResponseEntity.notFound().build();
    }

    // Get all monsters
    @GetMapping
    public List<MonsterResponseDTO> getAllMonsters() {
        return monsterService.getAllMonsters();
    }

    // Delete all monsters
    @DeleteMapping
    public ResponseEntity<Void> deleteAll() {
        monsterService.deleteAllMonsters();

        return ResponseEntity.noContent().build();
    }

    // Save a new monster
    @PostMapping
    public ResponseEntity<MonsterRequestDTO> saveMonster(@RequestBody MonsterRequestDTO data) {
        return ResponseEntity.ok(monsterService.saveMonster(data));
    }

    // Update monster
    @PutMapping("/{id}")
    public ResponseEntity<MonsterResponseDTO> updateMonsterById(@PathVariable String id, @RequestBody MonsterRequestDTO data) {
        return ResponseEntity.ok(monsterService.updateMonsterById(id, data));
    }
}
