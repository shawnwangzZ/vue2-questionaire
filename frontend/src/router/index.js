import Vue from 'vue'
import Router from 'vue-router'
import EnterPage from '@/pages/EnterPage'
import StartPage from '@/pages/StartPage'
import MyQuestionaires from '@/pages/MyQuestionaires'
import HelpPage from '@/pages/HelpPage'
import EditQuestionairePage from '@/pages/EditQuestionairePage'
import NotFindPage from '@/pages/NotFindPage'

import QuestionSelect from '@/components/QuestionSelect'
import QuestionnaireOutline from '@/components/QuestionnaireOutline'
import EditQuestionaire from '@/components/QuestionaireEdit'

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
          children: [
            {
              path: '',
              redirect: 'questionaire'
            },
            {
              path: 'questionaire',
              component: EditQuestionaire
            },
            {
              path: 'questionaire/:id',
              component: EditQuestionaire
            }
          ]
        },
        {
          path: 'help',
          component: HelpPage
        },
        {
          path: 'edit',
          component: EditQuestionairePage,
          children: [
            {
              path: '',
              redirect: 'type'
            },
            {
              path: 'type',
              component: QuestionSelect
            },
            {
              path: 'outline',
              component: QuestionnaireOutline
            }
          ]
        }
      ]
    },
    {
      path: '*',
      component: NotFindPage
    }
  ]
})
