import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

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

    this.web3 = new Web3("http://127.0.0.1:7545");
    this.contractReader = new this.web3.eth.Contract(abi, "0xca73a7d5Af7FB4673E6a7D9ad4c64D9ecCa585B9");

  }

  async ready() {
    super.ready();
  
    this.demoList();
  } 

  static get template() {
    return html`
    <link rel="stylesheet" href="https://ddemonstrate.org/css/style.css"></link>
    <style>
      h5 {
        padding-bottom: 0px;
        margin-bottom: 0px;
      }
      .dd-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
        background-color: #f5f5f5   
      }
      .dd-item {
        display: flex;
        flex-direction: column;
        flex-basis: 40%;
        box-shadow: 0px 4px 4px #E9E9E9;
        background-color: white;
        padding: 1em;
        margin: 1em;
      }
    </style>
      <div class="dd-container">
          <template is="dom-repeat" items="{{ddemos}}">
            <div class="dd-item">
              <h3>[[item.title]]</h3>
              <div class="section startTime">
              Starts at [[item.startTimeStr]]
              </div>
              <div class="section donations">
                <h5>Donations</h5>
                [[item.donations]] ETH
              </div>
              <div class="section owner">
                <h5>Owner</h5>
                [[item.owner]]
              </div>
              <div class="section location">
                <h5>Location</h5>
                <a href="[[item.whatThreeWordsUrl]]">[[item.whatThreeWords1]] [[item.whatThreeWords2]] [[item.whatThreeWords3]]</a>
              <div>

            <div>
          </template>

      </div>
    `;
  }
  static get properties() {
    return {
      count: {
        type: Number,
        value: -1
      },
      ddemos: {
        type: Array,
        value() {
          return [];
        }
      }
    };
  }


  async demoList() {
    this.count = 5;// parseInt(await this.contractReader.methods.count().call(), 10);

    let _items = [];
    for (let i=0; i<this.count; i++) {
      let item = await this.contractReader.methods.demonstrations(0).call();
      item.startTimeStr = this._timestampToStr(item.startTime)
      item.whatThreeWordsUrl = `https://w3w.co/${item.whatThreeWords1}.${item.whatThreeWords2}.${item.whatThreeWords3}`
      _items.push(item);
    }
    this.ddemos = _items;
    return _items; 
  }

  _timestampToStr(ts) {
    return Date(ts).toString()
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
