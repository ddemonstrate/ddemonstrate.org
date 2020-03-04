pragma solidity ^0.5.10;

contract Demonstrate {

    struct Demonstration {
        string title;
        uint256 startTime;
        uint256 endTime;
        string whatThreeWords1;
        string whatThreeWords2;
        string whatThreeWords3;
        uint256 donations;
        address owner;
    }

    struct Group {
        string title;
    }

    Demonstration[] public demonstrations;
    Group[] public groups;
    //mapping(address => uint256) public claims;

    function add(uint256 startTime, uint256 endTime, string memory title, string memory location1, string memory location2, string memory location3) public payable returns (uint) {
        require(startTime > now, "Demonstrations need to be in the future.");
        require(endTime > startTime, "End time must be after start time");
        // string[] memory location = new string[](3);
        // location[0] = location1;
        // location[1] = location2;
        // location[2] = location3;

        demonstrations.push(Demonstration(title, startTime, endTime, location1, location2, location3, msg.value, msg.sender));
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