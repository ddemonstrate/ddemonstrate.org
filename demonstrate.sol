pragma solidity ^0.5.10;

contract Demonstrate {

    address public owner;
    uint256 public fee;

    struct Demonstration {
        uint256 startTime;
        int256 lat;
        int256 long;
        uint256 funds;
        address owner;
    }

    Demonstration[] public demonstrations;

    constructor() public {
        owner = msg.sender;
        fee = 0;
    }

    function add(uint256 _startTime, int256 _lat, int256 _long) public payable {
        require(msg.value >= fee, "Fee too low");

        demonstrations.push(Demonstration(_startTime, _lat, _long, 0, msg.sender));
        emit NewDemonstration(demonstrations.length - 1);
    }

    function fund(uint256 _index) public payable {
        require(demonstrations[_index].owner != address(0), "Invalid demonstration");
        demonstrations[_index].funds += msg.value;
    }

    function checkIn(uint256 _index) public onlyCampaignOwner() {

    }

    function payout() public {

    }

    modifier onlyCampaignOwner(uint256 _index) {
        require(demonstrations[_index].owner == msg.sender, "Only owner");
        _;
    }

    event NewDemonstration(uint256 index);
}