import React, { Component } from 'react';
import {
  InstantSearch,
  SearchBox,
  Menu,
  PoweredBy,
  Highlight,
  ToggleRefinement,
  InfiniteHits
} from 'react-instantsearch/dom';
import './simple-grid.css';
import './App.css';


const Hit = ({hit}) => {
  return (
    <div key={hit.objectID} className="Hits__hit">
      <div className="tags">
        <span className="tags__tag"><i className="fa fa-tag fa-xs"/>{hit.Category}</span>
        {hit.HTTPS &&
          <span className="tags__tag"><i className="fa fa-lock fa-xs"/>HTTPS</span>
        }
        {hit.Cors === 'yes' &&
          <span className="tags__tag"><i className="fa fa-cog fa-xs"/>CORS</span>
        }
				{hit.Auth &&
				  <span className="tags__tag"><i className="fa fa-shield-alt fa-xs"/>{hit.Auth}</span>
				}
      </div>
      <p><strong><Highlight attribute="API" hit={hit}/></strong> - <Highlight attribute="Description" hit={hit}/></p>
      <a href={hit.Link} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-link fa-xs"/>{hit.Link}
      </a>
    </div>
  )
};

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="AMG1EZW1ON"
        apiKey="54218a92fb1ba01b898785c8ff1b8ceb"
        indexName="APIS"
      >
        <div className="container">
           <div className="row">
            <div className="col-12">
              <h1>Public API Search</h1>
            </div>
           </div>
          <div className="row">
            <div className="col-12">
              <div className="menu">
                <SearchBox translations={{
									placeholder: 'Search for "Weather", "Movie"...'
								}}/>
                <PoweredBy />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <h4>Category</h4>
              <Menu attribute="Category" limit={10} searchable={true}/>
              <h4>Features</h4>
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
              <h4>Authentication</h4>
              <Menu attribute="Auth" limit={10}/>
            </div>
            <div className="col-9">
              <div className="Hits">
                <InfiniteHits hitComponent={Hit}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="footer">
                <div>
                  Made by <a href="https://twitter.com/@frontstuff_io" target="_blank" rel="noopener noreferrer">@frontstuff_io</a> and <a href="https://twitter.com/@cdenoix" target="_blank" rel="noopener noreferrer">@cdenoix</a>
                </div>
                <div>
                  Data from <a href="https://api.publicapis.org/" target="_blank" rel="noopener noreferrer">https://api.publicapis.org/</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InstantSearch>
    );
  }
}

export default App;
