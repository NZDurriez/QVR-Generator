document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateButton").addEventListener("click", generateQVRText);
});

function generateQVRText() {
    let plate = document.getElementById("plate").value.toUpperCase() || "Nil";
    let owner = document.getElementById("owner").value || "Nil";
    let woF = document.getElementById("woF").value || "Nil";
    let rego = document.getElementById("rego").value || "Nil";
    let make = document.getElementById("make").value || "Nil";
    let model = document.getElementById("model").value || "Nil";
    let year = document.getElementById("year").value || "Nil";
    let color = document.getElementById("color").value || "Nil";
    let flags = document.getElementById("flags").value || "Nil";

    const output = `~y~Plate:~b~${plate} ~y~Make:~b~${make} ~y~Model:~b~${model} ~y~Colour:~b~${color} ~y~Year:~b~${year} ~y~Registered Owner:~b~${owner} ~y~WOF:~b~${woF} ~y~REG:~b~${rego} ~y~Flags:~b~${flags}`;

    document.getElementById("output").innerText = output;
    document.getElementById("output").style.display = "block"; // Ensure output is visible
}
