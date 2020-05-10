let shadowHost = document.querySelector(".c-button__shadow");
let shadow = shadowHost.attachShadow({ mode: "open" });

const buttonCustom = document.createElement("button");
buttonCustom.setAttribute("class", "c-button");
buttonCustom.innerHTML = "logout";
shadow.appendChild(buttonCustom);

const styles = document.createElement("style");
styles.textContent = `
    .c-button {
        background-color: transparent;
        border: 1px solid white;
        border-radius:3px;
        color: white;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
`;

buttonCustom.addEventListener('click', elem => {
    window.alert(`la clase de mi elemento padre es ${elem.target.className}`)
})

shadow.appendChild(styles);

