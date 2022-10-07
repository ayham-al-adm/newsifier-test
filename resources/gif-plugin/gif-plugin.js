export default class GifPlugin {
    modalImages = null;
    constructor() {
        const modalContent = document.createElement("div");
        modalContent.classList.add("row", "m-3", "images-container");
        this.modalImages = modalContent;
    }
    static get toolbox() {
        return {
            title: "GIF Image",
            icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
        };
    }
    render() {
        this.wrapper = document.createElement("div");
        const input = document.createElement("input");
        input.classList.add("form-control", "mb-2");
        const modal = this._createModal();

        this.wrapper.classList.add("simple-image");
        this.wrapper.appendChild(input);
        this.wrapper.appendChild(modal);

        input.placeholder = "Paste an image URL...";
        input.value = this.data && this.data.url ? this.data.url : "";
        input.addEventListener("paste", (event) => {
            this._createImage(event.clipboardData.getData("text"));
        });
        return this.wrapper;
    }
    save(blockContent) {
        const input = blockContent.querySelector("input");

        return {
            url: input.value,
        };
    }
    validate(savedData) {
        var extension = savedData.url.split(".").pop();
        if (!extension === "gif") {
            return false;
        }

        return true;
    }

    _createImage(url) {
        const image = document.createElement("img");
        image.src = url;

        this.wrapper.innerHTML = "";
        this.wrapper.appendChild(image);
    }

    _createModal() {
        const modal = document.createElement("div");
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close-btn");
        closeBtn.innerHTML = "x";
        closeBtn.onclick = function (e) {
            e.preventDefault();
            modal.classList.toggle("d-none");
        };
        modal.classList.add("search-modal");
        modal.appendChild(closeBtn);
        modal.appendChild(this._createSearchBox());
        modal.appendChild(this.modalImages);
        return modal;
    }

    _createSearchBox() {
        const searchBox = document.createElement("div");
        searchBox.classList.add("search-box");

        const input = document.createElement("input");
        input.classList.add("search-input");
        input.placeholder = "Search GIF...";
        input.oninput = this._handleSearchInputChange;

        searchBox.appendChild(input);
        return searchBox;
    }

    _handleSearchInputChange = async (e) => {
        const key = e.target.value;
        try {
            const res = await fetch(`http://localhost:8888/gifs?search=${key}`);

            const data = await res.json();

            this._fillModalImages(data.data);
        } catch (e) {
            console.error(e.message);
        }
    };

    _fillModalImages(images) {
        this.modalImages.innerHTML = "";
        images.forEach((image) => {
            const container = document.createElement("div");
            container.classList.add("col-3", "mt-2", "image-container");
            container.onclick = this._changeImageHandler(image);
            container.onclick = function () {
                document.querySelectorAll(".search-modal").forEach((el) => {
                    el.classList.add("d-none");
                });
            };
            const img = document.createElement("img");
            img.src = image.thumbnail;

            container.appendChild(img);
            this.modalImages.appendChild(container);
        });
    }

    _changeImageHandler = (image) => {
        console.log(this.wrapper.querySelector("input"), image);
        this.wrapper.querySelector("input").value = image.url;
        const modal = this.wrapper.querySelector(".search-modal");
    };
}
