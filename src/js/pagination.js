/**
 * Pagination Component
 * Manages pagination state and renders pagination controls
 */
export default class Pagination {
  constructor(config) {
    this.currentPage = config.currentPage || 1;
    this.totalItems = config.totalItems;
    this.itemsPerPage = config.itemsPerPage;
    this.onPageChange = config.onPageChange;
    this.container = config.container;

    this.render();
    this.attachEventListeners();
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get startItem() {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem() {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  setPage(page) {
    const pageNum = parseInt(page, 10);

    if (isNaN(pageNum) || pageNum < 1 || pageNum > this.totalPages) {
      return;
    }

    this.currentPage = pageNum;
    this.onPageChange(pageNum);
    this.render();
    this.attachEventListeners();
  }

  handlePrevious() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  handleNext() {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  render() {
    // don't render if there's only one page or no items
    if (this.totalPages <= 1) {
      this.container.innerHTML = "";

      return;
    }

    const html = `
      <nav 
        aria-label="Projects pagination navigation"
        role="navigation"
        class="pagination wrapper" 
      >
        <!-- Items info -->
        <div class="pagination__info">
          Showing 
          <span class="pagination__info-highlight">${this.startItem}-${
      this.endItem
    }</span> 
          of 
          <span class="pagination__info-highlight">${this.totalItems}</span>
        </div>

        <!-- Pagination controls -->
        <div class="pagination__controls">
          <!-- Previous button -->
          <button
            type="button"
            class="pagination__btn pagination__btn--prev"
            data-pagination-prev
            ${this.currentPage === 1 ? "disabled" : ""}
            aria-label="Go to previous page"
            aria-disabled="${this.currentPage === 1}"
          >
            <i class="ri-arrow-left-s-line" aria-hidden="true"></i>
          </button>

          <!-- Page input -->
          <div class="pagination__page-input">
            <label 
              for="pagination-page-input" 
              class="pagination__label"
            >
              Page
            </label>

            <input
              id="pagination-page-input"
              type="text"
              inputmode="numeric"
              value="${this.currentPage}"
              data-pagination-input
              aria-label="Current page number"
              class="pagination__input"
            />

            <span class="pagination__total">of ${this.totalPages}</span>
          </div>

          <!-- Next button -->
          <button
            type="button"
            class="pagination__btn pagination__btn--next"
            data-pagination-next
            ${this.currentPage === this.totalPages ? "disabled" : ""}
            aria-label="Go to next page"
            aria-disabled="${this.currentPage === this.totalPages}"
          >
            <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
          </button>
        </div>
      </nav>
    `;

    this.container.innerHTML = html;
  }

  attachEventListeners() {
    const prevBtn = this.container.querySelector("[data-pagination-prev]");
    const nextBtn = this.container.querySelector("[data-pagination-next]");
    const input = this.container.querySelector("[data-pagination-input]");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => this.handlePrevious());
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.handleNext());
    }

    if (input) {
      // handle input changes
      input.addEventListener("input", (event) => {
        const value = event.target.value;

        // only allow numbers
        if (value !== "" && !/^\d+$/.test(value)) {
          event.target.value = this.currentPage;
        }
      });

      // handle blur
      input.addEventListener("blur", (event) => {
        const value = event.target.value;

        if (value === "") {
          event.target.value = this.currentPage;
        } else {
          this.setPage(value);
        }
      });

      // handle enter key
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.target.blur();
        }
      });
    }
  }

  update(config) {
    this.totalItems = config.totalItems || this.totalItems;
    this.itemsPerPage = config.itemsPerPage || this.itemsPerPage;
    this.currentPage = config.currentPage || 1;
    this.render();
    this.attachEventListeners();
  }
}
