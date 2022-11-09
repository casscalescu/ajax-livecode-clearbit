const authorization = "Bearer sk_CREATE_AI_KEY_WITH_CLEARBIT_ACCOUNT";
const form = document.getElementById('clearbitForm');
const button = document.getElementById('clearbitSubmit');
const email = document.getElementById('clearbitEmail');

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userBio = document.getElementById('userBio');
const userLocation = document.getElementById('userLocation');

const getInputValue = () => email.value;

const callClearbitApi = (inputEmail, callback) => {
  const url = `https://person.clearbit.com/v1/people/email/${inputEmail}`;
  fetch(url, { headers: { Authorization: authorization } })
    .then(response => response.json())
    .then((data) => {
      callback(data);
    });
};

const setUserInfo = (data) => {
  userName.innerText = data.name.fullName;
  userEmail.innerText = data.email;
  userBio.innerText = data.bio;
  userLocation.innerText = data.location;
};

const fetchUserInfo = (event) => {
  event.preventDefault();
  const inputEmail = getInputValue();
  callClearbitApi(inputEmail, setUserInfo);
};

form.addEventListener('submit', fetchUserInfo)
