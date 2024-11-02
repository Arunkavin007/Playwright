const { test, expect, request: playwrightRequest} = require("@playwright/test");
 
test("Create POST api request using static request body in playwright", async ({
  request,
}) => {

    // config
    const requestContext = await playwrightRequest.newContext({
        ignoreHTTPSErrors: true,
      });

  // create post api request using playwright
  const postAPIResponse = await requestContext.post("/booking", {
    data: {
      firstname: "testers playwright",
      lastname: "testers api testing",
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "super bowls",
    },
  });
 
  // validate status code
  console.log(await postAPIResponse.json());
 
  expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(200);
 
  // validate api response json obj
  const postAPIResponseBody = await postAPIResponse.json();
 
  expect(postAPIResponseBody.booking).toHaveProperty(
    "firstname",
    "testers playwright"
  );
  expect(postAPIResponseBody.booking).toHaveProperty(
    "lastname",
    "testers api testing"
  );
 
  // validate api response nested json obj
  expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
    "checkin",
    "2018-01-01"
  );
  expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
    "checkout",
    "2019-01-01"
  );
});
 