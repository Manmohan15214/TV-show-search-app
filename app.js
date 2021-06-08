const form = document.querySelector("#searchForm");


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const search = form.elements.searchTerm.value;
    const config = { params: { q: search } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=`, config);
    console.log(res.data);

    const list = document.querySelector("#listOfShows");
    const newH2 = document.createElement("H2");
    newH2.innerText = `The result for ${search} are:`;
    list.append(newH2);

    for (const d of res.data) {
        const newLi = makeNewLi();
        if (d.show.image) {
            const newIMG = makeNewIMG(d.show.image.medium);
            newLi.append(newIMG);
            list.append(newLi);
        }
    }

    form.reset();
})

const makeNewLi = () => {
    const li = document.createElement("li");
    return li;
};

const makeNewIMG = (imgSrc) => {
    const newIMG = document.createElement("IMG");
    newIMG.src = imgSrc;
    return newIMG;
};