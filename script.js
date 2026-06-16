
function filterDivs() {
         const searching = document.getElementById("searchInput");
         const filtercount = document.getElementById("filtercount");
   const filter = searching.value.toLowerCase();
    const divs = document.getElementsByClassName("movie");
    var howMany = 0

    if (filter.length < 3) {
        howMany = 0
        for (let i = 0; i < divs.length; i++)
            divs[i].style.display = "";
        filtercount.innerHTML = howMany.toString()
        return;
    }
    howMany = 0
    for (let i = 0; i < divs.length; i++) {

        const txt = divs[i].textContent || divs[i].innerText;
        if (txt.toLowerCase().includes(filter)) {
            divs[i].style.display = "";
            howMany++
        } else {
            divs[i].style.display = "none";
        }
    }
    filtercount.innerHTML = howMany.toString()
}

