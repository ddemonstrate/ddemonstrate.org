import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js'
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button/paper-button.js';

/**
 * `ddemo-metamask`
 * Connect to Metamask
 * 
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DdemoMetamask extends PolymerElement {

	constructor() {
		super();
	}

	async ready() {
		super.ready();
		this.web3 = new Web3(this.web3host);
    }
    
    async connect() {
        console.log("window.ethereum =", window.ethereum);
        let accounts = await ethereum.enable();
        if (accounts.length > 0) {
            this.account = accounts[0];
        }
        console.log("window.ethereum =", this.account);
    }

	static get template() {
        return html `
        <style is-"custom-style">
        </style>

        <div class="ddemo-metamask">
            <link rel="stylesheet" href="https://ddemonstrate.org/css/style.css"></link>
            <paper-button raised on-tap="connect">Connect to your Ethereum</paper-button>
        </div>
    `;
    }

	static get properties() {
		return {
			web3host: {
				type: String,
				notify: true
			}
		};
    }

    openDlg() {
        console.log("open()");
        this.$.dialog.open();
    }
}


window.customElements.define('ddemo-metamask', DdemoMetamask);