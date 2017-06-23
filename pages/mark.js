import React, { Component } from 'react'
import Head from 'next/head'
import axios from 'axios'
var stream = require('getstream')

export default class Index extends React.Component {

  constructor(props) {
   super(props);

   this.state = {value: '', feed: this.props.data.feed};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmitData = this.handleSubmitData.bind(this);
   this.handleSubmitData = this.handleSubmitData.bind(this);
 }

  static async getInitialProps () {
     var data = {}
     await new Promise((resolve) => {
      const request = axios.get('http://localhost:3001/getstream/mark').then(res => {
        var client = stream.connect(res.data.key, null);
        var feed = client.feed('KVFlat', res.data.user, res.data.token);
        feed.get({ limit: 5 }).then(function(list) {
           data = {'payload': res.data,'feed':list.results}
           resolve()
        });
      }).catch(function(error) {
        console.log(error)
      })
    })
     return { data }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmitData(event) {
    const activity = {"actor": "mark", "verb": "post", "message": this.state.value ,"object":1};
    var client = stream.connect(this.props.data.payload.key, null);
    var feed = client.feed('KVFlat', this.props.data.payload.user, this.props.data.payload.token);
    feed.addActivity(activity)
        .then(function(data) {
         console.log("data",data)
         feed.get({ limit: 5 }).then(function(results) {
          this.setState({feed: results.results});
          console.log('test',results.results)
         }.bind(this));
       }.bind(this))
      .catch(function(reason) {
        console.log("reason",reason)
       });
    event.preventDefault();
  }

  Shows() {
    const listShows = this.state.feed.map((res) =>
      <li key={ res['id'] }>
        <b>Actor:</b> { res['actor'] } <br/>
        <b>ID:</b> { res['id'] } <br/>
        <b>Message:</b> { res['message'] } <br/>
        <b>Object:</b> { res['object'] } <br/>
        <b>Time:</b> { res['time'] } <br/>
        <b>Verb:</b> { res['verb'] } <br/>
      </li>
    );
    return (
      <ul>{ listShows }</ul>
    );
  }

  render () {
    console.log("feed",this.state.feed)
    return (
      <div>
        <div className="wrapper">
          <Head>
            <title>Activity</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <form onSubmit={this.handleSubmit}>
             <label>
               Post:
               <input type="text" value={this.state.value} onChange={this.handleChange} />
             </label>
             <input type="button" value="Submit" onClick={this.handleSubmitData} />
           </form>
           <ul>{ this.Shows() }</ul>
        </div>
      </div>
    )
  }
}
