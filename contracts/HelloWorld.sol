//SPDX-License-Identifier: UNLICENSED

pragma solidity >= 0.7.3;

contract HelloWorld{

    event messagechanged(string oldmsg, string newmsg);

    string public message;

    constructor(string memory firstmsg) {
        message = firstmsg;
    }

    function update(string memory newmsg) public {
        string memory oldmsg =message;
        message = newmsg;

        emit messagechanged(oldmsg, newmsg);
    }
}