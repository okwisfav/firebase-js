import React from "react";
import StartFirebase from "../firebaseconfig";
import { ref, set, update, remove, child, get} from "firebase/database"
import './index.css'
export class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            db: '',
            username: '',
            fullname: '',
            phonenumber: '',
            dob: ''
        }
        this.interface = this.interface.bind(this);
    }
    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }

    render(){
        return(
            <>
                <label>Enter Username</label>
                    <input type='text' id="userbox" value={this.state.username}
                    onChange={e => {this.setState({username:e.target.value})}}/>
                    <br/> <br/>

                   <label>Enter Full Name</label>
                    <input type='text' id="namebox" value={this.state.fullname}
                    onChange={e => {this.setState({fullname:e.target.value})}}/>
                    <br/> <br/>

                   <label>Enter  Phone Nmuber</label>
                    <input type='number' id="phonebox" value={this.state.phonenumber}
                    onChange={e => {this.setState({phonenumber:e.target.value})}}/>
                    <br/> <br/>

                   <label>Choose Date Of Birth</label>
                    <input type='Date' id="datebox" value={this.state.dob}
                    onChange={e => {this.setState({dob:e.target.value})}}/>
                    <br/> <br/>

                    <button id="addBtn" onClick={this.interface}>Add Data</button>
                    <button id="updateBtn" onClick={this.interface}>Update</button>
                    <button id="deleteBtn" onClick={this.interface}>delele</button>
                    <button id="selectBtn" onClick={this.interface}>select</button>
            </>
        )
    }

    interface(event){
        const id = event.target.id;
        if(id=='addBtn'){
            this.insertData();
        }
        else if(id=='insertBtn'){
            this.insertData();
        }
        else if(id=='deleteBtn'){
            this.deleteBtn();
        }
        else if(id=='selectBtn'){
            this.selectBtn();
        }
    }
    getAllInputs(){
         return{
            username: this.state.username,
            name: this.state.fullname,
            phone: Number(this.state.phonenumber),
            dob: this.state.dob
         }
    }
    insertData(){
        const db = this.state.db;
        const data = this.getAllInputs();
        set(ref(db, 'Customer/' +data.username),{
            fullname: data.name,
            phonenumber: data.phone,
            dataofbirth: data.dob
        })
        .then(()=>{alert('data was added successfully')})
        .catch((error) => {alert("there was an error, details: " +error)});
    }

        updatetData(){
        const db = this.state.db;
        const data = this.getAllInputs();
        update(ref(db, 'Customer/' +data.username),{
            fullname: data.name,
            phonenumber: data.phone,
            dataofbirth: data.dob
        })
        .then(()=>{alert('data was update successfully')})
        .catch((error) => {alert("there was an error, details: " +error)});
    }

        deletetData(){
        const db = this.state.db;
        const data = this.getAllInputs();
        remove(ref(db, 'Customer/' +data.username) )
        .then(()=>{alert('data was update successfully')})
        .catch((error) => {alert("there was an error, details: " +error)});
    }

    selectData(){
        const dbref = ref (this.state.db);
        const username = this.getAllInputs().username;
        get(child(dbref, 'Customer/' + username)).then((snapshot) =>{
            if(snapshot.exists()){
                this.setState({
                    fullname: snapshot.val().fullname,
                    phonenumber: snapshot.val().phonenumber,
                    dob: snapshot.val().dataofbirth
                })
            }
             else{
                alert("no data found!");
             }
        })
        .catch((error) => {alert("there is an error"+error)})
    }
}