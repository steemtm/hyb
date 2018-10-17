const SteemBot = require('steem-bot').default;


const username = 'hybridbot';
const postingKey = 'Your Posting Key Here!'; // Use environment variables instead of hardcoding to be safer
const activeKey = 'Your Active Key Here!';

const bot = new SteemBot({username, postingKey, activeKey});

bot.onPost(handlePost);

function handlePost(data, responder) {
  console.log('user %s posted!', data.author);
  console.log(data.body);

  Responder.sendSteem(0.001, '@hybridbot service is now live, send at least 0.010 SBD or STEEM to @hybridbot with the post you want upvoted as the memo. 0.050 SBD or STEEM max bid. Delegate 100 SP to unlock automatic upvotes and get daily payouts!');  
    console.log('Promo message sent to %s!', data.author);
  // you get the money now give your service to user
}

bot.start();
