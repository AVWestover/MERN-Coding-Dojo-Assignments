const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//CREATE USER
const createUser = () => {
  const newFake = {
      _id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      password: faker.internet.password()
  };
  return newFake;
};

const newFakeUser = createUser();

//CREATE COMPANY
const createCompany = () => {
  const newFake = {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return newFake;
}

const newFakeCompany = createCompany();

//ROUTES
//new user
app.get("/api/users/new", (req, res) => {
  let user = newFakeUser;
  res.json({ results: user });
});

//new company
app.get("/api/companies/new", (req, res) => {
  let company = newFakeCompany;
  res.json({ results: company });
});

//new user + company
app.get("/api/user/company", (req, res) => {
  let company = newFakeCompany;
  let user = newFakeUser;
  res.json({
    user: user,
    company: company,
  });
});


// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
  res.json({ message: "testing server update" });
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

