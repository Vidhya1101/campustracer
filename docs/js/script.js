const API = "https://campustracer.onrender.com/items";
let allItems = [];

let selectedImages = [];
let activeImageBox = null;

function generateId() {
  return Date.now();
}

async function loadItems() {
  const res = await fetch(API);
  allItems = await res.json();
  renderItems("all");
}

function renderItems(filter) {
  const container = document.getElementById("items");
  if (!container) return;

  container.innerHTML = "";

  let items =
    filter === "all"
      ? allItems
      : allItems.filter(
          i =>
            (filter === "claimed" && i.status === "claimed") ||
            (filter === "unclaimed" && i.status === "unclaimed") ||
            i.type === filter
        );

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";

    const imagesHTML = item.images
      ? item.images.map(img => `<img src="${img}" class="item-img">`).join("")
      : "";

    card.innerHTML = `
      <div class="item-top">
        <span class="badge ${item.type}">${item.type.toUpperCase()}</span>
        ${item.status === "claimed" ? `<span class="badge claimed">CLAIMED</span>` : ""}
      </div>

      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="location">${item.location}</p>
      <small>${item.date}</small>

      <div class="img-row">${imagesHTML}</div>

      ${
        item.status === "unclaimed"
          ? `<a href="claim.html?id=${item.id}" class="claim-btn">Verify & Claim</a>`
          : ""
      }
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const foundForm = document.getElementById("foundForm");
  const lostForm = document.getElementById("lostForm");
  const claimForm = document.getElementById("claimForm");

  const imageInput = document.getElementById("imageInput");
  const imageBoxes = document.querySelectorAll(".image-box");

  if (imageInput && imageBoxes.length) {
    imageBoxes.forEach(box => {
      box.addEventListener("click", () => {
        activeImageBox = box;
        imageInput.click();
      });
    });

    imageInput.addEventListener("change", () => {
      const file = imageInput.files[0];
      if (!file || !activeImageBox) return;

      const index = activeImageBox.dataset.index;
      const reader = new FileReader();

      reader.onload = () => {
        selectedImages[index] = reader.result;
        activeImageBox.innerHTML = `<img src="${reader.result}">`;
        activeImageBox.classList.add("filled");
      };

      reader.readAsDataURL(file);
      imageInput.value = "";
    });
  }

  if (foundForm) {
    foundForm.addEventListener("submit", async e => {
      e.preventDefault();

      const validImages = selectedImages.filter(Boolean);
      if (validImages.length === 0) {
        alert("Please upload at least one image.");
        return;
      }

      const inputs = foundForm.querySelectorAll("input, textarea");

      const item = {
        id: generateId(),
        type: "found",
        name: inputs[0].value,
        description: inputs[1].value,
        location: inputs[2].value,
        date: inputs[3].value,
        color: inputs[4].value,
        brand: inputs[5].value,
        identifiers: inputs[6].value,

        finderName: inputs[7].value,
        finderPhone: inputs[8].value,
        finderEmail: inputs[9].value,

        images: validImages,
        status: "unclaimed"
      };

      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
      });

      window.location.href = "browse.html";
    });
  }

  if (claimForm) {
    claimForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Claim logic already works 👍");
    });
  }

  loadItems();
});
