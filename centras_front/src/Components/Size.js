import React, {Component} from 'react';
import My from './My';
import Header from '../Layout/Header';
import NurseryList from './NuseryList';
import './Size.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: "100%"
    },
    table: {
        width: "30%"
    }
})
class Size extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nursery_list : [],
            size : [] 
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount(){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        var first;
        fetch("http://localhost:3001/nursery/list" , { headers })
        .then(res => res.json())
        .then(result => {
            this.setState({nursery_list: result.data})
            console.log(result.data[0].idx);
            first = result.data[0].idx;
            fetch("http://localhost:3001/nursery/" + first + "/size", { headers })
            .then(res => res.json())
            .then(result2 => {
                console.log(result2)
                this.setState({size: result2.size})
            });
            }  
        );
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
        .then(result => {
            console.log(result)
            this.setState({size: result.size})
        });
    }
    
    render(){
        return(
            
            <div>
                <My />
                <div className = "sizePage">

                    <div className = "sizeHeader">양식장 선택</div> 
                    <select className = "sizeSelect" defaultValue={this.state.firstIdx} value={this.state.nurseryIdx} onChange={this.handleChange}>
                    {
                        this.state.nursery_list.map((nursery)=>
                        <option value = {nursery.idx}> {nursery.nursery_id} </option>
                        )
                    }
                    </select>
                    
                    <Table className = "sizeTable">
                        <TableHead>
                            <TableRow>
                                <TableCell align = 'center' >날짜</TableCell>
                                <TableCell align = 'center'>5-13cm</TableCell>
                                <TableCell align = 'center'>14-20cm</TableCell>
                                <TableCell align = 'center'>20-30cm</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            this.state.size.map((sizeList) =>
                            (<SizeItem  
                                key={sizeList.idx} update_time ={sizeList.update_time}
                                s_num={sizeList.s_num} m_num={sizeList.m_num} l_num={sizeList.l_num}/>)
                            ) 
                        }
                        </TableBody>
                    </Table>
                    
                </div>
                
            </div>
            
        );
    }

}
class SizeItem extends React.Component {
    render(){
        return (
            <TableRow>
                <TableCell align = 'center'>{this.props.update_time}</TableCell>
                <TableCell align = 'center'>{this.props.s_num}</TableCell>
                <TableCell align = 'center'>{this.props.m_num}</TableCell>
                <TableCell align = 'center'>{this.props.l_num}</TableCell>
            </TableRow>
        )
    }
}

export default Size;