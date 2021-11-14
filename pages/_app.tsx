import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from "../components/Layout"
import { PaginationProvider } from "../contexts/PaginationContext"
import { SortProvider } from "../contexts/SortContext"
import { PokemonDataProvider } from "../contexts/PokemonDataContext"
import { FiltersProvider } from "../contexts/FiltersContext"
import { LoadingProvider } from "../contexts/LoadingContext"
import { MenusProvider } from "../contexts/MenusContext"



function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <PaginationProvider>
      <LoadingProvider>
        <FiltersProvider>
          <SortProvider>
            <PokemonDataProvider>
              <MenusProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout> 
              </MenusProvider>
            </PokemonDataProvider>
          </SortProvider>
        </FiltersProvider>
      </LoadingProvider>
    </PaginationProvider>
  )
}

export default MyApp
