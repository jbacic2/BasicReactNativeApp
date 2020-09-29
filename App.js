import React, { Component, Headers } from 'react';
import { Text, View, Button } from 'react-native';

class App extends Component {
  constructor(){
    super();
    this.state={
      sum: '?',
      dif: '?',
      message: 'No API Message',
      add: true
    }
  }
  
  /*componentDidMount(){
    fetch('http://127.0.0.1:5000/hi')=>
    console.log("In did mount")
    this.apiCall()
  }
  async apiCall(){
    let resp = await fetch('http://127.0.0.1:5000/hi')
    console.log("here")
    console.log(resp)
    let respJson = await resp.json()
    this.setState({message:respJson.message})
  }*/
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        {this.state.message}
      </Text>
    <Button
        title="Send a GET request get a message"
        onPress={() =>  fetch("http://108.162.100.190:5000/hi",{method: 'GET'}).then(response => response.json().then(data => {
        this.setState({message:data.message});
      }))
      }
      />
      <Text>
       4+5 = {this.state.sum}
      </Text>
      <Button
        title="Send a POST request to find out"
        onPress={() =>  fetch("http://108.162.100.190:5000/sum",{
          method: 'POST',
          body: JSON.stringify({'num1': 4,'num2': 5}),
           headers: {
          "Content-Type": "application/json"
          }}).then(response => response.json().then(data => {
        this.setState({sum:data.sum});
        console.log(data)
      }))
      }
      />
      <Text>
        182-14 = {this.state.dif}
      </Text>
      <Button
        title="Send a POST request to find out"
        onPress={() =>  fetch("http://108.162.100.190:5000/sub",{
          method: 'POST',
          body: JSON.stringify({'num1': 182,'num2': 14}),
           headers: {
          "Content-Type": "application/json"
          }}).then(response => response.json().then(data => {
        this.setState({dif:data.dif});
        console.log(data)
      }))
      }
      />
    </View>
    );
  }
}

export default App;

