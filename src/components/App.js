import React from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'

class App extends React.Component {
    
    state = { images: [] };

    onSearch = async term => {
        const response  = await unsplash.get('search/photos', {
            params: {
                query: term
            }
        });

        this.setState({images : response.data.results});
    }

    
    render(){
        return (
            <div className="ui containter" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearch}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;