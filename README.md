# noLogicCrypto.js [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?&url=https://github.com/JuLeonS/noLogicCrypto.js-MetaMask-WalletConnect-Solflare-PhantomApp&hashtags=Metamask,WalletConnect,Solflare,PhantomApp)
![MetaMask](https://img.shields.io/badge/-MetaMask-%23F6851B) ![WalletConnect](https://img.shields.io/badge/-WalletConnect-%232596be) ![Solflare](https://img.shields.io/badge/-Solflare-%23333) ![PhantomApp](https://img.shields.io/badge/-PhantomApp-%23634E76) 

4Tip 💙 <br>
![ETH](https://img.shields.io/badge/-ETH-%2326A17B) ![TRC20](https://img.shields.io/badge/-TRC20-%2326A17B) 
![TRC20](https://img.shields.io/badge/-BNB-%23F3BA2F) ![TRC20](https://img.shields.io/badge/-BUSD-%23F3BA2F) **0x94eA87a9C8b11A41F045804EcEa0EccbD4025905**<br>
![TRC20](https://img.shields.io/badge/-Bitcoin-%23F3BA2F) **3Pj8o2Yeeab82cKxoULTeVDiks1258nnn8**

### Crypto wallet pay methods:

| Methods  |  ETH | USDT  | BNB  | BUSD  | SOL  | MATIC  |
| :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: |
|  [MetaMask](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L569 "MetaMask") |✔️| ✔️| ✔️  |  ✔️ | ❌  | ✔️  |
|  [WalletConnect](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L105 "WalletConnect") |✔️|✔️| ✔️  | ✔️  | ❌  | ❌  |
|  [PhantomApp](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L306 "PhantomApp") | ❌   |  ❌ |  ❌ |  ❌ | ✔️  | ❌  |
|  [Solflare](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L443 "Solflare") |  ❌  |  ❌ | ❌  |  ❌ |  ✔️ | ❌  |


------------
### ⚠️ Warning ⚠️
Consider this as an ⚠️**EXAMPLE**⚠️, not as an implementation of your payment, **I do not guarantee the stability of my functions!**

**P.S.** - In the [**const Token**](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L23 "**const Token**") used empty ABI, just so that the transaction could pass, do not forget to change them. 

**P.S.S** - *I think I will save someone a lot of time because there is not a lot of documentation that works, much less implementations.*💙

------------


### Description:
Example of payment on pure JS [public]
For **noLogicCrypto.js** to work, connect all the js in the **@js** folder in this order:

```html
	<script src="./path/to/js/web3.min.js" type="application/javascript"></script>
	
<!-- solanaWeb3 -->
	<script src="./path/to/js/base64.js" type="application/javascript"></script>
	<script src="./path/to/js/ieee754-buffer.js" type="application/javascript"></script>
	<script src="./path/to/js/buffer.min.js" type="application/javascript"></script>
	<script src="./path/to/js/eventemitter3.min.js" type="application/javascript"></script>
	<script src="./path/to/js/solana.min.js" type="application/javascript"></script>
	<script src="./path/to/js/base-x.min.js" type="application/javascript"></script>
	<script src="./path/to/js/b58.min.js" type="application/javascript"></script>
	<script src="./path/to/js/sol-wallet-adapter.min.js" type="application/javascript"></script>
<!-- solanaWeb3 -->

<!-- WalletConnect -->
	<script src="./path/to/js/web3-provider.min.js" type="application/javascript"></script>
	<script src="./path/to/js/walletconnect/web3modal.min.js" type="application/javascript"></script>
<!-- WalletConnect -->
```

You can do it this way or just write everything in the main file, whichever is convenient
```javascript
const logic_ = await import(`.path/to/js/noLogicCrypto.js`);
```
or
```html
<script src="./path/to/js/logic.js" type="application/javascript"></script>
```

#### General Information
All methods have a return of this type:
if **true** - *array* [true, 'Some info or empty']
if **false** - *array* [false, 'error desc...']

<div style="display: flex;">
	<img src="https://docs.walletconnect.com/img/walletconnect-logo.svg" width="64" />
	<h1 style="margin-left: 1rem;">WalletConnect</h1>
</div>


##### Initialization
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L105 "[IN CODE]")
```javascript
const WalletConnect = await WalletConnectF();
```
##### Methods

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L130 "[IN CODE]")
```javascript
await WalletConnect.Connect("tokenName"); // BNB | BUSD | ETH | USDT 
```
Normal connection to a specific network by tokenName.

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L172 "[IN CODE]")
```javascript
await WalletConnect.Disconnect();
```
Just **disconnects** the user from the site

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L192 "[IN CODE]")
```javascript
await WalletConnect.SwapNetwork("tokenName"); // ETH USDT BNB BUSD
```
**Very unstable function**, as well as very crutch, as many wallets do not support changing the network and just hangs on an attempt to change the network, **I strongly advise against using**. 

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L229 "[IN CODE]")
```javascript
await WalletConnect.Pay({token: "tokenName", amount: 1.123}); // BNB | BUSD | ETH | USDT 
```
This function has **built-in authorization**, you can just declare the method and immediately write this command and the payment will pass. 

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L274 "[IN CODE]")
```javascript
await WalletConnect.Watch();
```
Simple connection status tracking, to add your methods on states. [*CLICK*](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L274 "*CLICK*")

