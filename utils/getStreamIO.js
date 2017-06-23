import stream from "getstream"
const key = 'g5858gfymtgj'
const secret = 'waqspfbuy2eyn9gvhgbwvz8gj7nz2798xs95eqesmrfkxs9ehm8hy587avkn9kpd'
const client = stream.connect( key, secret)

const feed = client.feed('KVFlat', 'mark');

exports.activity = (feedgroup, user) => {
  console.log("feedgroup", feedgroup)
}


// server-side (node.js)
// var client = client.connect(api_key, api_secret);
// var feed = client.feed('user', user_id);
// var feed_token = feed.token;

// client-side (browser)
// var client = client.connect(api_key, null);
// var feed = client.feed('user', user_id, token);
