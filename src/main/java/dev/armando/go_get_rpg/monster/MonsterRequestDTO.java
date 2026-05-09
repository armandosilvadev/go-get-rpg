package dev.armando.go_get_rpg.monster;

public record MonsterRequestDTO(String name,
                                double maxHp,
                                double hp,
                                Double maxMana,
                                Double mana,
                                boolean boss,
                                String image)
{}
