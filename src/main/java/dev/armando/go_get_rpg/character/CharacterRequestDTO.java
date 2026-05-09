package dev.armando.go_get_rpg.character;

public record CharacterRequestDTO(String name,
                                  double hp,
                                  double maxHp,
                                  Double mana,
                                  Double maxMana,
                                  boolean npc,
                                  String image) {
    public CharacterRequestDTO(Character character) {
        this(
                character.getName(),
                character.getHp(),
                character.getMaxHp(),
                character.getMana(),
                character.getMaxMana(),
                character.isNpc(),
                character.getImage()
        );
    }
}
