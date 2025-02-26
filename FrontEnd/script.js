async function fetchFarmers() {
    const res = await fetch("http://localhost:5000/api/farmers");
    const data = await res.json();
    document.getElementById("farmers-list").innerHTML = data
      .map((farmer) => `<li class="text-lg">${farmer.name} - ${farmer.location}</li>`)
      .join("");
  }
  fetchFarmers();
  
  
  