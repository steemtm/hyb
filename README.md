# hyb
@hybridbot Promotional Bot

Ubuntu 16

Requires 
steem-bot from https://github.com/p0o/steem-bot
npm
git
nano
pm2


git clone https://github.com/steemtm/hyb.git
cd hyb
npm install steem-bot --save

Edit With Nano
nano hybridbotpromo.js
Fill in the config.
save

Run
pm2 start -i 0 hybridbotpromo.js

pm2 monit

