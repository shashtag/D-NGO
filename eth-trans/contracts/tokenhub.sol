pragma solidity ^0.4.21;

import "./token.sol";

contract Tokenhub {
    struct Listing {
        address seller;
        Toekn token;
        uint256 unitsAvailable;

        // wei/unit price as a rational number
        uint256 priceNumerator;
        uint256 priceDenominator;
    }

    Listing[] public listings;

    event ListingChanged(address indexed seller, uint256 indexed index);

    function list(
        Toekn token,
        uint256 units,
        uint256 numerator,
        uint256 denominator
    ) public {
        Listing memory listing = Listing({
            seller: msg.sender,
            token: token,
            unitsAvailable: units,
            priceNumerator: numerator,
            priceDenominator: denominator
        });

        listings.push(listing);
        emit ListingChanged(msg.sender, listings.length-1);
    }

    function cancel(uint256 index) public {
        require(listings[index].seller == msg.sender);
        delete(listings[index]);
        emit ListingChanged(msg.sender, index);
    }

    function buy(uint256 index, uint256 units) public payable {
        Listing storage listing = listings[index];

        require(listing.unitsAvailable >= units);
        listing.unitsAvailable -= units;
        require(listing.token.transferFrom(listing.seller, msg.sender, units));

        uint256 cost = (units * listing.priceNumerator) /
            listing.priceDenominator;
        require(msg.value == cost);
        listing.seller.transfer(cost);

        emit ListingChanged(listing.seller, index);
    }
}