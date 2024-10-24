<template>
    <div class="card bg-dark text-white p-4 shadow-lg rounded">
      <div class="card-header bg-info text-white py-3 px-4">
        <div class="d-flex justify-content-between align-items-center">
          <h1>Posts</h1>
          <router-link to="/create-post" class="btn btn-light">Create</router-link>
        </div>
      </div>
      <div class="card-body bg-light text-dark p-4">
        <table class="table table-bordered table-hover">
          <thead class="bg-secondary text-white">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, key) in posts" :key="post.id">
              <td>{{ key + 1 }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.description }}</td>
              <td>
                <div class="d-flex">
                  <router-link
                    :to="{ name: 'EditPost', params: { id: post.id } }"
                    class="btn btn-info me-2"
                  >Edit</router-link>
                  <button
                    type="button"
                    class="btn btn-danger"
                    v-on:click="deletePost(post.id)"
                  >Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <style>
  .card {
    max-width: 100%;
    margin: 20px auto;
    padding: 1.5rem;
    border-radius: 15px;
  }
  .table {
    width: 100%;
    font-size: 1rem;
  }
  .table th, .table td {
    vertical-align: middle;
    font-size: 1em;
  }
  .btn {
    font-size: 1em;
  }
  .d-flex {
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    .card-body {
      padding: 1rem;
    }
    .table th, .table td {
      font-size: 0.9rem;
    }
    .btn {
      font-size: 0.9rem;
    }
  }
  </style>
  

<script>
import axios from "../config/axios.js";
import toastr from "toastr";
export default {
    name: "Posts",
    data() {
        return {
            posts: [], // Initial state
        };
    },
    mounted() {
        this.getPosts();
    },
    methods: {
        async getPosts() {
            let res = await axios.get("/api/posts");
            this.posts = res.data.posts;
        },
        async deletePost(id) {
            let res = await axios.get(`/api/posts/delete/${id}`);
            toastr.success(res.data.message);
            this.getPosts();
        },
    },
};
</script>