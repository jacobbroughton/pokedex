import { useEffect } from "react"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from "../components/Layout"
import { PaginationProvider } from "../contexts/PaginationProvider"
import { PokemonDataProvider } from "../contexts/PokemonDataContext"
import { FiltersProvider } from "../contexts/FiltersContext"



function MyApp({ Component, pageProps }: AppProps) {

  const defaultPaginationValues = {
    limit: 20,
    offset: 0
  }

  return (
    <PaginationProvider value={defaultPaginationValues}>
      <FiltersProvider>
        <PokemonDataProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout> 
        </PokemonDataProvider>
      </FiltersProvider>
    </PaginationProvider>
  )
}

export default MyApp
