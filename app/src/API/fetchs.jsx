export function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {;
        return data;
      });
  }


  export async function sendUser(user) {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
  }


  export function getUser(id) {
   return  fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
      .then((response) => response.json())
      .then((json) => {
          return json
      });
  }