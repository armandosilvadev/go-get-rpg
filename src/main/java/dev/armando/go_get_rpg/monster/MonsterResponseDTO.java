package dev.armando.go_get_rpg.monster;

public record MonsterResponseDTO(String id,
                                 String name,
                                 double hp,
                                 double maxHp,
                                 Double mana,
                                 Double maxMana,
                                 boolean boss,
                                 String image) {
    public MonsterResponseDTO(Monster monster) {
        this(monster.getId(), monster.getName(), monster.getHp(), monster.getMaxHp(), monster.getMana(), monster.getMaxMana(), monster.isBoss(), monster.getImage());
    }
}
