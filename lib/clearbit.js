// TODO
// add event listener (submit event) to the form
// store the user's input
// fetch from the clearbit API
// get our response => turn into JSON => insert it into our table's empty <td>
// clear table on every form submit

// verify ourselves as a user making a request to the API
const authorization = "Bearer sk_019e6efb1f45e8ec5e90e93a70e3b774";
// form to add event listener to
const form = document.querySelector("#clearbitForm");
// need this to append the image at the bottom of the container
const container = document.getElementById("user-info");

form.addEventListener("submit", (event) => {
  // prevent page reload
  event.preventDefault();

  // console.dir => will show you that you can access the "value" attribute from an input element
  const userInput = form.querySelector("#clearbitEmail").value;
  const url = `https://person.clearbit.com/v2/people/find?email=${userInput}`;
  const nameTd = document.getElementById("userName");
  const emailTd = document.getElementById("userEmail");
  const bioTd = document.getElementById("userBio");
  const locationTd = document.getElementById("userLocation");

  // GET request => just fetch the url and don't need to pass any other parameters
  // we are passing our authorization key through the headers
  // the API will receive this on their end through the "Request Headers" (see Network tab in browser)
  fetch(url, {
    headers: { Authorization: authorization }
  })
  .then(response => response.json())
  .then((data) => {
    // creating a HTML element
    const image = document.createElement("img");

    nameTd.innerText = data.name;
    bioTd.innerText = data.bio;
    emailTd.innerText = data.email;
    locationTd.innerText = data.location;
    image.src = data.avatar;

    // inserting the image at the BOTTOM of the container
    container.appendChild(image);
  })
})
