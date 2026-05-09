package dev.armando.go_get_rpg.monster;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "monsters")
@Entity(name = "monsters")
@Getter
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

    public Monster(MonsterRequestDTO data) {
        this.name = data.name();
        if (data.hp() > data.maxHp()) {
            throw new IllegalArgumentException("HP exceeds maximum");
        }

        this.hp = data.hp();
        this.maxHp = data.maxHp();

        if (data.mana() != null && data.maxMana() != null && data.mana() > data.maxMana()) {
            throw new IllegalArgumentException("Mana exceeds maximum");
        }

        this.mana = data.mana() !=null ? data.mana(): 0;
        this.maxMana = data.maxMana() != null ? data.maxHp() : 0;

        this.boss = data.boss();
        this.image = data.image();
    }
}
