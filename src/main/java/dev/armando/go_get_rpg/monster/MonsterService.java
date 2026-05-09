package dev.armando.go_get_rpg.monster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class MonsterService {
    @Autowired
    private MonsterRepository monsterRepository;

    // Get monster by its ID
    public ResponseEntity<MonsterResponseDTO> getMonsterById(String id) {
        return monsterRepository.findById(id)
                .map(monster -> ResponseEntity.ok(new MonsterResponseDTO(monster)))
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete monster by its ID
    public ResponseEntity<MonsterResponseDTO> deleteMonsterById(String id) {
        boolean monsterExists = monsterRepository.existsById(id);

        if (!monsterExists) {
            return ResponseEntity.notFound().build();
        }

        monsterRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    // Get all monster
    public List<MonsterResponseDTO> getAllMonsters() {
        List<MonsterResponseDTO> monstersList = monsterRepository.findAll().stream().map(MonsterResponseDTO::new).toList();
        return monstersList;
    }

    // Delete all monsters
    public ResponseEntity<MonsterResponseDTO> deleteAllMonsters() {
        monsterRepository.deleteAll();
        return ResponseEntity.noContent().build();
    }

    // Save a new monster
    public MonsterRequestDTO saveMonster(@RequestBody MonsterRequestDTO data) {
        Monster monsterData = new Monster(data);
        Monster savedMonster = monsterRepository.save(monsterData);
        return new MonsterRequestDTO(savedMonster);
    }
}
