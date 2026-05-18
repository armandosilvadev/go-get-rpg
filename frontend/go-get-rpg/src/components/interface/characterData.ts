export interface CharacterData {
  id?: string;
  name: string | undefined;
  maxHp: number;
  hp: number;
  maxMana: number;
  mana: number;
  npc: boolean;
  image?: string;
}
