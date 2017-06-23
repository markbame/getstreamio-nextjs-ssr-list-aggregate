import React, { Component } from 'react'
import Head from 'next/head'
var stream = require('getstream');

export default class Index extends Component {
  static async getInitialProps () {
    const client = stream.connect('g5858gfymtgj', 'waqspfbuy2eyn9gvhgbwvz8gj7nz2798xs95eqesmrfkxs9ehm8hy587avkn9kpd');
    var user1 = client.feed('KVFlat', 'mark');
     var data = {}
     await new Promise((resolve) => {
       user1.get({ limit: 5 }).then(function(results) {
         console.log(results)
         data = {results}
         resolve()
       });
     })
     return {"data":data.results}
  }

  Shows(props) {
    const listShows = props.data.results.map((res) =>
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

    return (
      <div>
        <div className="wrapper">
          <Head>
            <title>Index</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <ul>{ this.Shows(this.props) }</ul>
        </div>
      </div>
    )
  }
}

