<template>
  <div class="single-select-question">
    <div v-if="!editable">
      <p>{{ question.title }}</p>
      <el-checkbox-group v-model="question.select">
        <el-checkbox v-for="option in question.options"
                :key="option.key"
                :label="option.value"
                disabled
        >
          {{ option.value }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <div v-if="editable && isEditing">
      <el-form ref="form" :model="question" :rules="rules">
        <el-form-item prop="title">
          <el-input v-model="question.title" placeholder="请输入问题"></el-input>
        </el-form-item>
        <el-form-item v-for="option in question.options" :key="option.key">
          <el-form :model="option" ref="option" :rules="rules">
            <el-form-item prop="value">
              <el-row type="flex" justify="space-between">
                <el-col :span="20">
                  <el-input v-model="option.value" placeholder="请输入选项"></el-input>
                </el-col>
                <el-col :span="3">
                  <el-button icon="el-icon-delete" @click="onDeleteOption(index)"></el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-form-item>
        <el-form-item>
          <el-button plain size="small" @click="onSave">保存</el-button>
          <el-button plain size="small" @click="onAddOption">添加选项</el-button>
          <el-button plain size="small" @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="editable && !isEditing">
      <p>{{ question.title }}</p>
      <el-checkbox-group v-model="question.select">
        <el-checkbox v-for="option in question.options"
                :key="option.key"
                :label="option.value"
                disabled
        >
          {{ option.value }}
        </el-checkbox>
      </el-checkbox-group>
      <div class="edit-buttons">
        <el-button plain size="small" @click="onEdit">编辑</el-button>
        <el-button plain size="small" @click="onDelete">删除</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MultiSelectQuestion',
  props: [
    'editable',
    'question'
  ],
  data () {
    return {
      isEditing: false,
      backUpQuestion: null,
      key: 0,
      rules: {
        title: [
          { required: true, message: '请输入问题', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请输入选项', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSave () {
      this.backUpQuestion = this.copy(this.question)
      this.isEditing = false
    },
    onCancel () {
      this.question = this.copy(this.backUpQuestion)
      this.isEditing = false
    },
    onEdit () {
      this.isEditing = true
    },
    onDelete () {
      console.log('delete question')
    },
    copy (source) {
      return JSON.parse(JSON.stringify(source))
    },
    onAddOption () {
      this.question.options.push({ key: ++this.key, value: '' })
    },
    onDeleteOption (index) {
      if (this.question.options.length <= 1) {
        return
      }
      this.question.options.splice(index, 1)
    }
  },
  created () {
    this.key = this.question.options[this.question.options.length - 1].key
    this.backUpQuestion = this.copy(this.question)
  }
}
</script>
<style scoped>
  .single-select-question {
    background: #ffffff;
    padding: 0.5rem 0.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    padding: 0;
    margin: 0;
  }
  .el-form-item.is-required {
    margin-bottom: 22px;
  }
  .el-col {
    text-align: center;
  }
</style>
