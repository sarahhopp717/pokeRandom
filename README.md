# 🎲 pokeRandom

A random Pokemon generator built with React and the PokeAPI. Click the button, discover a Pokemon — complete with its type, base stats, and full evolution chain. Card colors adapt to match the Pokemon's primary type.

Built as part of the Crexendo Developer Advocate take-home assessment.

---

## 🚀 Features

- **Random Pokemon Generation** — fetches a random Pokemon from all 1,025 across every generation
- **Type-Colored Cards** — card background dynamically matches the Pokemon's primary type
- **Evolution Chain** — displays the full evolution line using chained API calls
- **Error Handling** — gracefully handles network failures, 404s, rate limits, and missing sprites
- **Loading State** — button disables during fetch to prevent duplicate requests

---

## 🛠️ Tech Stack

- React 18
- Vite
- PokeAPI (no auth or API key required)
- Vanilla CSS

---

## 📁 Project Structure

```
pokeRandom/
├── public/
│   ├── card-back.png        # Pokemon card back background image
│   └── favicon.png          # Pokeball favicon
├── src/
│   ├── components/
│   │   └── PokemonCard.jsx  # Displays Pokemon data — image, types, stats, evolution chain
│   ├── App.css              # All styling including type-based card colors
│   ├── App.jsx              # Main component — state management, API fetch logic, error handling
│   ├── index.css            # Global base styles and Pokemon card background
│   └── main.jsx             # React entry point
├── index.html               # HTML template — sets page title and favicon
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # You are here
```

## ⚙️ Getting Started

### Prerequisites

- Node.js v18 or higher
- npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/sarahhopp717/pokeRandom.git
cd pokeRandom
```

2. Navigate to the client folder

```bash
cd client
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

---

## 🌐 API

This app uses the [PokeAPI](https://pokeapi.co/) — a free, open REST API requiring no authentication or API key.

### Endpoints Used

**Get Pokemon by ID**

```
GET https://pokeapi.co/api/v2/pokemon/{id}
```

Returns name, Pokedex number, sprite image, types, and base stats.

**Get Pokemon Species**

```
GET https://pokeapi.co/api/v2/pokemon-species/{id}
```

Returns a reference URL to the evolution chain.

**Get Evolution Chain**

```
GET https://pokeapi.co/api/v2/evolution-chain/{id}
```

Returns the full evolution chain for the Pokemon.

### Data Used From Response

| Field                   | Description                                 |
| ----------------------- | ------------------------------------------- |
| `id`                    | Pokedex number                              |
| `name`                  | Pokemon name                                |
| `sprites.front_default` | Official sprite image URL                   |
| `types`                 | Array of type objects                       |
| `stats`                 | Array of base stat objects                  |
| `species.url`           | Link to species endpoint for evolution data |

---

## 🛡️ Error Handling

The app handles the following failure scenarios gracefully:

| Scenario           | Handling                                                                   |
| ------------------ | -------------------------------------------------------------------------- |
| Network failure    | Error message displayed with Try Again button                              |
| 404 Not Found      | Clear message: "Pokemon not found — this ID does not exist in the PokeAPI" |
| 429 Rate Limit     | Clear message: "Too many requests — please wait a moment and try again"    |
| Other API errors   | Generic error message with status code surfaced to user                    |
| Missing sprite     | Fallback "No image available" message rendered instead of broken image     |
| Duplicate requests | Button disabled during active fetch to prevent stacking requests           |

---

## ⚠️ Known Limitations

- The PokeAPI rate limits at 100 requests per minute per IP — normal usage will never approach this
- Pokemon IDs are generated between 1–1025 to avoid 404 errors from non-existent IDs
- Sprite images are low-resolution pixel art by design — this is the official artwork served by the PokeAPI
- Evolution chain displays only the primary evolution path — branching evolutions (like Eevee) show the first branch only

---

## 🔮 Future Improvements

- Card shuffle animation on button click to enhance the random selection feel
- Ability to compare two random Pokemon side by side
- Type effectiveness chart showing strengths and weaknesses
