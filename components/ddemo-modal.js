import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js'
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';

import '@polymer/polymer/lib/elements/dom-repeat.js';

import '@polymer/neon-animation/animations/scale-up-animation.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';

import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {NeonAnimatableBehavior} from '@polymer/neon-animation/neon-animatable-behavior.js'

import '@fooloomanzoo/datetime-picker/datetime-picker.js'

/**
 * `ddemo-list`
 * List of ddemonstrate events
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DdemoModal extends mixinBehaviors([NeonAnimatableBehavior], PolymerElement) {

	constructor() {
		super();
	}

	async ready() {
		super.ready();
		this.web3 = new Web3(this.web3host);
		this.contractReader = new this.web3.eth.Contract(abi, this.contract);
	}

	static get template() {
        return html `
        <style is-"custom-style">

            h1, h2, h3, h4, h5 {
                margin-top: 0.5em;
                padding-bottom: 0px;
                margin-bottom: 0px;
            }
            .dd-container {
                padding: 1em;
                width: 600px;
            }
            .dd-form-label {
                margin-top: 0.5em;
                margin-bottom: 0.5em;
                display: block;
            }
            .
        </style>

        <div class="ddemo-modal">
            <link rel="stylesheet" href="https://ddemonstrate.org/css/style.css"></link>
            
            <paper-dialog id="dialog">
                <div class="dd-container">
                    <h2>Register a new event</h2>

                    <p>Time to add a new ddemo!</p>

                    <paper-input label="Title"></paper-input>
                    <paper-input label="Location: what-three-words"></paper-input>
                    <a href="https://what3words.com/" target="_blank">Choose a location</a>
                    <paper-input label="Your Ethereum wallet address"></paper-input>
                    <p>
                    <div class="dd-form-label">Start time</div>
                    <datetime-picker id="fromTimePicker" class="begin" min="{{minFrom}}" auto-confirm datetime="{{minFrom}}"></datetime-picker>
                    <div class="dd-form-label">End time</div>
                    <datetime-picker id="endTimePicker" class="end" min="{{minEnd}}" datetime={{minEnd}} auto-confirm></datetime-picker>
                    <p>
                    <div class="buttons">
                        <paper-button dialog-dismiss>Cancel</paper-button>
                        <paper-button dialog-confirm autofocus>Accept</paper-button>
                    </div>
                </div>
            </paper-dialog>

            <paper-button raised on-tap="openDlg">Add an event</paper-button>
        </div>
    `;
    }

	static get properties() {
		return {
			web3host: {
				type: String,
				notify: true
			},
			contract: {
				type: String,
				notify: true
            },
            minFrom: {
                type: Number,
                notify: true,
                value: new Date().getTime()
            },
            minEnd: {
                notify: true,
                type: Number,
                value: new Date().getTime()
            }
		};
    }

    openDlg() {
        console.log("open()");
        this.$.dialog.open();
    }
}

const abi = [{
		"anonymous": false,
		"inputs": [{
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
		"inputs": [{
			"indexed": false,
			"internalType": "uint256",
			"name": "index",
			"type": "uint256"
		}],
		"name": "NewDemonstration",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [{
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
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "count",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "demonstrations",
		"outputs": [{
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
		"inputs": [{
			"internalType": "uint256",
			"name": "_index",
			"type": "uint256"
		}],
		"name": "donate",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "groups",
		"outputs": [{
			"internalType": "string",
			"name": "title",
			"type": "string"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
			"internalType": "uint256",
			"name": "_index",
			"type": "uint256"
		}],
		"name": "payout",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
			"internalType": "uint256",
			"name": "_index",
			"type": "uint256"
		}],
		"name": "remove",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

window.customElements.define('ddemo-modal', DdemoModal);