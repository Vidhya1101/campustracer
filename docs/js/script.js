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

      <div class="img-row">${imagesHTML}</div>

      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="location">${item.location}</p>
      <small>${item.date}</small>

      ${
        item.status === "unclaimed"
          ? `<a href="claim.html?id=${item.id}" class="claim-btn">Verify & Claim</a>`
          : ""
      }
    `;

    container.appendChild(card);
  });
}

function extractKeywords(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(" ")
    .filter(w => w.length > 2);
}

function keywordOverlap(a, b) {
  if (!a || !b) return false;
  return extractKeywords(a).some(w => extractKeywords(b).includes(w));
}

async function submitClaim(e) {
  e.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("id");

  const res = await fetch(API);
  const items = await res.json();
  const foundItem = items.find(i => i.id == itemId);

  if (!foundItem) {
    alert("Item not found");
    return;
  }

  let score = 0;
  if (keywordOverlap(foundItem.color, color.value)) score += 2;
  if (keywordOverlap(foundItem.identifiers, identifiers.value)) score += 2;
  if (keywordOverlap(foundItem.location, location.value)) score += 1;
  if (keywordOverlap(foundItem.brand || "", brand.value)) score += 1;

  if (score >= 3) {
    foundItem.status = "claimed";

    await fetch(`${API}/${itemId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foundItem)
    });

    alert("Verification successful. Contact details unlocked.");
    window.location.href = "browse.html";
  } else {
    alert("Verification failed.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const lostForm = document.getElementById("lostForm");
  const foundForm = document.getElementById("foundForm");
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

      const images = selectedImages.filter(Boolean);
      if (images.length === 0) {
        alert("Please upload at least one image.");
        return;
      }

      const i = foundForm.querySelectorAll("input, textarea");

      const item = {
        id: generateId(),
        type: "found",
        name: i[0].value,
        description: i[1].value,
        location: i[2].value,
        date: i[3].value,
        color: i[4].value,
        brand: i[5].value,
        identifiers: i[6].value,
        finderName: i[7].value,
        finderPhone: i[8].value,
        finderEmail: i[9].value,
        images: images,
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

  if (lostForm) {
    lostForm.addEventListener("submit", async e => {
      e.preventDefault();
      const i = lostForm.querySelectorAll("input, textarea");

      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: generateId(),
          type: "lost",
          name: i[0].value,
          description: i[1].value,
          location: i[2].value,
          date: i[3].value,
          color: i[4].value,
          brand: i[5].value,
          identifiers: i[6].value,
          status: "unclaimed"
        })
      });

      window.location.href = "browse.html";
    });
  }

  if (claimForm) {
    claimForm.addEventListener("submit", submitClaim);
  }

  loadItems();
});
