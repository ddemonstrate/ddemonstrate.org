pragma solidity ^0.6.0;

contract Demonstrate {
    
    struct Demonstration {
        uint256 startTime;
        bytes32[] whatThreeWords;
        uint256 donations;
        address owner;
    }

    Demonstration[] public demonstrations;
    //mapping(address => uint256) public claims;

    function add(uint256 startTime, bytes32 location1, bytes32 location2, bytes32 location3) public payable returns (uint) {
        require(startTime > now, "Demonstrations need to be in the future.");

        bytes32[] memory location = new bytes32[](3);
        location[0] = location1;
        location[1] = location2;
        location[2] = location3;

        demonstrations.push(Demonstration(startTime, location, msg.value, msg.sender));
        emit NewDemonstration(demonstrations.length - 1);

        return demonstrations.length - 1;
    }

    function donate(uint256 _index) public payable {
        require(demonstrations[_index].owner != address(0), "Invalid demonstration");
        demonstrations[_index].donations += msg.value;

        emit DonationReceived(_index, msg.value);
    }

    function payout(uint256 _index) public payable onlyCampaignOnwner(_index) {
        uint256 amount = demonstrations[_index].donations;
        demonstrations[_index].donations = 0;
        msg.sender.transfer(amount);
    }

    modifier onlyCampaignOnwner(uint256 _index) {
        require(demonstrations[_index].owner == msg.sender, "Only owner");
        _;
    }

    event NewDemonstration(uint256 index);
    event DonationReceived(uint256 index, uint256 amount);
}