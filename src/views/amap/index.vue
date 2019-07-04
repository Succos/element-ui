<template>
    <div class="dashboard-container">
        <div class="dashboard-text">表单验证测试</div>
        <el-form ref="formnames" :model="form" :rules="rulesnames" label-width="80px">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交测试</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      const validateUsernames = (rule, value, callback) => {
       return    callback(new Error('熟悉程度在 0 至 100 %之间'))
      }
      return {
        form: {
          name: null
        },
        rulesnames: {
          name: [
            { required: true, type: 'number', trigger: 'blur', validator: validateUsernames }
            ]
        }
      }
    },
    methods: {
      submit() {
        this.$refs.formnames.validate(valid => {
        if (valid) {
          console.log(valid)
        } else {
          console.log('meitongguo')
        }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .dashboard {
        &-container {
            margin: 30px;
        }

        &-text {
            font-size: 30px;
            line-height: 46px;
        }
    }
</style>
