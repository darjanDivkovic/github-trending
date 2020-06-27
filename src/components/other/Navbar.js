import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../res/github.png'
import searchIcon from '../../res/search.png'

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            search : '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(e){
        this.setState({search : e.target.value});
    }

    handleSearch(){

        this.props.setSearch(this.state.search);
    }


    render() {
        return (
            <div className='navbar-container'>
            <img src={logo} alt='logo' />
            <Link to='/team' className='link'>Team</Link>
            <Link to='/enterprise' className='link'>Enterprise</Link>
            <Link to='/explore' className='link'>Explore</Link>
            <Link to='/marketplace' className='link'>Marketplace</Link>
            <Link to='/pricing' className='link'>Pricing</Link>
            <input type='text' className='search' onChange={this.handleChange}/>
            <button onClick={this.handleSearch} className='search-btn'>
                <img src={searchIcon} alt='search' />
            </button>
            </div>
        )
    }
}
