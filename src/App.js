import React, { Component } from 'react'
import {
  InstantSearch,
  SearchBox,
  Menu,
  PoweredBy,
  Highlight,
  ToggleRefinement,
  InfiniteHits
} from 'react-instantsearch/dom'
import './App.css'

const Hit = ({ hit }) => {
  return (
    <div
      key={hit.objectID}
      className="bg-white p-8 rounded shadow hover:shadow-md my-2 transition"
    >
      <h3 className="text-xl mb-3 flex flex-col sm:flex-row">
        <Highlight
          attribute="API"
          hit={hit}
          className="mr-2 text-grey-darkest font-normal"
        />
        <span className="flex items-center mt-2 sm:-mt-1">
          {hit.HTTPS && (
            <span className="flex items-center text-xxs border-solid border-grey-light text-grey border-2 px-2 py-1 rounded-full mr-1 uppercase">
              <svg
                className="w-2 h-auto -mt-1 mr-1 fill-current flex-no-shrink"
                xmlns="http://www.w3.org/2000/svg"
                width="402"
                height="402"
                viewBox="0 0 402 402"
              >
                <path d="M357.5 190.7c-5.3-5.3-11.8-8-19.4-8h-9.1v-54.8c0-35-12.6-65.1-37.7-90.2C266.1 12.6 236 0 201 0c-35 0-65.1 12.6-90.2 37.7C85.7 62.8 73.1 92.9 73.1 127.9v54.8h-9.1c-7.6 0-14.1 2.7-19.4 8 -5.3 5.3-8 11.8-8 19.4V374.6c0 7.6 2.7 14.1 8 19.4 5.3 5.3 11.8 8 19.4 8H338c7.6 0 14.1-2.7 19.4-8 5.3-5.3 8-11.8 8-19.4V210.1C365.5 202.5 362.8 196.1 357.5 190.7zM274.1 182.7H127.9v-54.8c0-20.2 7.1-37.4 21.4-51.7 14.3-14.3 31.5-21.4 51.7-21.4 20.2 0 37.4 7.1 51.7 21.4 14.3 14.3 21.4 31.5 21.4 51.7V182.7z" />
              </svg>
              <span>HTTPS</span>
            </span>
          )}
          {hit.Cors === 'yes' && (
            <span className="flex items-center text-xxs border-solid border-grey-light text-grey border-2 px-2 py-1 rounded-full mr-1 uppercase">
              <svg
                className="w-2 h-auto -mt-1 mr-1 fill-current flex-no-shrink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 268.8 268.8"
              >
                <path d="M267.9 119.5c-0.4-3.8-4.8-6.6-8.6-6.6 -12.3 0-23.2-7.2-27.8-18.4 -4.7-11.5-1.7-24.8 7.5-33.2 2.9-2.6 3.2-7.1 0.8-10.1 -6.3-8-13.5-15.2-21.3-21.5 -3.1-2.5-7.6-2.1-10.2 0.8 -8 8.9-22.4 12.2-33.5 7.5 -11.6-4.9-18.9-16.6-18.2-29.2 0.2-4-2.7-7.4-6.6-7.8 -10-1.2-20.2-1.2-30.2-0.1 -3.9 0.4-6.8 3.8-6.7 7.7 0.4 12.5-6.9 24-18.4 28.7 -11 4.5-25.3 1.2-33.3-7.6 -2.6-2.9-7.1-3.3-10.1-0.9 -8.1 6.3-15.4 13.6-21.7 21.5 -2.5 3.1-2.1 7.6 0.8 10.2 9.4 8.5 12.4 21.9 7.5 33.5 -4.6 11-16.1 18.2-29.2 18.2 -4.3-0.1-7.3 2.7-7.8 6.6 -1.2 10.1-1.2 20.4-0.1 30.6 0.4 3.8 5 6.6 8.8 6.6 11.7-0.3 22.9 6.9 27.7 18.4 4.7 11.5 1.7 24.8-7.5 33.2 -2.9 2.6-3.2 7.1-0.8 10.1 6.2 8 13.4 15.2 21.3 21.5 3.1 2.5 7.6 2.1 10.2-0.8 8-8.9 22.4-12.2 33.5-7.5 11.6 4.9 18.9 16.6 18.2 29.2 -0.2 4 2.7 7.4 6.6 7.9 5.1 0.6 10.3 0.9 15.5 0.9 4.9 0 9.8-0.3 14.8-0.8 3.9-0.4 6.8-3.8 6.7-7.7 -0.5-12.5 6.9-24 18.4-28.7 11.1-4.5 25.3-1.2 33.3 7.6 2.7 2.9 7 3.2 10.1 0.8 8-6.3 15.3-13.5 21.7-21.5 2.5-3.1 2.1-7.6-0.8-10.2 -9.4-8.5-12.4-21.9-7.5-33.5 4.6-10.9 15.6-18.2 27.5-18.2l1.7 0c3.9 0.3 7.4-2.7 7.9-6.6C269 139.9 269.1 129.6 267.9 119.5zM134.6 179.5c-24.7 0-44.8-20.1-44.8-44.8 0-24.7 20.1-44.8 44.8-44.8 24.7 0 44.8 20.1 44.8 44.8C179.4 159.4 159.3 179.5 134.6 179.5z" />
              </svg>
              <span>CORS</span>
            </span>
          )}
          {hit.Auth && (
            <span className="flex items-center text-xxs border-solid border-grey-light text-grey border-2 px-2 py-1 rounded-full mr-1 uppercase">
              <svg
                className="w-2 h-auto -mt-1 mr-1 fill-current flex-no-shrink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 348 348"
              >
                <path d="M317.3 54.4C257.9 54.4 212.4 37.4 174 0 135.5 37.4 90 54.4 30.7 54.4c0 97.4-20.2 236.9 143.3 293.6C337.5 291.3 317.3 151.8 317.3 54.4zM162.1 225.8l-47.7-47.8 21.4-21.4 26.4 26.4 50.1-50.1 21.4 21.4L162.1 225.8z" />
              </svg>
              <span>{hit.Auth}</span>
            </span>
          )}
        </span>
      </h3>
      <p className="text-grey-dark mb-3">
        <Highlight attribute="Description" hit={hit} />
      </p>
      <p className="flex items-center">
        <svg
          className="w-3 h-3 mr-2 text-grey fill-current flex-no-shrink"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.1 512.1"
        >
          <path d="M312.5 199.6c-6.1-6.1-12.8-11.5-20.1-16.1 -19.2-12.3-41.6-18.9-64.4-18.9 -31.7-0.1-62.1 12.5-84.5 35L34.9 308.2c-22.3 22.4-34.9 52.7-34.9 84.3 0 66 53.4 119.5 119.4 119.5 31.6 0.1 62-12.4 84.4-34.8l89.6-89.6c1.6-1.6 2.5-3.8 2.5-6.1 0-4.7-3.9-8.5-8.6-8.5h-3.4c-18.7 0.1-37.3-3.5-54.6-10.6 -3.2-1.3-6.9-0.6-9.3 1.9l-64.4 64.5c-20 20-52.4 20-72.4 0 -20-20-20-52.4 0-72.4l109-108.9c20-20 52.4-20 72.4 0 13.5 12.7 34.5 12.7 48 0 5.8-5.8 9.3-13.5 9.9-21.7C323 216.1 319.4 206.5 312.5 199.6z" />
          <path d="M477.1 35c-46.7-46.7-122.3-46.7-169 0l-89.5 89.4c-2.5 2.5-3.2 6.2-1.8 9.4 1.4 3.2 4.5 5.3 8 5.2h3.2c18.7 0 37.2 3.6 54.5 10.7 3.2 1.3 6.9 0.6 9.3-1.9l64.3-64.2c20-20 52.4-20 72.4 0 20 20 20 52.4 0 72.4l-80 80 -0.7 0.8 -28 27.8c-20 20-52.4 20-72.4 0 -13.5-12.7-34.5-12.7-48 0 -5.8 5.8-9.3 13.6-9.9 21.8 -0.6 9.8 3 19.3 9.9 26.3 9.9 9.9 21.4 18 34.1 23.9 1.8 0.9 3.6 1.5 5.4 2.3 1.8 0.8 3.7 1.4 5.5 2 1.8 0.7 3.7 1.3 5.5 1.8l5 1.4c3.4 0.9 6.8 1.5 10.3 2.1 4.2 0.6 8.5 1 12.7 1.2h6 0.5l5.1-0.6c1.9-0.1 3.8-0.5 6.1-0.5h2.9l5.9-0.9 2.7-0.5 4.9-1h0.9c21-5.3 40.1-16.1 55.4-31.4l108.6-108.6C523.7 157.3 523.7 81.7 477.1 35z" />
        </svg>
        <a
          href={hit.Link}
          className="text-blue hover:text-blue-darker transition no-underline truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          {hit.Link.replace('https://', '')
            .replace('http://', '')
            .replace('www.', '')}
        </a>
      </p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="h-screen overflow-hidden">
        <InstantSearch
          appId="AMG1EZW1ON"
          apiKey="54218a92fb1ba01b898785c8ff1b8ceb"
          indexName="APIS"
        >
          <div className="flex flex-col h-screen font-sans">
            <header className="flex bg-white w-full border-grey-light border-solid border-b flex-no-shrink">
              <div className="p-4 lg:w-64 xxl:w-80 items-center flex-no-shrink border-grey-light border-solid border-r hidden md:flex">
                <h1 className="text-base text-grey-darker uppercase tracking-wide">
                  Public API Search
                </h1>
              </div>
              <div className="flex flex-grow justify-between">
                <SearchBox
                  className="h-full flex-grow"
                  autoFocus={true}
                  translations={{
                    placeholder: 'Search for "Weather", "Movie"...'
                  }}
                />
                <div className="flex items-center border-grey-light border-solid border-l px-4 flex-no-shrink">
                  <PoweredBy className="flex flex-col sm:flex-row" />
                </div>
              </div>
            </header>
            <div className="flex flex-grow">
              <aside className="lg:w-64 xxl:w-80 flex-no-shrink bg-white border-grey-light border-solid border-r z-10 max-h-screen hidden md:block overflow-hidden">
                <div className="h-full overflow-y-auto">
                  <h4 className="font-normal uppercase text-xs tracking-wide text-grey-dark p-4 border-grey-light border-solid">
                    Categories
                  </h4>
                  <Menu
                    attribute="Category"
                    limit={8}
                    searchable={true}
                    translations={{
                      placeholder: 'Search for categories'
                    }}
                  />
                  <h4 className="font-normal uppercase text-xs tracking-wide text-grey-dark px-4 pt-4 pb-1 border-grey-light border-solid border-t">
                    Features
                  </h4>
                  <div className="py-2">
                    <ToggleRefinement
                      attribute="HTTPS"
                      label="HTTPS"
                      value={true}
                    />
                    <ToggleRefinement
                      attribute="Cors"
                      label="CORS"
                      value="yes"
                    />
                  </div>
                  <h4 className="font-normal uppercase text-xs tracking-wide text-grey-dark px-4 pt-4 pb-1 border-grey-light border-solid border-t">
                    Authentication
                  </h4>
                  <Menu attribute="Auth" limit={8} />
                </div>
              </aside>
              <main className="bg-grey-lighter flex-grow max-h-screen overflow-hidden">
                <div className="h-full overflow-y-scroll">
                  <div className="flex px-8 py-6">
                    <InfiniteHits hitComponent={Hit} />
                  </div>
                </div>
              </main>
            </div>
            <footer className="flex flex-no-shrink justify-between flex-col sm:flex-row p-4 border-grey-light border-solid border-t text-sm text-grey-dark">
              <div className="text-center sm:text-left">
                Made by{' '}
                <a
                  href="https://twitter.com/@frontstuff_io"
                  className="text-blue hover:text-blue-darker transition no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @frontstuff_io
                </a>{' '}
                and{' '}
                <a
                  href="https://twitter.com/@cdenoix"
                  className="text-blue hover:text-blue-darker transition no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @cdenoix
                </a>
              </div>
              <div className="text-center sm:text-right mt-2 sm:mt-0">
                Data from{' '}
                <a
                  href="https://api.publicapis.org/"
                  className="text-blue hover:text-blue-darker transition no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  api.publicapis.org
                </a>
              </div>
            </footer>
          </div>
        </InstantSearch>
      </div>
    )
  }
}

export default App
