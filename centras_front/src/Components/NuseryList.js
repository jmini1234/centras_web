import React, {Component} from 'react';
import trash from '../img/trash-img.png'

const style_delete_btn={
    'margin-left': '15px',
    'margin-bottom': '10px',
    'border' : '0',
    'background-color' : 'white'
}

const style_delete_img={
    'height' : '20px',
    'width' : '20px',
}

class NurseryList extends Component{
    constructor(props){
        super(props);
        this.state = {nursery_list : [],
        isloggedIn : false 
        };
    }
    handleDelete(e){
        e.preventDefault();
        const delete_info = {
            method: "DELETE",
            headers: {
                'x-access-token' : localStorage.getItem("AUTHORIZATION"),
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var idx = e.target.value;
        fetch("http://localhost:3001/nursery/" + idx, delete_info)
        .then(response => { 
        response.json().then(
            result => {
                if(response.status == 400){
                    alert("삭제 실패")
                }
                else{
                    alert("삭제 성공")
                    window.location.reload();
                }
            }
        )
        });
    }
    componentWillMount(){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        if(localStorage.getItem("AUTHORIZATION")!=null){
            this.setState({
                isloggedIn : true
            })
            fetch("http://localhost:3001/nursery/list" , { headers })
            .then(res => res.json())
            .then(result => this.setState({nursery_list: result.data}));
        }
        else{
            alert("로그인이 필요한 서비스입니다!");
            window.history.back();
        } 
    }
    render(){
        return(
                this.state.nursery_list.map((nursery)=>
                    <div>
                        {nursery.nursery_id}
                        <button type="submit" classname="nursery-delete-btn" style={style_delete_btn} onClick = {this.handleDelete} value = {nursery.idx}><img src={trash} style={style_delete_img}/></button>
                    </div>
                )
            )
        }
}

export default NurseryList;