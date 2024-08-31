function renderBox(artist, author, imgSrc, type, idea) {
    const box = document.createElement('div');
    box.classList.add('box');

    const h4 = document.createElement('h4');
    h4.innerHTML = `<a href="${artist}">${artist}</a> - <a href="${author}">${author}</a>`;

    const pType = document.createElement('p');
    pType.textContent = type;

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = "如果你看到了我就说明图片似了";

    const pIdea = document.createElement('p');
    pIdea.textContent = idea;

    box.appendChild(h4);
    box.appendChild(pType);
    box.appendChild(img);
    box.appendChild(pIdea);

    document.body.appendChild(box);
}