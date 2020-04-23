import React, {Component} from 'react';

class NurseryList extends Component{
    constructor(props){
        super(props);
        this.state = {nursery_list : [],
        isloggedIn : false 
        };
    }
    handleDelete(e){
        e.preventDefault();
        console.log(e.target.value);
        console.log(localStorage.getItem("AUTHORIZATION"));
        const delete_info = {
            method: "DELETE",
            headers: {
                'x-access-token' : localStorage.getItem("AUTHORIZATION"),
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var idx = e.target.value;
        console.log(idx);
        fetch("http://localhost:3001/nursery/" + idx, delete_info)
        .then(response => { 
        console.log(response);
        response.json().then(
            result => {
                console.log(result);

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
                        <button onClick = {this.handleDelete} value = {nursery.idx}>X</button>
                    </div>
                )
        )
    }

}

export default NurseryList;