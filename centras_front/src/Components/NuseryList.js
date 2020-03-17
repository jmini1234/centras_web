import React, {Component} from 'react';

class NurseryList extends Component{
    constructor(props){
        super(props);
        this.state = {nursery_list : []};
    }

    componentWillMount(){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        fetch("http://localhost:3001/nursery/list" , { headers })
        .then(res => res.json())
        .then(result => this.setState({nursery_list: result.data}));
    }

    render(){
        return(
                this.state.nursery_list.map((nursery)=>
                    <div>
                        {nursery.nursery_id}
                    </div>
                )
        )
    }

}

export default NurseryList;