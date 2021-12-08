<template>
  <el-container>
    <el-aside width="400px">
      <el-form
        ref="form"
        :rules="rules"
        :model="form"
        label-width="120px"
        @submit.native.prevent="handleAdd"
      >
        <el-form-item prop="input">
          <el-input
            v-model.trim="form.input"
            placeholder="todoを入力"
            clearable
          />
        </el-form-item>
      </el-form>
    </el-aside>
    <el-main>
      <el-row>
        <el-col :span="8">
          <ul class="list">
            <li v-for="(todo, index) in todoList" :key="index" class="todo">
              <span class="title" :class="todo.isChecked && 'checked'">{{
                todo.title
              }}</span>
              <div class="icons">
                <i class="el-icon-check" @click="handleCheck(index)"></i>
                <i class="el-icon-delete" @click="handleDelete(index)"></i>
              </div>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input: '',
      },
      todoList: [],
      rules: {
        input: [
          {
            required: true,
            message: '何か入力してください',
            trigger: 'change',
          },
        ],
      },
    }
  },
  methods: {
    handleAdd() {
      this.todoList.push({
        title: this.form.input,
        isChecked: false,
      })
      this.$refs.form.resetFields()
    },
    handleCheck(index) {
      this.todoList = this.todoList.map((todo, i) => {
        return {
          ...todo,
          isChecked: index === i ? !todo.isChecked : todo.isChecked,
        }
      })
    },
    handleDelete(index) {
      this.todoList.splice(index, 1)
    },
  },
}
</script>

<style scoped lang="scss">
.el-aside {
  padding: 20px 10px 20px 20px;
}
.list {
  padding: 0;
}
.todo {
  height: 60px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  .title {
    &.checked {
      text-decoration: line-through;
    }
  }
}
.icons i {
  padding-right: 10px;
  transition: all 0.5s ease-in;
  &:hover {
    transform: scale(1.5);
    color: #2cb696;
  }
}
</style>
