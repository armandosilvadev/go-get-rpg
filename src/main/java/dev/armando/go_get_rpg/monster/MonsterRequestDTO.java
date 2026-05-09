package dev.armando.go_get_rpg.monster;

public record MonsterRequestDTO(String name,
                                double maxHp,
                                double hp,
                                Double maxMana,
                                Double mana,
                                boolean boss,
                                String image)
{
    public MonsterRequestDTO(Monster monster) {
        this(monster.getName(), monster.getMaxHp(), monster.getHp(), monster.getMaxMana(), monster.getMana(), monster.isBoss(), monster.getImage());
    }
}
