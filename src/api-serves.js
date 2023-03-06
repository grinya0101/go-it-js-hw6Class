export default class ApiServes {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const API_KEY = '29209271-716f3ea82b952e36eef48fa19';

    return fetch(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=20&page=${this.page}&q=${this.searchQuery}&image_type=photo`
    )
      .then(r => r.json())
      .then(({hits}) => {
        this.page += 1;
        return hits;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get qury() {
    return this.searchQuery;
  }

  set qury(newQury) {
    this.searchQuery = newQury;
  }
}
