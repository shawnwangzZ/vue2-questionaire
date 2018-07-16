import Vue from 'vue'
import Router from 'vue-router'
import EnterPage from '@/pages/EnterPage'
import StartPage from '@/pages/StartPage'
import MyQuestionaires from '@/pages/MyQuestionaires'
import QuestionairePreview from '@/pages/QuestionairePreview'
import HelpPage from '@/pages/HelpPage'
import EditQuestionairePage from '@/pages/EditQuestionairePage'
import LoginPage from '@/pages/LoginPage'
import RegistPage from '@/pages/RegistPage'
import NotFindPage from '@/pages/NotFindPage'

// import EditQuestionaire from '@/components/QuestionaireEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: EnterPage,
      children: [
        {
          path: '',
          component: StartPage
        },
        {
          path: 'mine',
          component: MyQuestionaires,
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'help',
          component: HelpPage
        },
        {
          path: 'edit',
          component: EditQuestionairePage,
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'login',
          component: LoginPage
        },
        {
          path: 'preview',
          component: QuestionairePreview
        },
        {
          path: 'preview/:id',
          component: QuestionairePreview
        },
        {
          path: 'regist',
          component: RegistPage
        }
      ]
    },
    {
      path: '*',
      component: NotFindPage
    }
  ]
})
