package dev.armando.go_get_rpg.monster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/monster")
public class MonsterController {

    @Autowired
    private MonsterRepository monsterRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<MonsterResponseDTO> getAll() {
        List<MonsterResponseDTO> monsterList = monsterRepository.findAll().stream().map(MonsterResponseDTO::new).toList();
        return monsterList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public MonsterRequestDTO saveMonster(@RequestBody MonsterRequestDTO data) {
        Monster monsterData = new Monster(data);
        Monster savedMonster = monsterRepository.save(monsterData);
        return new MonsterRequestDTO(savedMonster);
    }
}
