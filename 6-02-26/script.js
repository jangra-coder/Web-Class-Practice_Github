// storing the value when clicked add event button
format.addEventListener('submit', (event) => {
    event.preventDefault()

    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    console.log(title, date, category, description);
    const card=document.createElement('div');
    card.classList.add('event-card');
    card.innerHTML=`
    <div class= "card-content">
        <h2>${title}</h2>
        <p>${date}</p>
        <button>${category}</button>
        <p>${description}</p>
    </div>
    `
    card.querySelector(".delete").addEventListener("click", () => {
        card.remove();
    });
    eventcard.appendChild(card);
})