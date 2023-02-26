import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Profile.js').Profile|null} */
  profile: null,
  /** @type {import('./models/Post').Post[]} */
  posts: [],

  previousPage: null,
  nextPage: null,
  currentPage: 1,
  totalPages: 5
})
