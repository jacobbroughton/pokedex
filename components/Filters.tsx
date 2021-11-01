import React, { useEffect } from 'react'
import { useFilters } from "../contexts/FiltersContext"
import { usePokemonDataUpdate } from "../contexts/PokemonDataContext"
import { useFormattedName } from "../utilities/useFormattedName"
import styles from "../styles/components/Filters.module.scss"

const Filters = () => {

  const getPokemon = usePokemonDataUpdate()
  const [filters, setFilters] = useFilters()

  const { type, generation } = filters

  let types = [
    { 
      name: "normal"
    },
    { 
      name: "fighting"
    },
    { 
      name: "flying"
    },
    { 
      name: "poison"
    },
    { 
      name: "ground"
    },
    { 
      name: "rock"
    },
    { 
      name: "bug"
    },
    { 
      name: "ghost"
    },
    { 
      name: "steel"
    },
    { 
      name: "fire"
    },
    { 
      name: "water"
    },
    { 
      name: "grass"
    },
    { 
      name: "electric"
    },
    { 
      name: "psychic"
    },
    { 
      name: "ice"
    },
    { 
      name: "dragon"
    },
    { 
      name: "dark"
    },
    { 
      name: "fairy"
    }
  ]

  let generations = [
    {
      name: "I",
      slug: "generation-i",
      firstPokemonId: 1,
      lastPokemonId: 151
    },
    {
      name: "II",
      slug: "generation-ii",
      firstPokemonId: 152,
      lastPokemonId: 251
    },
    {
      name: "III",
      slug: "generation-iii",      
      firstPokemonId: 252,
      lastPokemonId: 386

    },
    {
      name: "IV",
      slug: "generation-iv",
      firstPokemonId: 387,
      lastPokemonId: 493
    },
    {
      name: "V",
      slug: "generation-v",
      firstPokemonId: 494,
      lastPokemonId: 649
    },
    {
      name: "VI",
      slug: "generation-vi",
      firstPokemonId: 650,
      lastPokemonId: 720
    },
    {
      name: "VII",
      slug: "generation-vii",
      firstPokemonId: 722,
      lastPokemonId: 809
    },
    {
      name: "VIII",
      slug: "generation-viii",
      firstPokemonId: 810,
      lastPokemonId: 898
    }
  ]

  return (
    <aside className={styles.aside}>
      <h3>Filters</h3>
      <hr/>
       <div className={styles['filter-section']}>
        <div className={styles['filter-section-header']}>
          <h4>By Type</h4>
          <button
            className={styles['filter-reset-button']}
            onClick={() => setFilters({
              ...filters,
              type: null
            })}
          >Reset</button>
        </div>        
        <div className={styles['type-filters']}>
          {types.map((type, index) => 
            <button 
              key={index}
              onClick={() => setFilters({
                ...filters,
                type: type.name
              })}
              className={styles[`${type.name.toLowerCase()}`]}
            >{useFormattedName(type.name)}</button>
          )}
        </div>
       </div>

      <div className={styles['filter-section']}>
        <div className={styles['filter-section-header']}>
          <h4>By Generation</h4>
          <button
            className={styles['filter-reset-button']}
            onClick={() => setFilters({
              ...filters,
              generation: {
                idStart: null,
                idEnd: null
              }
            })}
          >Reset</button>
        </div>
        <div className={styles['generation-filters']}>
          {generations.map((gen, index) => 
            <button 
              key={index} 
              className={
                styles['filter-reset-button']
              }
              onClick={() => setFilters({
                ...filters,
                generation: {
                  idStart: gen.firstPokemonId,
                  idEnd: gen.lastPokemonId
                }
              })}
            >{gen.name}</button>
          )}
        </div>
      </div>
    </aside>
  )
}

export default Filters