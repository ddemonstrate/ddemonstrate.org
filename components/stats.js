import {PolymerElement, html} from '@polymer/polymer/polymer-element.js'
import '@polymer/polymer/lib/elements/dom-repeat.js';

import _abi from '../build/';

/**
 * `ddemo-list`
 * List of ddemonstrate events
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Stats extends PolymerElement {

  constructor() {
    super();
  }

  async ready() {
    super.ready();
    this.web3 = new Web3(this.web3host);
    this.contractReader = new this.web3.eth.Contract(abi, this.contract); 
    this.stats();
  } 

  static get template() {
    return html`
			<link rel="stylesheet" href="https://ddemonstrate.org/css/style.css"></link>
			<style>
				h3 {
					margin-top: 0px;
				}
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
			<div class="container">
			<div class="row">
				<div class="col-sm-3 col-lg-3">
				<div class="counter-box counter-box pt-4 pt-md-0">
					<div class="counter-ico">
					<span class="ico-circle"><i class="ion-calendar"></i></span>
					</div>
					<div class="counter-num">
					<p class="counter">450</p>
					<span class="counter-text">EVENTS ADDED</span>
					</div>
				</div>
				</div>
				<div class="col-sm-3 col-lg-3">
				<div class="counter-box pt-4 pt-md-0">
					<div class="counter-ico">
					<span class="ico-circle"><i class="ion-cash"></i></span>
					</div>
					<div class="counter-num">
					<p class="counter">550</p>
					<span class="counter-text">ETH RAISED</span>
					</div>
				</div>
				</div>
				<div class="col-sm-3 col-lg-3">
				<div class="counter-box pt-4 pt-md-0">
					<div class="counter-ico">
					<span class="ico-circle"><i class="ion-ios-people"></i></span>
					</div>
					<div class="counter-num">
					<p class="counter">36</p>
					<span class="counter-text">POAP ADDED</span>
					</div>
				</div>
				</div>
			</div>
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
      },
      web3host: {
        type: String,
        notify: true,
		//value: "http://127.0.0.1:7545"
		value: "https://ropsten.infura.io/v3/eaf5e0b4a01042a48211762c8d4eec44"
      },
      contract: {
        type: String,
        notify: true,
        value: "0x24b6e8aa5adca2bb30fc3c28159b96755d6930e6"
      }
    };
  }

  async stats() {
    this.count = parseInt(await this.contractReader.methods.count().call(), 10);
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

window.customElements.define('stats', Stats);