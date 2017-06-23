import React, { Component } from 'react'
import Head from 'next/head'
var stream = require('getstream');

export default class Index extends Component {
  static async getInitialProps () {
    const client = stream.connect('g5858gfymtgj', 'waqspfbuy2eyn9gvhgbwvz8gj7nz2798xs95eqesmrfkxs9ehm8hy587avkn9kpd');
    var user1 = client.feed('testaggregate', '2ahgklaf0');
     var data = {}
     await new Promise((resolve) => {
       const activity = {"actor": "with22", "verb": "pin", "object": "Place:42", "target": "Board:1"};

       user1.addActivity(activity)
           .then(function(data) {
            console.log("data",data)
          })
           .catch(function(reason) {
             console.log("reason",reason)
            });
       resolve()
     })
     return {"data":data.results}
  }

  render () {

    return (
      <div>
        <div className="wrapper">
          <Head>
            <title>Activity</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

        </div>
      </div>
    )
  }
}
