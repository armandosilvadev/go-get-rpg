package dev.armando.go_get_rpg.character;

public record CharacterResponseDTO(String id,
                                   String name,
                                   double hp,
                                   double maxHp,
                                   Double mana,
                                   Double maxMana,
                                   boolean npc,
                                   String image) {
    public CharacterResponseDTO(Character character) {
        this(
                character.getId(),
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
