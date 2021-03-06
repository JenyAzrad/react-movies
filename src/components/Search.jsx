import React from 'react'

class Search extends React.Component{

    state = {
        search: '',
        type: 'all'
    }

    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }


    handleFilter = (event) => {
        this.setState(() =>
            ({type: event.target.dataset.type}),
            () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
    }

    render() {
       return <div className="row">
               <div className="input-field">
                   <input
                       placeholder="search"
                       type="search"
                       className="validate"
                       value={this.state.search}
                       onChange={(e) => this.setState({search: e.target.value})}
                       onKeyDown={this.handleKey}
                   />


                   <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>search</button>
               </div>
           <div>
               <label>
                   <input
                       class="with-gap"
                       type="radio"
                       name="type"
                       data-type="all"
                       value="all"
                       onChange={this.handleFilter}
                       checked={this.state.type === "all"}
                   />
                   <span>All</span>
               </label>

               <label>
                   <input
                       class="with-gap"
                       type="radio"
                       name="type"
                       data-type="movie"
                       value="movie"
                       onChange={this.handleFilter}
                       checked={this.state.type === "movie"}
                   />
                   <span>Movies only</span>
               </label>

               <label>
                   <input
                       class="with-gap"
                       type="radio"
                       name="type"
                       data-type="series"
                       value="series"
                       onChange={this.handleFilter}
                       checked={this.state.type === "series"}
                   />
                   <span>Series only</span>
               </label>
           </div>
       </div>

    }

}

export {Search}