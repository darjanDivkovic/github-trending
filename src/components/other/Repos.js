import React, { Component } from 'react'
import axios from 'axios'

import RepoItem from '../other/RepoItem';

export default class Repos extends Component {
    constructor(props){
        super(props);
        this.state = {
            popularRepos : [],
            unpopularRepos : [],
            pick : 'desc',
            search : props.search,
        }

        this.fetchRepos = this.fetchRepos.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.fetchRepos('desc');
        this.fetchRepos('asc');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.search !== this.state.search) {
          this.setState({ search: nextProps.search });
        }
        let lang = this.state.search;
        this.fetchRepos('desc', lang);
        this.fetchRepos('asc', lang);
        
    }

    fetchRepos(order, lang){
        axios.get(`https://api.github.com/search/repositories?q=created:%22%3E2020-06-10%22+language:${lang}&sort=stars&order=${order}&per_page=10`)
             .then(res => {
                 let newRepos = res.data.items.map(repo => {
                     return {
                         name : repo.full_name,
                         desc : repo.description,
                         lang : repo.language,
                         stars : repo.stargazers_count,
                         forks : repo.forks_count,
                     }
                 });
                 if(order === 'desc') {
                    this.setState({popularRepos : newRepos});
                 }
                 else if(order === 'asc'){
                    this.setState({unpopularRepos : newRepos});
                 }
                 
             });
             
    }

    handleClick(e){
        this.setState({pick : e.target.value});
    }

    render() {
        let repos;
        if(this.state.pick === 'desc'){
            repos = 
            <ul>
            {
                this.state.popularRepos.map(repo => <RepoItem key={repo.name} repo={repo} />)
            }
            </ul>
        }
        else if(this.state.pick === 'asc'){
            repos = 
            <ul>
            {
                this.state.unpopularRepos.map(repo => <RepoItem key={repo.name} repo={repo} />)
            }
            </ul>
        }
        return (
            <div className='repos'>
                <div className='filter-container'>
                <button onClick={this.handleClick} value='desc'>Popular</button>
                <button onClick={this.handleClick} value='asc'>Unpopular</button>    
                </div>
                {
                    repos
                }
            </div>
        )
    }
}
