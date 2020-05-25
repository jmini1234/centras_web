import './Size.css';
import React, {Component} from 'react';
import My from './My';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Size extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nursery_list : [],
            size : [],
            check : false,
            curIdx : -1
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
            if(result.data.length===0){
                alert("양식장 등록이 필요합니다")
                window.location = '/';
            }
            else{
                this.setState({check: true});
                this.setState({nursery_list: result.data})
                first = result.data[0].idx;
                this.setState({curIdx: first});
                fetch("http://localhost:3001/nursery/" + first + "/size", { headers })
                .then(res => res.json())
                .then(result2 => {
                    this.setState({size: result2.size})
                });
            }
        });
    }
    handleChange(e){
        this.setState({curIdx: e.target.value});
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        var Idx = e.target.value;
        fetch("http://localhost:3001/nursery/" + Idx + "/size", { headers })
        .then(res => res.json())
        .then(result => {
            this.setState({size: result.size})
        });
    }
    getSizeList(){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        var idx = this.state.curIdx;
        fetch("http://localhost:3001/nursery/" + idx + "/size", { headers })
        .then(res => res.json())
        .then(result => {
            this.setState({size: result.size})
        });
    }
    handleClick = e => {
        e.preventDefault();
        const info = {
            method: "POST",
            headers: {
                "x-access-token": localStorage.getItem("AUTHORIZATION"),
                "Content-Type" : "application/x-www-form-urlencoded"
            }
        };
        var idx = this.state.curIdx;
        fetch("http://localhost:3001/esp/" + idx + "/size", info)
        .then(response => { 
            response.json().then(
                result => {
                    if(response.status === 400){
                        alert("측정 실패")
                    }
                    else{
                        alert("측정 성공")
                        this.getSizeList();
                    }
                }
            )
          })
          .catch(error => {
              console.log(error.response)
          });
    }
    render(){
        return(
            <div>
                <My/>
                <div className = "sizePage">
                    <div className="sizeHeaderList">
                        <div className = "sizeHeader">양식장 선택</div> 
                        <select className = "sizeSelect" defaultValue={this.state.firstIdx} value={this.state.nurseryIdx} onChange={this.handleChange}>
                        {
                            this.state.nursery_list.map((nursery)=>
                            <option value = {nursery.idx}> {nursery.nursery_id} </option>
                            )
                        }
                        </select>
                        <button onClick={this.handleClick} id="size_start_btn" type="button" type="submit" class="btn btn-primary">측정시작</button>
                    </div>

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
                                key={sizeList.idx} update_time ={sizeList.update_time.substring(0,10)}
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