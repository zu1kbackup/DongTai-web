import { RouteConfig } from 'vue-router'
import { i18n } from '@/config/lang'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/project',
    meta: {
      name: i18n.t('menu.home'),
    },
    component: () => import('@/views/layout/Index.vue'),
    children: [
      {
        path: 'project',
        redirect: '/project/projectManage',
        meta: {
          name: i18n.t('menu.project'),
        },
        component: () => import('@/views/project/Index.vue'),
        children: [
          {
            path: 'projectManage',
            meta: {
              name: i18n.t('menu.project'),
            },
            component: () => import('@/views/project/ProjectManage.vue'),
          },
          {
            path: 'projectEdit/:pid?',
            meta: {
              name: i18n.t('menu.project'),
            },
            component: () => import('@/views/project/ProjectEdit.vue'),
          },
          {
            path: 'projectDetail/:pid',
            meta: {
              name: i18n.t('menu.projectDetail'),
            },
            component: () => import('@/views/project/ProjectDetail.vue'),
          },
        ],
      },
      {
        path: 'vuln',
        redirect: '/vuln/vulnList',
        meta: {
          name: i18n.t('menu.vuln'),
        },
        component: () => import('@/views/vuln/Index.vue'),
        children: [
          {
            path: 'vulnList',
            meta: {
              name: i18n.t('menu.vulnList'),
            },
            component: () => import('@/views/vuln/VulnList.vue'),
          },
          {
            path: 'vulnDetail/:page/:id',
            meta: {
              name: i18n.t('menu.vulnDetail'),
            },
            component: () => import('@/views/vuln/VulnDetail.vue'),
          },
        ],
      },
      {
        path: 'sca',
        redirect: '/sca/scaList',
        meta: {
          name: i18n.t('menu.sca'),
        },
        component: () => import('@/views/sca/Index.vue'),
        children: [
          {
            path: 'scaList',
            meta: {
              name: i18n.t('menu.scaList'),
            },
            component: () => import('@/views/sca/ScaList.vue'),
          },
          {
            path: 'scaDetail/:page/:id',
            meta: {
              name: i18n.t('menu.scaDetail'),
            },
            component: () => import('@/views/sca/ScaDetail.vue'),
          },
        ],
      },
      {
        path: 'taint',
        redirect: '/taint/Pool',
        meta: {
          name: i18n.t('menu.taintPool'),
        },
        component: () => import('@/views/taint/Index.vue'),
        children: [
          {
            path: 'Pool',
            meta: {
              name: i18n.t('menu.taintPool'),
            },
            component: () => import('@/views/taint/Pool.vue'),
          },
        ],
      },
      {
        path: 'setting',
        redirect: '/setting/agentManage',
        meta: {
          name: i18n.t('menu.setting'),
        },
        component: () => import('@/views/setting/Index.vue'),
        children: [
          {
            path: 'agentManage',
            meta: {
              name: i18n.t('menu.agentManage'),
            },
            component: () => import('@/views/setting/AgentManage.vue'),
          },
          {
            path: 'strategyManage',
            meta: {
              name: i18n.t('menu.strategyManage'),
            },
            component: () => import('@/views/setting/StrategyManage.vue'),
          },
          {
            path: 'upgradeOnline',
            meta: {
              name: i18n.t('menu.upgradeOnline'),
            },
            component: () => import('@/views/setting/UpgradeOnline.vue'),
          },
          {
            path: 'sysInfo',
            meta: {
              name: i18n.t('menu.sysInfo'),
            },
            component: () => import('@/views/setting/SysInfo.vue'),
          },
          {
            path: 'changePassword',
            meta: {
              name: i18n.t('menu.changePassword'),
            },
            component: () => import('@/views/setting/ChangePassword.vue'),
          },
          {
            path: 'logManage',
            meta: {
              name: i18n.t('menu.logManage'),
            },
            component: () => import('@/views/setting/LogManage.vue'),
          },
        ],
      },
      {
        path: 'department',
        redirect: '/department/departmentList',
        meta: {
          name: i18n.t('meun.department'),
        },
        component: () => import('@/views/department/Index.vue'),
        children: [
          {
            path: 'departmentList',
            meta: {
              name: i18n.t('menu.department'),
            },
            component: () => import('@/views/department/DepartmentList.vue'),
          },
        ],
      },
      {
        path: 'talent',
        redirect: '/talent/talentList',
        meta: {
          name: i18n.t('meun.talent'),
        },
        component: () => import('@/views/talent/Index.vue'),
        children: [
          {
            path: 'talentList',
            meta: {
              name: i18n.t('menu.talent'),
            },
            component: () => import('@/views/talent/TalentList.vue'),
          },
        ],
      },
      {
        path: '/deploy',
        meta: {
          name: '部署IAST',
        },
        component: () => import('@/views/deploy/Deploy.vue'),
      },
    ],
  },
  {
    path: '/login',
    meta: {
      name: i18n.t('menu.login'),
    },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/search',
    meta: {
      name: i18n.t('menu.search'),
    },
    component: () => import('@/views/search/Search.vue'),
  },
]

export default routes
