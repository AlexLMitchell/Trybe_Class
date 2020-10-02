let salary = 3600;

switch (true) {
  case (salary >= 5189.82):
    salary -= 570.88;
    break;
  case (salary >= 2594.93):
    salary *= (1 - .11);
    break;
  case (salary >= 1556.95):
    salary *= (1 - .09);
    break;
  case (salary >= 0 && salary < 1556.95):
    salary *= (1 - 0.08);
    break;
  default:
    console.log("Wrong paycheck balance");
    break;
}

switch (true) {
  case (salary > 4664.68):
    salary *= (1 - .275); salary += 869.36;
    break;
  case (salary >= 3751.06):
    salary *= (1 - .225); salary += 636.13;
    break;
  case (salary >= 2826.66):
    salary *= (1 - .15); salary += 354.8;
    break;
  case (salary >= 1903.99):
    salary *= (1 - .075); salary += 142.8;
    break;
  case (salary > 0 && salary < 1903.99):
    salary *= (1 - 0);
    break;
  default:
    console.log("wrong paycheck balance");
}
console.log("salary is " + salary.toFixed(2));