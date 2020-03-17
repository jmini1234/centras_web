import React, {Component} from 'react';
import My from './My';

class Size extends Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    state = { 
        board : 1 ,
        board1: [ 
            { 
                date: '3/1', 
                small: 10, 
                medium: 20, 
                large: 30
            }, 
            { 
                date: '3/2', 
                small: 5, 
                medium: 30, 
                large: 40
            } 
        ],

        board2: [
            { 
                date: 3/1, 
                small: 10, 
                medium: 20, 
                large: 30
            }
        ]
    }
    
    handleChange(e){

        this.setState({
            board : e.target.value
        });


    }
    
    render(){
        const { board } = this.state;
        const { board1 } = this.state;
        const { board2 } = this.state;
        return(
            
            <div>
                <My />
                <h1>크기</h1>
                <select value={this.state.value} onChange={this.handleChange}>
                <option selected value="1">1번 양식장</option>
                <option value="2">2번 양식장</option>
                <option value="3">3번 양식장</option>
                
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
                        board == 1 ? board1.map(row => 
                            (<BoardItem key={row.date} row={row} />)
                        ) : null 
                    } 
                    {
                        board == 2 ? board2.map(row => 
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