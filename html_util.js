function renderBox(artist_url,artist, author_url,author, imgSrc, type, idea) {
    const box = document.createElement('div');
    box.classList.add('box');

    const h4 = document.createElement('h4');
    h4.innerHTML = `<a href="${artist_url}">${artist}</a> - <a href="${author_url}">${author}</a>`;

    const pType = document.createElement('p');
    pType.textContent = type;

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = "如果你看到了我就说明图片似了";
    let textS = idea.replaceAll("\n","</p><p>");
    const pIdea = document.createElement('p');
    pIdea.textContent = textS;

    box.appendChild(h4);
    box.appendChild(pType);
    box.appendChild(img);
    box.appendChild(pIdea);

    document.body.appendChild(box);
}