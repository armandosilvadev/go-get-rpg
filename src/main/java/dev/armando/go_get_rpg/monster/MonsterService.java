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
    public MonsterResponseDTO getMonsterById(String id) {
        Monster monster = monsterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Monster not found"));

        return new MonsterResponseDTO(monster);
    }

    // Delete monster by its ID
    public void deleteMonsterById(String id) {
        Monster monster = monsterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Monster not found"));

        monsterRepository.delete(monster);
    }

    // Get all monster
    public List<MonsterResponseDTO> getAllMonsters() {
        List<MonsterResponseDTO> monstersList = monsterRepository.findAll().stream().map(MonsterResponseDTO::new).toList();
        return monstersList;
    }

    // Delete all monsters
    public void deleteAllMonsters() {
        monsterRepository.deleteAll();
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
