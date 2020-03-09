import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-list'

/**
 * `ddemo-list`
 * List of ddemonstrate events
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DdemoList extends PolymerElement {

  constructor() {
    super();
    console.log("*** constructor()")

    this.web3 = new Web3("http://127.0.0.1:7545");
    this.contractReader = new this.web3.eth.Contract(abi, "0xca73a7d5Af7FB4673E6a7D9ad4c64D9ecCa585B9");

  }

  async ready() {
    super.ready();
  
    this.demoList();
  } 

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]] [[count]]!</h2>
      <ul>
        <iron-list items="[[items]]">
          <template>
            <li>
              <ul>
                <li>[[item.title]]</li>
                <li>[[item.startTime]]</li>
                <li>[[item.endTime]]<li>
              </ul>
            </li>
          </template>
        </iron-list>
      </ul>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'ddemo-list',
      },
      count: {
        type: Number,
        value: -1
      },
      items: {
        type: Array,
        value: []
      }
    };
  }


  async demoList() {
    this.count = parseInt(await this.contractReader.methods.count().call(), 10);

    let _items = [];
    for (let i=0; i<this.count; i++) {
      let item = await this.contractReader.methods.demonstrations(i).call();
      _items.push(item);
    }
    this.items = _items;
    console.log(_items);
    return _items;
  }

}
const abi =
[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "DonationReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "NewDemonstration",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location3",
				"type": "string"
			}
		],
		"name": "add",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "demonstrations",
		"outputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "whatThreeWords1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "whatThreeWords2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "whatThreeWords3",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "donations",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "donate",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "groups",
		"outputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "payout",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "remove",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

window.customElements.define('ddemo-list', DdemoList);
