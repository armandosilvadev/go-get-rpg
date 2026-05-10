package dev.armando.go_get_rpg.monster;

import jakarta.persistence.*;
import lombok.*;
import org.jspecify.annotations.NonNull;

@Table(name = "monsters")
@Entity(name = "monsters")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Monster {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String name;
    private double hp;
    private double maxHp;
    private double mana;
    private double maxMana;
    private boolean boss;
    private String image;

    public Monster(@NonNull MonsterRequestDTO data) {
        this.name = data.name();
        if (data.hp() > data.maxHp()) {
            throw new IllegalArgumentException("HP exceeds maximum");
        }

        this.hp = data.hp();
        this.maxHp = data.maxHp();

        if (data.mana() != null && data.maxMana() == null) {
            throw new IllegalArgumentException("maxMana is required since mana is provided");
        }

        if (data.mana() != null && data.maxMana() != null && data.mana() > data.maxMana()) {
            throw new IllegalArgumentException("Mana exceeds maximum");
        }

        this.mana = data.mana() !=null ? data.mana() : 0;
        this.maxMana = data.maxMana() != null ? data.maxMana() : 0;

        this.boss = data.boss();
        this.image = data.image();
    }
}
