#Broadcasting on Livepeer

##`Introduction`

This document is a recipe for how to broadcast on `Livepeer`.

It will explain what equipment you will need to `start`.

It will also provide a `very simple` step-by-step method to `install` and `configure` the required _software_.

It may seem long, but it works. `I hope`. If it doesn't, come and find [me on gitter] (http://gitter.im/chrishobcroft)

##`Equipment`

In order to _create_ a `broadcaster node` using [`Livepeer`](http://livepeer.org) and Open Broadcast Studio ([OBS](http://obsproject.com)) you will need:

- 1 x _laptop_ / **desktop** / `server` + peripherals

  - running `Linux` or _Apple Mac_ (starting from a `clean OS install` is `not` required but _always preferable_)

    - `binaries` are compiled for `x86-64`

    - requires _MacOS 10.10_ or above

  - connected to internet with at least `330kbps` upload bandwidth)

    - the minimum bitrate possible to stream from  [OBS](http://obsproject.com) is `220kbps`, however we recommend `50%` contingency when streaming due to _network instabilities_.
    - wired `Ethernet` connection is preferable but not compulsory - _Wi-Fi_ / `4G` is also fine

  - with power supply (_battery_ or _power supply_)

##`Method`

###_Create_ a streaming node using Livepeer.

####download livepeer software

- Go to [`go-livepeer software release page`](https://github.com/livepeer/go-livepeer/releases)

- Download the `.zip` file corresponding to your operating system (`Linux`, _Mac_)

- `Extract` the content of the `.zip` file into your _favourite folder_

####Run livepeer

- open a `command-line-interface` (such as `terminal`) in your _favourite folder_

- run the following command:

```
./livepeer -rinkeby -v 6
```

`-rinkeby` is to connect to the `Rinkeby` _Ethereum_ `Testnet`

`-v 6` is to output the highest level of logging

- create a _Passphrase_

 - This is used to **`lock`** and **`unlock`** your account, so _**keep it safe**_
 - You will be asked for this _every time_ you `start` running the `node`.
 - Enter this _Passphrase_ twice to `validate`


- enter the _Passphrase_ again `(!)`

 - This unlocks the account

When you see the following message, then the `streaming node` is running:

```
LPMS Server listening on :1935
```

####configure livepeer

- open another `command-line-interface` in your _favourite folder_

- run livepeer_cli by executing the following command:

```
./livepeer_cli
```

- This will display the `configuration` of the `node`
- Also, this provides a richer _menu-based_ `command-line-interface` to help you to get started

- get test Ethereum

 - this method requires access to an account on [twitter](http://www.twitter.com), [facebook](http://www.facebook.com) or [google+](http://plus.google.com). This is to stop `automated trolls` from attacking parts of the `network`.

 - If you do not have this, you can `ask a friend` on [Livepeer's gitter channel](http://gitter.im/livepeer/Lobby) to send you some test `ETH`

 - so, you copy the `ETH Account` from the `NODE STATS` to your clipboard.

     - This is a hexadecimal string starting with 0x, such as `0x0dDB225031cCB58fF42866f82D907F7766899014`
     - *Make a note of this, because you will be using it a lot.*

   - Go to [twitter](http://www.twitter.com), [facebook](http://www.facebook.com) or [google+](http://plus.google.com)

    - Twitter is easiest, if you have an account already.

   - create a new *public* post containing the `ETH Account` in the text of the post

    - For example for [Livepeer TV](https://twitter.com/LivepeerTV/status/974727781836820480)

   - copy the URL for the post to your clipboard

     - For Twitter, select _Copy link to tweet_ on the right hand side of the _tweet_

   - open [Rinkeby Faucet] (http://faucet.rinkeby.io) in a browser

   - paste the _`URL`_ for the post into the `field`, and click _**Give me Ether**_

    - This will transfer some test _Ethereum_ into your _ETH Account_
    - This can take up to `10 minutes` to arrive, but often happens in `seconds`, maybe faster

- `validate` that you have received the _Ethereum_

 - open [Etherscan's Rinkeby Explorer](https://rinkeby.etherscan.io) in a browser

 - paste the _ETH Account_ into the search bar

 - view your balance in the _ETH Account_.

    - There should now be 1 transaction
    - If you do not have any Ethereum in your account, contact the [Livepeer Team] (http://gitter.im/livepeer) and someone there will be happy to help you get some test _Ethereum_.

- get test LPT

 - go to the `terminal` window where `livepeer_cli` is running

 - enter `10`, to select option `10. Get test LPT`, and press return

    - This can take up to `10 minutes` to arrive, but often happens in seconds, `maybe faster`

    - You can verify whether you have received the LPT using option `1` in `livepeer_cli` to run `1. Get node status`, and look for `LPT Balance`
    
    - Also, you can use [Etherscan's Rinkeby Explorer](https://rinkeby.etherscan.io) to view the details of your _ETH Account_.
    - There should now be 2 transactions

    - If you do not have any LPT in your account, contact the [Livepeer Team](http://gitter.im/livepeer/Lobby) and someone there will be happy to help you get some test `LPT`.

- deposit ETH into your broadcaster account

 - this deposit covers your broadcasting costs

 - enter `13` into `livepeer_cli` to select `13. Deposit (ETH)`

 - enter an _amount_ you would like to _**deposit**_, and press `return`

 - This can take _up to 10 minutes_ to arrive, but often happens `in seconds`, _maybe faster_
 - You can use [Etherscan's Rinkeby Explorer](https://rinkeby.etherscan.io) to view the details of your _ETH Account_.

 - There should now be 3 transactions

###_**You are now ready to broadcast on Livepeer.**_

###Download and install [OBS](http://obsproject.com)

- follow the `excellent` instructions at [OBS Project Home Page](http://obsproject.com)

###Configure [OBS](http://obsproject.com) to broadcast on Livepeer

####launch [OBS](http://obsproject.com) software

- if you are opening for the first time, cancel the configuration _wizard_

- Click _Settings_ in the bottom right hand corner of the screen.

- Select _Stream_ from the menu on the left of the "Settings" window

- Under _Stream Type_ select `Custom Streaming Server`

- for URL, put `rtmp://localhost:1935`

- Click "OK" to close the "Settings" window

- Under "Sources" click the + and select **Text (Freetype 2) 2**

- Click _**OK**_

- In the _Text_ field type `HELLO WORLD`

- Click _**OK**_

###Start broadcasting and monitoring

- Ensure livepeer is running (see instructions above)

- Click _Start Streaming_ in [OBS](http://obsproject.com).

```
You are now streaming on Livepeer
```

- Open [Livepeer's Media Browser](https://media.livepeer.org/) in a web browser

- Paste the _ETH Address_ into the _Search_ field, and click "SEARCH"

######You should see `HELLO WORLD` on a black screen.

After this, you are free to stream whatever content you want to configure in [OBS](http://obsproject.com).

Personally, I love to add cameras and microphones to [OBS](http://obsproject.com), and broadcast some lovely things at [Livepeer TV](www.livepeer.tv).

You might also want to talk to the community at [OBS Project](http://obsproject.com).
