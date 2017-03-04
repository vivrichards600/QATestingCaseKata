# QA Testing Case Kata

### QA Engineer assignment
 
Please access the following sample application - http://computer-database.herokuapp.com/computers

* Create a series of manual test cases that cover the CRUD operation plus the edge cases. Make
sure you give detailed instructions for each test case (pre conditions, steps, expected results). You
can use any format you want.
* Write scripts that would automate the manual test cases that you see fit to be included in a
regression test set. Please use any of below programming languages:
  * Javascript (preferred)
  * Java (preferred)
  * Python
  * Ruby

(*Please avoid frameworks that only record test cases.*)

* When the assessment is completed, please push the file containing the manual test cases and the
automation project to GitHub.




### Answers

* `TestCases.ods` workbook contains two work sheets, Test Cases and Bugs. 
* `Regressions Tests` folder contains scripts to automate test cases which would be included in a regression test set.
* `Load Tests` folder contains .yml files to simulate 20 virtual users every second for 60 seconds which will send 20 GET and 20 POST requests each.

Regression Tests are written in Javascript using protractor.

Please refer to README.md within `Regression Tests` folder for information how to run the automated tests.
Please refer to README.md within `Load Tests` folder for information how to run the Load tests.
