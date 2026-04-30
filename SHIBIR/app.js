const currentKey = document.body.dataset.page || "samp";
const currentPage = pages.find((page) => page.key === currentKey) || pages[0];
const currentData = quizData[currentPage.key];
const ASSET_VERSION = "20260429-1";

document.title = `${currentPage.title} | SHIBIR Afternoon Session`;

const nav = document.querySelector(".nav-pills");
nav.innerHTML = pages.map((page) => `
  <a class="nav-pill ${page.key === currentPage.key ? "active" : ""}" href="${page.file}">${page.title}</a>
`).join("");

document.querySelector("[data-title]").textContent = currentData.heading;
document.querySelector("[data-title-em]").textContent = "";
document.querySelector("[data-note]").textContent = currentData.note;
function renderActivityDetails(sections) {
  return sections.map((section) => {
  const isTitle = isActivityTitle(section);
  const listTag = section.ordered ? "ol" : "ul";
  const items = section.items ? `
    <${listTag}>
      ${section.items.map((item) => `<li>${item}</li>`).join("")}
    </${listTag}>
  ` : "";
  return `
    <section class="activity-detail ${isTitle ? "activity-detail-title" : ""}">
      <h4>${section.title}</h4>
      ${items}
    </section>
  `;
  }).join("");
}

function isActivityTitle(section) {
  return !section.items;
}

function splitActivityOptions(details) {
  const options = [];
  let current = [];
  details.forEach((section) => {
    if (isActivityTitle(section) && current.length) {
      options.push(current);
      current = [];
    }
    current.push(section);
  });
  if (current.length) options.push(current);
  return options;
}

const activitySequence = document.querySelector("[data-activity-sequence]");
const images = currentPage.images || [currentPage.image];
const optionGroups = splitActivityOptions(currentData.activityDetails || []);
activitySequence.innerHTML = optionGroups.map((sections, index) => `
  <article class="activity-option">
    <div class="activity-image">
      <img src="${images[index] || images[0]}?v=${ASSET_VERSION}" alt="${currentData.heading} activity ${index + 1}">
    </div>
    <div class="activity-details">
      ${renderActivityDetails(sections)}
    </div>
  </article>
`).join("");

const questionGrid = document.querySelector("[data-questions]");
if (currentData.questions.length === 0) {
  questionGrid.innerHTML = `
    <article class="question-card">
      <div class="question-top">
        <span class="q-number">+</span>
        <p class="question">આ વિભાગ માટે પ્રશ્નો પછીથી ઉમેરવાના છે.</p>
      </div>
      <div class="prasang" style="margin-left:48px">
        <p>હાલ માટે પ્રવૃત્તિ સ્લાઇડ તૈયાર રાખવામાં આવી છે, જેથી નવી ક્વિઝ સામગ્રી ઉમેરવી સરળ રહેશે.</p>
      </div>
    </article>
  `;
} else {
  questionGrid.innerHTML = currentData.questions.map((item) => `
    <article class="question-card">
      <div class="question-top">
        <span class="q-number">${item.number}</span>
        <p class="question">${item.question}</p>
      </div>
      <div class="options">
        ${item.options.map((option, index) => `
          <div class="option ${index === item.correct ? "correct" : ""}">
            <span class="option-label">${String.fromCharCode(65 + index)})</span>${option}
          </div>
        `).join("")}
      </div>
      ${(item.prasang && item.prasang.length) ? `
        <details>
          <summary>પ્રસંગ</summary>
          <div class="prasang">
            ${item.prasang.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </div>
        </details>
      ` : ""}
    </article>
  `).join("");
}

const currentIndex = pages.findIndex((page) => page.key === currentPage.key);
const prevPage = pages[(currentIndex - 1 + pages.length) % pages.length];
const nextPage = pages[(currentIndex + 1) % pages.length];
document.querySelector("[data-prev]").href = prevPage.file;
document.querySelector("[data-prev]").textContent = `← ${prevPage.title}`;
document.querySelector("[data-next]").href = nextPage.file;
document.querySelector("[data-next]").textContent = `${nextPage.title} →`;
