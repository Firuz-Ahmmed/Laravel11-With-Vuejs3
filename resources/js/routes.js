import PostsList from "./pages/post/posts.vue";
import CreatePost from "./pages/post/createpost.vue";
import EditPost from "./pages/post/editpost.vue";
export const routes = [
    {
        path: "/",
        name: "PostsList",
        component: PostsList,
    },
    {
        path: "/create-post",
        name: "CreatePost",
        component: CreatePost,
    },
    {
        path: "/edit-post/:id",
        name: "EditPost",
        component: EditPost,
    },
];
          