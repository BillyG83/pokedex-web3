// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

// web3 pokedex experiment by bill gilmore

// FACTORY
contract PokedexFactory {
    mapping(address => address) private trainersStorage;
    mapping(address => bool) private hasRegistered;

    function createTrainer() public {
      Pokedex newTrainer = new Pokedex(msg.sender);
      trainersStorage[msg.sender] = address(newTrainer);
      hasRegistered[msg.sender] = true;
    }

    function isRegistered(address user) public view returns (bool) {
      return hasRegistered[user];
    }

    function getTrainerStorage(address user) public view returns (address) {
      require(isRegistered(user));
      return trainersStorage[user];
    }
}
// END FACTORY

// CONTRACT
contract Pokedex {
  // data
  mapping(string => bool) private collection;
  address public trainer;
  uint public collectionTotal;

  modifier trainerOnly() {
    require(msg.sender == trainer);
    _;
  }

  constructor(address creator) {
    trainer = creator;
    collectionTotal = 0;
  }

  function collect(string memory dexId) public trainerOnly {
    // trainer does not already have this pokemon
    require(!collection[dexId]);
    // add to collection mapping
    collection[dexId] = true;
    collectionTotal++;
  }

  function hasCollected(string memory dexId) public view trainerOnly returns (bool) {
    return collection[dexId];
  }

  function isTrainer() public view returns (bool) {
    return trainer == msg.sender;
  }
}
// END CONTRACT