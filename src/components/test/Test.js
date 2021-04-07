import React, { Component } from 'react'

 class Test extends Component {
   state = {
     title:'',
     body:''
   }
     componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({
        title:data.title,
        body:data.body
      }))
     }
    //  componentWillMount(){
    //     console.log('componets will mount....');
    //          }
    //          componentDidUpdate(){
    //             console.log('componets did update....');
    //                  }

    //                  componentWillUpdate(){
    //                     console.log('componets will update....');
    //                          }
    //                          componentWillReceiveProps(prevprops,nextprops){
    //                             console.log('Reciebved...');
    //                                  }

    //                                  static getDerivedStateFromProps(nextProps, prevState) {
    //                                       return {
    //                                         test: 'something'
    //                                       };
    //                                     }
                                      
    //                                     getSnapshotBeforeUpdate(prevProps, prevState) {
    //                                       console.log(' getSnapshotBeforeUpdate...');
    //                                     }

    render() {
      const {title,body} = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}
export default Test