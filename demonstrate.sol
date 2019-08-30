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
    }

    function add(uint256 _startTime, int256 _lat, int256 _long) public payable {
        require(msg.value >= fee, "Fee too low");

        demonstrations.push(Demonstration(_startTime, _lat, _long, 0, msg.sender));
        emit NewDemonstration(demonstrations.length - 1);
    }

    function fund(uint256 index) public payable {
        require(demonstrations[index].owner != address(0), "Invalid demonstration");
        demonstrations[index].funds += msg.value;
    }

    function checkIn(uint256 index) public {

    }

    function payout() public  {

    }

    modifier onlyCampaignOwner(uint256 index) {
        require(demonstrations[index].owner == msg.sender, "Only owner");
        _;
    }

    event NewDemonstration(uint256 index);
}