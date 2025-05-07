const blogPosts = [
    {
      title: "Top 5 Tourist Attractions in Palestine",
      description: "Discover the must-see attractions...",
      images: [
        { src: "./img/jeroblog.jpeg", caption: "Jerusalem's Old City" },
        { src: "./img/bethblog.jpeg", caption: "Church of the Nativity - Bethlehem" },
        { src: "./img/jeroblog.jpeg", caption: "Monastery of Temptation - Jericho" },
        { src: "./img/hebronblog.jpeg", caption: "Ancient Streets of Hebron" },
        { src: "./img/nablusblog.jpeg", caption: "Traditional Markets of Nablus" }
        
      ],
      content: "Here are the top 5 must-see places in Palestine including the Old City of Jerusalem, Bethlehem’s Church of the Nativity, Jericho’s Monastery of Temptation, Hebron’s historic streets, and the vibrant Nablus markets."
    },
    {
      title: "Culinary Delights of Palestine",
      description: "Explore the delicious cuisine...",
      images: [
        { src: "./img/mskhanblog.jpeg", caption: "Musakhan" },
        { src: "./img/maqlobablog.jpeg", caption: "Maqluba" },
        { src: "./img/kunafablog.jpg", caption: "Knafeh" },
        { src: "./img/falafelblog.jpg", caption: "Falafel" }
      ],
      content: "Palestinian cuisine is known for its rich flavors and traditional recipes such as musakhan, maqluba, knafeh, and falafel. Each dish tells a story of heritage and hospitality."
    },
    {
      title: "Hidden Beaches in Palestine",
      description: "Uncover the most beautiful beaches...",
      images: [
        { src: "./img/gazablog.jpg", caption: "Gaza Beach" },
        { src: "./img/dedseablog.jpg", caption: "Dead Sea Views" }
      ],
      content: "Palestine is home to stunning and often hidden beaches such as those in Gaza and along the Dead Sea. They provide peaceful retreats with natural beauty and rich cultural experiences."
    }
  ];
  
  const blogCardsContainer = document.getElementById("blogCards");
  const blogModalsContainer = document.getElementById("blogModals");
  
  blogPosts.forEach((post, index) => {
    // البطاقة
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${post.images[0].src}" class="card-img-top" alt="Blog Post ${index + 1}">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.description}</p>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#blogModal${index}">Read More</button>
        </div>
      </div>
    `;
    blogCardsContainer.appendChild(card);
  
    // المودال
    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = `blogModal${index}`;
    modal.tabIndex = -1;
    modal.innerHTML = `
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${post.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <img src="${post.images[0].src}" class="img-fluid mb-2" id="modalImg${index}">
            <p id="imgCaption${index}" class="text-muted">${post.images[0].caption}</p>
            <p class="mt-3">${post.content}</p>
            <div class="d-flex justify-content-between mt-4">
              <button class="btn btn-secondary" id="prevBtn${index}">Previous</button>
              <button class="btn btn-secondary" id="nextBtn${index}">Next</button>
            </div>
          </div>
        </div>
      </div>
    `;
    blogModalsContainer.appendChild(modal);
  
    // منطق التنقل داخل الصور
    let currentImageIndex = 0;
    const updateModalImage = () => {
      const img = document.getElementById(`modalImg${index}`);
      const caption = document.getElementById(`imgCaption${index}`);
      img.src = post.images[currentImageIndex].src;
      caption.textContent = post.images[currentImageIndex].caption;
    };
  
    setTimeout(() => {
      document.getElementById(`prevBtn${index}`).addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + post.images.length) % post.images.length;
        updateModalImage();
      });
  
      document.getElementById(`nextBtn${index}`).addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % post.images.length;
        updateModalImage();
      });
    }, 0);
  });
  






const destinations = [
    { name: "Jerusalem", category: "Historic Sites", image: "./img/jerudes.jpeg", page: "jerusalem.html" },
    { name: "Bethlehem", category: "Religious Landmarks", image: "img/bethlehemdes.jpg", page: "bethlehem.html" },
    { name: "Ramallah", category: "Modern Culture", image: "img/ramallahdes.jpg", page: "ramallah.html" },
    { name: "Hebron", category: "Markets / Heritage", image: "img/hebrondes.jpeg", page: "hebron.html" },
    { name: "Nablus", category: "Culinary / Sweets", image: "img/nablusdes.jpg", page: "nablus.html" },
    { name: "Jericho", category: "Desert / Ancient Sites", image: "img/jerichodes.jpeg", page: "jericho.html" },
    { name: "Tulkarm", category: "Agriculture / Nature", image: "img/tulkarmdes.jpeg", page: "tulkarm.html" },
    { name: "Gaza", category: "Beaches / Culture", image: "img/gazades.jpeg", page: "gaza.html" },
    { name: "Jenin", category: "Theater / Green Fields", image: "img/jenendes.jpg", page: "jenin.html" }
];

const destinationContainer = document.getElementById("destinationCards");

destinations.forEach(dest => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
        <div class="card text-center p-3 h-100">
            <img src="${dest.image}" class="img-fluid mb-3" alt="${dest.name}">
            <h5 class="fw-bold">${dest.name}</h5>
            <p class="text-muted">${dest.category}</p>
            <a href="${dest.page}" target="_blank" class="btn btn-outline-dark btn-explore">Explore</a>
        </div>
    `;
    destinationContainer.appendChild(card);
});
