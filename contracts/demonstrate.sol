pragma solidity ^0.6.0;

contract Demonstrate {

    address public owner;
    uint256 public fee;

    struct Demonstration {
        uint256 startTime;
        bytes32[] whatThreeWords;
        uint256 dontations;
        address owner;
        bytes32 proofOfAttenance;
    }

    Demonstration[] public demonstrations;
    mapping(address => uint256) public claims;

    constructor() public {
        owner = msg.sender;
        fee = 0;
    }

    function add(uint256 startTime, bytes32 location1, bytes32 location2, bytes32 location3, bytes32 poa) public payable returns (uint) {
        require(msg.value >= fee, "Fee too low.");
        require(startTime > now, "Campaigns need to be in the future.");

        bytes32[] memory location = new bytes32[](3);
        location[0] = location1;
        location[1] = location2;
        location[2] = location3;

        demonstrations.push(Demonstration(startTime, location, msg.value - fee, msg.sender));
        emit NewDemonstration(demonstrations.length - 1);

        return demonstrations.length - 1;
    }

    function donate(uint256 _index) public payable {
        require(demonstrations[_index].owner != address(0), "Invalid demonstration");
        demonstrations[_index].dontations += msg.value;

        emit DonationReceived(_index, msg.value);
    }

    function claim(uint256 _index, bytes32 poa) public {
        require(demonstrations[_index].startTime > now, "Must claim after event");

    }

    function payout(uint256 _index) public {

    }

    modifier onlyCampaignOwner(uint256 _index) {
        require(demonstrations[_index].owner == msg.sender, "Only owner");
        _;
    }

    event NewDemonstration(uint256 index);
    event DonationReceived(uint256 index, uint256 amount);
}