------------
<div style="display: flex; align-items: center;">
	<img src="https://metamask.io/images/metamask-logo.png" width="64" height="100%" style="object-fit: contain; object-position: center;"/>
	<h1 style="margin-left: 1rem;">MetaMask</h1>
</div>

##### Initialization
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L569 "[IN CODE]")
```javascript
const MetaMask = await MetaMaskF();
```
##### Methods

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L453 "[IN CODE]")
```javascript
await MetaMask.Connect("tokenName"); // BNB | BUSD | ETH | USDT | MATIC
```
Normal connection to a specific network by tokenName.

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L604 "[IN CODE]")
```javascript
await MetaMask.Disconnect();
```
Just **disconnects** the user from the site

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L614 "[IN CODE]")
```javascript
await MetaMask.SwapNetwork("tokenName"); // BNB | BUSD | ETH | USDT | MATIC
```
Changes the network of the wallet, if it does not exist, then adds from the data [**Token** const](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L760 "**Token** constants")

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L671 "[IN CODE]")
```javascript
await MetaMask.Pay({token: "tokenName", amount: 1.123}); // BNB | BUSD | ETH | USDT | MATIC
```
This function has **built-in authorization**, you can just declare the method and immediately write this command and the payment will pass. 

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L760 "[IN CODE]")
```javascript
await MetaMask.GetBalance("tokenName"); // BNB | BUSD | ETH | USDT | MATIC
```
Gets the token balance.

------------

<div style="display: flex; align-items: center;">
	<img src="https://phantom.app/apple-touch-icon.png" width="64" height="100%" style="object-fit: contain; object-position: center;"/>
	<h1 style="margin-left: 1rem;">Phantom</h1>
</div>

##### Initialization
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L306 "[IN CODE]")
```javascript
const PhantomApp = await PhantomAppF();
```
##### Methods

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L320 "[IN CODE]")
```javascript
await PhantomApp.Connect()
```
Just **connect**

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L348 "[IN CODE]")
```javascript
await PhantomApp.Disconnect();
```
Just **disconnects** the user from the site

------------

[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L365 "[IN CODE]")
```javascript
await PhantomApp.Pay(amount) // <- in sol
```
This function has **built-in authorization**, you can just declare the method and immediately write this command and the payment will pass. 

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L416 "[IN CODE]")
```javascript
await PhantomApp.GetBalance("tokenName");
```
Gets the token balance.

------------
<div style="display: flex; align-items: center;">
	<img src="https://solflare.com/assets/logo.26659b6d..svg" width="64" height="100%" style="object-fit: contain; object-position: center;"/>
	<h1 style="margin-left: 1rem;">Solflare</h1>
</div>

##### Initialization
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L443 "[IN CODE]")
```javascript
const Solflare = await Solflare();
```
##### Methods

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L453 "[IN CODE]")
```javascript
await Solflare.Connect()
```
Just **connect**

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L483 "[IN CODE]")
```javascript
await Solflare.Disconnect();
```
Just **disconnects** the user from the site

------------

[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L500 "[IN CODE]")
```javascript
await Solflare.Pay(amount) // <- in sol
```
This function has **built-in authorization**, you can just declare the method and immediately write this command and the payment will pass. 

------------
[Code Link](https://github.com/JuLeonS/noLogicCrypto.js/blob/25bc57a11ac99958787451bcdef52fa157bad55e/noLogicCrypto.js#L535 "[IN CODE]")
```javascript
await Solflare.GetBalance("tokenName");
```
Gets the token balance.

------------





















