pragma solidity ^0.4.21;

interface Token {
    function totalSupply() external constant returns (uint);
    function balanceOf(address tokenlender) external constant returns (uint balance);
    function allowance(address tokenlender, address spender) external constant returns (uint remaining);
    function transfer(address to, uint tokens) external returns (bool success);
    function approve(address spender, uint tokens) external returns (bool success);
    function transferFrom(address from, address to, uint tokens) external returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenlender, address indexed spender, uint tokens);
}