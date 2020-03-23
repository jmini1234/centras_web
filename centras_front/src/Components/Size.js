import React, {Component} from 'react';
import My from './My';
import Header from '../Layout/Header';

// {board1.map(row =>(<BoardItem key={row.date} row={row} />))} 
class Size extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nursery_list : [],
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount(){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        var Idx;
        fetch("http://localhost:3001/nursery/list" , { headers })
        .then(res => res.json())
        .then(result => {
            this.setState({nursery_list: result.data})
            Idx = result.data[0].idx;
            }  
        );
        console.log("aahhhhhhhhhhhhhhhh" + Idx);
        fetch("http://localhost:3001/nursery/" + Idx + "/size", { headers })
        .then(res => res.json())
        .then(result => console.log(result));
    }

    handleChange(e){

        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        console.log(e.target.value);
        var Idx = e.target.value;
        fetch("http://localhost:3001/nursery/" + Idx + "/size", { headers })
        .then(res => res.json())
        .then(result => console.log(result));
    }
    
    render(){
        return(
            
            <div>
                <My />
                <h1>크기</h1>
                <select value={this.state.nurseryIdx} onChange={this.handleChange}>
                {
                    this.state.nursery_list.map((nursery)=>
                    <option value = {nursery.idx}> {nursery.nursery_id} </option>
                    )
                }
                </select>
                <table border="1"> 
                    <tbody> 
                    <tr align="center">
                        <td width="100">날짜</td> 
                        <td width="100">5-13cm</td> 
                        <td width="100">14-20cm</td> 
                        <td width="100">20-30cm</td> 
                    </tr>
                    {
                        board === 1 ? board1.map(row => 
                            (<BoardItem key={row.date} row={row} />)
                        ) : null 
                    } 
                    {
                        board === 2 ? board2.map(row => 
                            (<BoardItem key={row.date} row={row} />)
                        ) : null 
                    }          
                    </tbody> 
                </table>
            </div>
            
        );
    }

}

class BoardItem extends React.Component {
    render() { 
        return( 
        <tr> 
            <td>{this.props.row.date}</td> 
            <td>{this.props.row.small}</td> 
            <td>{this.props.row.medium}</td> 
            <td>{this.props.row.large}</td> 
            </tr> 
        ); 
    }
}

export default Size;