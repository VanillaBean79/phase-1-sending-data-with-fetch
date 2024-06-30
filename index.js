// Add your code here
function submitData (name, email){
    const formData = {
        name: "name",
        email: "email",
      };
    
    return fetch("http://localhost:3000/users", {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
         },
         body: JSON.stringify({name, email}),
})
.then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object.id);
 document.body.append(object.id)
})
.catch(function (error) {
    alert("Bad things!");
    console.log(error.message);
document.body.append(error.message)
 })
}





