package dev.armando.go_get_rpg.monster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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
    public MonsterRequestDTO saveMonster(MonsterRequestDTO data) {
        Monster monsterData = new Monster(data);
        Monster savedMonster = monsterRepository.save(monsterData);
        return new MonsterRequestDTO(savedMonster);
    }

    // Update monster by its ID
    public MonsterResponseDTO updateMonsterById(String id, MonsterRequestDTO data) {
        Monster monster = monsterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Monster not found."));

        monster.setName(data.name());
        monster.setMaxHp(data.maxHp());
        monster.setHp(data.hp());
        monster.setMaxMana(data.maxMana());
        monster.setMana(data.mana());
        monster.setBoss(data.boss());
        monster.setImage(data.image());

        Monster updadeMonster = monsterRepository.save(monster);

        return new MonsterResponseDTO(updadeMonster);
    }
}
