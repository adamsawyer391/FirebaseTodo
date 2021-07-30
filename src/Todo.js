import React from 'react'
import Card from '@material-ui/core/Card'
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import './App.css';
import db from './firebase';







class Todo extends React.Component {

    handleClick(id) {
        console.log(id);
    }

    convertTimestamp(timestamp){
        var t = new Date(timestamp);
        var format = t.format('mm/dd/yyyy hh:MM:ss')
    }

    render(){
        return (
            
            <div className="slide-in">
                
                <List>
                    <ListItem className="card-area" onClick={ () => this.handleClick(this.props.key_id)} >
                        {/* <ListItemText primary="Todo Item" secondary="Today's Date" /> */}
                        <ListItemAvatar>
                            <Avatar src={this.props.url} />
                        </ListItemAvatar>
                        <ListItemText primary={this.props.text} secondary={this.props.subtext} />
                        {/* <ListItemText primary="Time Submitted:" secondary= {this.props.timestamp.seconds} /> */}
                    </ListItem>
                    <Button onClick={event => db.collection('todos').doc(this.props.key_id).delete() }>DELETE</Button>
                </List>
            </div>

        )
    }
}



// class Todo extends React.Component {

//     handleClick(id) {
//         console.log(id);
//     }

//     render(){
//         return (

//             <div className="slide-in">
//                 <List>
//                     <ListItem className="card-area" onClick={ () => this.handleClick(this.props.key_id)} >
//                         {/* <ListItemText primary="Todo Item" secondary="Today's Date" /> */}
//                         <ListItemAvatar>
//                             <Avatar src={this.props.url} />
//                         </ListItemAvatar>
//                         <ListItemText primary={this.props.text} secondary={this.props.subtext} />
//                     </ListItem>
//                 </List>
//             </div>

//             // <div className="slide-in">
//             //     <List>
//             //         <ListItem className="card-area" onClick={ () => this.handleClick(this.props.key_id)} className="list-item-card" >
//             //             {/* <ListItemText primary="Todo Item" secondary="Today's Date" /> */}
//             //             <ListItemAvatar>
//             //                 <Avatar src={this.props.url} />
//             //             </ListItemAvatar>
//             //             <ListItemText primary={this.props.text} secondary={this.props.subtext} onClick={ () => this.handleClick(this.props.key_id)} />
//             //         </ListItem>
//             //     </List>
//             // </div>
            
//             // <div>
//                 // <Card className="list-card">
//                 //     <div className="card-area">
//                 //         {props.text}
//                 //     </div>
//                 // </Card>
//             // </div>
//         )
//     }
// }

// function Todo(props) {
//     return (
//         <div className="slide-in">
//             <List>
//             <ListItem className="card-area">
//                 {/* <ListItemText primary="Todo Item" secondary="Today's Date" /> */}
//                 <ListItemAvatar>
//                     <Avatar src={props.url} />
//                 </ListItemAvatar>
//                 <ListItemText primary={props.text} secondary={props.subtext} onClick={this.handleClick(props.key_id)} />
//             </ListItem>
//         </List>
//         </div>
        
//         // <div>
//             // <Card className="list-card">
//             //     <div className="card-area">
//             //         {props.text}
//             //     </div>
//             // </Card>
//         // </div>
//     )
// }

export default Todo
