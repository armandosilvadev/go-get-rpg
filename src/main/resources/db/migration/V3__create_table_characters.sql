CREATE TABLE characters (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    max_hp INTEGER NOT NULL,
    hp INTEGER NOT NULL,
    max_mana INTEGER,
    mana INTEGER,
    npc BOOLEAN NOT NULL,
    image TEXT
);