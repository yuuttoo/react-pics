import React from 'react';

//獲取user input

class SearchBar extends React.Component {
    state =  { term: ''};

    onFormSubmit = event => {
        event.preventDefault();//加上preventDefault才不會自動送出表單

       this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form"> 
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                        value={this.state.term} 
                        onChange={e=>this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div> 
        );
    }
}

export default SearchBar;