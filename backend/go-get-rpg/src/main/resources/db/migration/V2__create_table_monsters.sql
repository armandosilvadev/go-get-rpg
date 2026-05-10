DROP TABLE monsters;

CREATE TABLE monsters(
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    max_hp INTEGER NOT NULL,
    hp INTEGER,
    max_mana INTEGER,
    mana INTEGER,
    boss BOOLEAN NOT NULL,
    image TEXT
);