document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");
  document
    .getElementById("contact-form")
    .addEventListener("submit", async (event) => {
      //Vient empêcher que le formulaire de refresh la page
      event.preventDefault();
      //   console.log("Test !");

      //1 Récupérer les différentes du formulaires
      const data = {
        firstname: document.getElementById("prénom").value,
        lastname: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      //   console.log(data);
      console.log("axios ====>", axios);

      //2 Envoyer à un serveur les informations
      const response = await axios.post(
        "https://formulaireback2.herokuapp.com/form",
        data
      );
      console.log(response.data);

      //   const response = await axios.get("http://localhost:4000/hello");
    });
});
