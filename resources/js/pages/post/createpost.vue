<template>
    <div class="card bg-dark text-white p-4 shadow-lg rounded">
      <div class="card-header bg-primary text-white py-3 px-4">
        <div class="d-flex justify-content-between align-items-center">
          <h1>Create Posts</h1>
          <router-link to="/" class="btn btn-light">Back</router-link>
        </div>
      </div>
      <div class="card-body bg-light text-dark p-4">
        <form>
          <div class="form-group mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" name="title" id="title" class="form-control bg-white text-dark" v-model="post.title" />
          </div>
          <div class="form-group mb-3">
            <label for="description" class="form-label">Description</label>
            <input type="text" name="description" id="description" v-model="post.description"
              class="form-control bg-white text-dark" />
          </div>
          <button type="button" class="btn btn-success mt-2" v-on:click="savePost()">Save</button>
        </form>
      </div>
    </div>
  </template>
<script>
import axios from "../config/axios.js";
import toastr from "toastr";

export default {
    name: 'Posts',
    data() {
        return {
            post: {} // Initial state
        };
    },
    methods: {
        async savePost() {
            try {

                let res = await axios.post('/api/posts/save', this.post);
                toastr.success('Post saved Successfully')
                this.post = {}
            } catch (error) {
                let errors = error.response.data.errors
                for (let key in errors) {
                    toastr.error(errors[key])
                }
            }
        },

    }
}
</script>
<style>
.card {
  max-width: 600px;
  margin: 40px auto;
  border-radius: 15px;
}
.btn {
  font-weight: bold;
}
</style>

          