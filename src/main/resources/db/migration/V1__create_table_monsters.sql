CREATE TABLE monsters (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    maxHp INTEGER NOT NULL,
    hp INTEGER,
    maxMana INTEGER,
    mana INTEGER,
    boss BOOLEAN NOT NULL,
    image TEXT
);