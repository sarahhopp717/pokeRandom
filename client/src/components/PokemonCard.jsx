function PokemonCard({ pokemon }) {
  const image = pokemon.sprites.front_default;
  const types = pokemon.types.map((t) => t.type.name);
  const stats = pokemon.stats.map((s) => ({
    name: s.stat.name,
    value: s.base_stat,
  }));

  return (
    <div className="pokemon-card">
      <h2>
        #{pokemon.id} {pokemon.name.toUpperCase()}
      </h2>

      {image ? (
        <img src={image} alt={pokemon.name} className="pokemon-image" />
      ) : (
        <p>No image available</p>
      )}

      <div className="types">
        <h3>Type</h3>
        {types.map((type) => (
          <span key={type} className={`type-badge type-${type}`}>
            {type}
          </span>
        ))}
      </div>

      <div className="stats">
        <h3>Base Stats</h3>
        {stats.map((stat) => (
          <div key={stat.name} className="stat-row">
            <span className="stat-name">{stat.name}</span>
            <span className="stat-value">{stat.value}</span>
          </div>
        ))}
      </div>

      {pokemon.evolutions && pokemon.evolutions.length > 1 && (
        <div className="evolutions">
          <h3>Evolution Chain</h3>
          <div className="evolution-chain">
            {pokemon.evolutions.map((evo, index) => (
              <span key={evo}>
                {evo.charAt(0).toUpperCase() + evo.slice(1)}
                {index < pokemon.evolutions.length - 1 && " → "}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
