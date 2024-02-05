// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract SalaryLedger {
    struct Payslip {
        uint256 date;
        uint256 employeeId;
        string employeeName;
        string position;
        uint256 annualSalary;
        uint256 hourlyRate;
        uint256 grossWeekly;
        uint256 taxWithholdingRate; // Tax withholding rate in percentage (e.g., 10%)
        uint256 netWeeklyPay;
    }

    mapping(address => Payslip[]) private payslips;

    // Event emitted when a new payslip is added
    event PayslipAdded(address indexed employee, uint256 payslipIndex);

    // Function to add a new payslip
    function addPayslip(
        uint256 _date,
        uint256 _employeeId,
        string memory _employeeName,
        string memory _position,
        uint256 _annualSalary,
        uint256 _hourlyRate,
        uint256 _grossWeekly,
        uint256 _taxWithholdingRate,
        uint256 _netWeeklyPay
    ) external {
        Payslip memory newPayslip = Payslip({
            date: _date,
            employeeId: _employeeId,
            employeeName: _employeeName,
            position: _position,
            annualSalary: _annualSalary,
            hourlyRate: _hourlyRate,
            grossWeekly: _grossWeekly,
            taxWithholdingRate: _taxWithholdingRate,
            netWeeklyPay: _netWeeklyPay
        });

        payslips[msg.sender].push(newPayslip);
        emit PayslipAdded(msg.sender, payslips[msg.sender].length - 1);
    }

    // Function to get the number of payslips for a specific employee
    function getPayslipCount() external view returns (uint256) {
        return payslips[msg.sender].length;
    }

    // Function to get a specific payslip for a specific employee
    function getPayslip(uint256 _index) external view returns (Payslip memory) {
        require(_index < payslips[msg.sender].length, "Invalid index");
        return payslips[msg.sender][_index];
    }

    // Function to add dummy payslip data
    function addDummyPayslip() external {
        addPayslip(
            block.timestamp, // Current block timestamp
            123456, // Dummy employee ID
            "John Doe", // Dummy employee name
            "Software Engineer", // Dummy position
            100000, // Dummy annual salary
            50, // Dummy hourly rate
            2000, // Dummy gross weekly pay
            10, // Dummy tax withholding rate
            1800 // Dummy net weekly pay
        );
    }
}
