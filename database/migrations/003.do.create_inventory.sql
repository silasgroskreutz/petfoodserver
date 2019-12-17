CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    brand TEXT UNIQUE NOT NULL,
    flavor INTEGER NOT NULL,
    size TEXT NOT NULL,
    imageURL TEXT UNIQUE NOT NULL
)