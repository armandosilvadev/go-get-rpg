package dev.armando.go_get_rpg.character;

import jakarta.persistence.*;
import lombok.*;
import org.jspecify.annotations.NonNull;

@Table(name = "characters")
@Entity(name = "characters")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String name;
    private double maxHp;
    private double hp;
    private double maxMana;
    private double mana;
    private boolean npc;
    private String image;

    public Character(@NonNull CharacterRequestDTO data) {
        this.name = data.name();
        if (data.hp() > data.maxHp()) {
            throw new IllegalArgumentException("HP exceeds maximum allowed for character");
        }

        this.hp = data.hp();
        this.maxHp = data.maxHp();

        if (data.mana() != null && data.maxMana() == null) {
            throw new IllegalArgumentException("maxMana is required since mana is provided");
        }

        if (data.mana() != null && data.maxMana() != null && data.mana() > data.maxMana()) {
            throw new IllegalArgumentException("Mana exceeds maximum");
        }

        this.mana = data.mana() != null ? data.mana() : 0;
        this.maxMana = data.maxMana() != null ? data.maxMana() : 0;

        this.npc = data.npc();
        this.image = data.image();
    }
}
