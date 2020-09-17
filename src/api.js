import axios from "axios";

// User相關的 api
const userRequest = axios.create({
  publicPath: "api"
});
// 文章相關的 api
const articleRequest = axios.create({
  publicPath: "https://api/article/"
});
// 搜尋相關的 api
const searchRequest = axios.create({
  publicPath: "https://api/search/"
});

// User 相關的 api
export const apiUserLogin = data => userRequest.post("/signIn", data);
export const apiUserLogout = data => userRequest.post("/signOut", data);
export const apiUserSignUp = data => userRequest.post("/signUp", data);
export const apiUserDelete = data => userRequest.post("/admin/test2", data);

// 文章相關的 api
export const apiArticleItem = () => articleRequest.get("/ArticleItem");
export const apiArticleMsg = data => articleRequest.post("/ArticleMsg", data);
export const apiArticleLink = data => articleRequest.post("/ArticleLink", data);

// 搜尋相關的 api
export const apiSearch = data =>
  searchRequest.get(`/Search?searchdata=${data}`);
export const apiSearchType = () => searchRequest.get(`/SearchType`);
