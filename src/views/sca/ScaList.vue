<template>
  <main
    class="container scroll-class"
    :style="{ display: projectId && 'flex' }"
  >
    <div :class="projectId ? '' : 'fixed-warp'">
      <div class="slider-warp" :style="{ marginTop: projectId && '14px' }">
        <div class="title flex-column-center" style="height: 54px">
          <div class="flex-row-space-between">
            <span style="font-size: 16px; font-weight: bold">{{
              $t('views.vulnList.filter')
            }}</span>
            <el-button type="text" class="resetAllBtn" @click="reset">
              <span style="font-size: 12px">{{
                $t('views.vulnList.resetAll')
              }}</span>
            </el-button>
          </div>
        </div>
        <template v-if="!projectId">
          <div
            class="module-title flex-row-space-between"
            style="margin-top: 14px; margin-bottom: 0px"
          >
            <span style="font-size: 14px">{{
              $t('views.scaList.project_name')
            }}</span>
            <div class="reset-btn" @click="projectNameChange('')">
              <span style="font-size: 14px">{{
                $t('views.vulnList.reset')
              }}</span>
            </div>
          </div>
          <div class="search-box">
            <el-autocomplete
              v-model="kw"
              size="small"
              style="margin: 12px 0 0 0"
              class="commonInput"
              clearable
              :placeholder="$t('views.scaList.searchName')"
              :fetch-suggestions="querySearchAsync"
              @select="handleSelect"
            ></el-autocomplete>
          </div>
          <div
            v-for="item in searchOptionsObj.projects"
            :key="item.project_id"
            class="flex-row-space-between module-line"
            :class="searchObj.project_id === item.id ? 'selectedLine' : ''"
            :style="
              item.count === 0
                ? { cursor: 'not-allowed', height: '30px' }
                : { height: '30px' }
            "
            @click="projectNameChange(item.id, item.count === 0)"
          >
            <div class="selectOption" :title="item.project_name">
              {{ projectNameSplit(item.project_name, 12)
              }}{{ item.project_name.length > 12 ? '...' : '' }}
            </div>
            <div class="num">
              {{ item.count }}
            </div>
          </div>
        </template>
        <div
          class="module-title flex-row-space-between"
          style="margin-top: 14px; margin-bottom: 0px"
        >
          <span style="font-size: 14px">
            {{ $t('views.scaList.level') }}
          </span>
          <div class="reset-btn" @click="levelChange('')">
            <span style="font-size: 14px">
              {{ $t('views.vulnList.reset') }}
            </span>
          </div>
        </div>
        <div
          v-for="item in searchOptionsObj.level"
          :key="item.level_id"
          class="flex-row-space-between module-line"
          :class="searchObj.level === item.level_id ? 'selectedLine' : ''"
          :style="
            item.count === 0
              ? { cursor: 'not-allowed', height: '30px' }
              : { height: '30px' }
          "
          @click="levelChange(item.level_id, item.count === 0)"
        >
          <div class="selectOption">
            {{ item.level }}
          </div>
          <div class="num">
            {{ item.count }}
          </div>
        </div>
        <div
          class="module-title flex-row-space-between"
          style="margin-top: 14px; margin-bottom: 0px"
        >
          <span style="font-size: 14px">
            {{ $t('views.scaList.language') }}
          </span>

          <div class="reset-btn" @click="levelChange('')">
            <span style="font-size: 14px">
              {{ $t('views.vulnList.reset') }}
            </span>
          </div>
        </div>
        <div
          v-for="item in searchOptionsObj.language"
          :key="item.language"
          class="flex-row-space-between module-line"
          :class="searchObj.language === item.language ? 'selectedLine' : ''"
          :style="
            item.count === 0
              ? { cursor: 'not-allowed', height: '30px' }
              : { height: '30px' }
          "
          @click="languageChange(item.language, item.count === 0)"
        >
          <div class="selectOption">
            {{ item.language }}
          </div>
          <div class="num">
            {{ item.count }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="main-warp"
      :style="{ marginLeft: projectId && '28px', width: projectId && '910px' }"
    >
      <div class="sca-list">
        <div class="selectForm">
          <!-- <el-select
          v-model="searchObj.order"
          style="width: 160px; font-size: 14px"
          class="commonSelect"
          :placeholder="$t('views.scaList.sort')"
          clearable
          @change="newSelectData"
        >
          <el-option
            v-for="item in searchOptionsObj.orderOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select> -->
          <el-select
            v-model="searchObj.language"
            :placeholder="$t('views.scaList.developLanguage')"
            style="idth: 160px; font-size: 14px"
            class="commonSelect"
            clearable
            @change="newSelectData"
          >
            <el-option label="JAVA" value="JAVA"></el-option>
            <el-option label="PYTHON" value="PYTHON"></el-option>
          </el-select>
          <div class="selectInput">
            <el-input
              v-model="searchObj.keyword"
              style="width: 412px"
              :placeholder="$t('views.scaList.searchExample')"
              class="commonInput"
              @keyup.enter.native="newSelectData"
            >
              <i
                slot="suffix"
                class="el-input__icon el-icon-search"
                @click="newSelectData"
              />
            </el-input>
          </div>
        </div>
        <el-table
          class="sca-list-table"
          border
          :data="tableData"
          style="width: 100%; margin-top: 18px; cursor: pointer"
          @row-click="goDetail"
          @sort-change="tableSort"
        >
          <el-table-column
            :label="$t('views.scaList.tableHeaders.name')"
            prop="package_name"
            sortable="custom"
            fixed="left"
            show-overflow-tooltip
          >
            <template slot-scope="{ row }">
              {{ row.package_name }}
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('views.scaList.tableHeaders.version')"
            prop="version"
            :width="'110px'"
            sortable="custom"
            show-overflow-tooltip
          >
            <template slot-scope="{ row }">
              {{ row.version }}
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('views.scaList.tableHeaders.path')"
            prop="package_path"
            sortable="custom"
            show-overflow-tooltip
          >
            <template slot-scope="{ row }">
              {{ row.package_path }}
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('views.scaList.tableHeaders.application')"
            prop="project_name"
            width="130px"
          >
            <template slot-scope="{ row }">
              <div>
                {{ row.project_name }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('views.scaList.tableHeaders.language')"
            prop="language"
            width="90px"
          >
            <template slot-scope="{ row }">
              <div>
                {{ row.language }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('views.scaList.tableHeaders.level')"
            prop="level"
            width="110px"
            sortable="custom"
          >
            <template slot-scope="{ row }">
              <div
                :style="
                  row.level_type === 1
                    ? { color: '#EA7171' }
                    : row.level_type === 2
                    ? { color: '#F39D0A' }
                    : row.level_type === 3
                    ? { color: '#2E8FE9' }
                    : row.level_type === 4
                    ? { color: '#7BC1AB' }
                    : ''
                "
              >
                {{ row.level }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('views.scaList.tableHeaders.count')"
            prop="vul_count"
            width="110px"
            sortable="custom"
          >
            <template slot-scope="{ row }">
              <div>
                {{ row.vul_count }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('views.scaList.tableHeaders.time')"
            prop="dt"
            width="160px"
            sortable="custom"
          >
            <template slot-scope="{ row }">
              <div>
                {{ formatTimestamp(row.dt) }}
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            :page-sizes="[10, 20, 40, 50]"
            :page-size="pageSize"
            :current-page="page"
            layout=" prev, pager, next, jumper,sizes,total"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { formatTimestamp } from '@/utils/utils'
import VueBase from '@/VueBase'
import { ScaListObj } from './types'
import ScrollToTop from '@/components/scrollToTop/scrollToTop.vue'

@Component({ name: 'ScaList', components: { ScrollToTop } })
export default class ScaList extends VueBase {
  @Prop() version: number | undefined
  @Prop(String) projectId!: string
  private debounceMyScroll: any
  private page = 1
  private pageSize = 10
  private total = 0
  private dataEnd = false
  private tableData: Array<ScaListObj> = []
  private searchOptionsObj = {
    language: [],
    level: [],
    projects: [],
    orderOptions: [
      {
        label: this.$t('views.scaList.orderOptions.level'),
        value: 'level',
      },
      {
        label: this.$t('views.scaList.orderOptions.package_name'),
        value: 'package_name',
      },
      {
        label: this.$t('views.scaList.orderOptions.version'),
        value: 'version',
      },
      {
        label: this.$t('views.scaList.orderOptions.language'),
        value: 'language',
      },
      {
        label: this.$t('views.scaList.orderOptions.vul_count'),
        value: 'vul_count',
      },
    ],
  }

  private searchObj = {
    language: '',
    level: '',
    project_name: '',
    keyword: '',
    order: '',
    project_id: '',
  }

  created() {
    if (this.projectId) {
      this.searchObj.project_id = this.projectId
    }
  }

  private tableSort(e: any) {
    if (e.order == 'ascending') {
      this.searchObj.order = e.prop
    } else {
      this.searchObj.order = '-' + e.prop
    }
    this.newSelectData()
    //
  }

  private reset() {
    this.searchObj.language = ''
    this.searchObj.level = ''
    this.searchObj.project_name = ''
    if (this.$route.name !== 'projectDetail/:pid') {
      this.searchObj.project_id = ''
    }
    this.kw = ''
    this.newSelectData()
  }

  private kw = ''
  private async querySearchAsync(queryString: string, cb: any) {
    console.log(queryString)
    const res = await this.services.setting.searchProject({ name: queryString })
    if (res.status === 201) {
      const data = res.data.map((item: any) => {
        return {
          value: item.name,
          id: item.id,
        }
      })
      cb(data)
    }
  }

  private handleSelect(item: any) {
    this.projectNameChange(item.id, false)
  }

  private languageChange(val: string, stop: boolean) {
    if (stop) {
      return
    }
    this.searchObj.language = val
    this.newSelectData()
  }

  private levelChange(val: string, stop: boolean) {
    if (stop) {
      return
    }
    this.searchObj.level = val
    this.newSelectData()
  }

  private projectNameChange(val: string, stop: boolean) {
    if (stop) {
      return
    }
    this.searchObj.project_id = val
    this.newSelectData()
  }

  private newSelectData() {
    this.page = 1
    this.tableData = []
    this.scaSummary()
    this.getTableData()
  }

  mounted() {
    this.getTableData()
    this.scaSummary()
  }

  handleSizeChange(val: number) {
    this.pageSize = val
    this.getTableData()
  }
  handleCurrentChange(val: number) {
    this.page = val
    this.getTableData()
  }
  formatTimestamp(val: string) {
    return formatTimestamp(val)
  }
  public async getTableData(flag?: undefined | boolean) {
    const params = {
      page: this.page,
      pageSize: this.pageSize,
      language: this.searchObj.language,
      level: this.searchObj.level,
      project_name: this.searchObj.project_name,
      keyword: this.searchObj.keyword,
      order: this.searchObj.order,
      project_id: this.searchObj.project_id,
      version_id: this.version,
    }
    this.loadingStart()
    const { status, data, msg, page } = await this.services.sca.scaList(params)
    this.loadingDone()
    if (status !== 201) {
      this.$message({
        type: 'error',
        message: msg,
        showClose: true,
      })
      return
    }
    this.total = page.alltotal
    this.tableData = data
  }

  public async scaSummary() {
    const params = {
      language: this.searchObj.language,
      level: this.searchObj.level,
      project_name: this.searchObj.project_name,
      keyword: this.searchObj.keyword,
      order: this.searchObj.order,
      project_id: this.searchObj.project_id,
      version_id: this.version,
    }
    this.loadingStart()
    const { status, data, msg } = await this.services.sca.scaSummary(params)
    this.loadingDone()
    if (status !== 201) {
      this.$message({
        type: 'error',
        message: msg,
        showClose: true,
      })
      return
    }
    this.searchOptionsObj.language = data.language
    this.searchOptionsObj.level = data.level
    this.searchOptionsObj.projects = data.projects
  }

  private goDetail(row: any) {
    this.$router.push(`/sca/scaDetail/${this.page}/${row.id}`)
  }
  projectNameSplit(name: string, total: number) {
    if (name.length > total) {
      return name.substring(0, total)
    }
    return name
  }
}
</script>

<style scoped lang="scss">
.fixed-warp {
  position: fixed;
  top: 0;
  bottom: 0;
}

.slider-warp {
  width: 234px;
  margin-top: 78px;
  background: #fff;
  overflow: auto;
  padding: 0 6px 20px 6px;
  height: calc(100vh - 103px);

  .title {
    height: 54px;
    border-bottom: 1px solid #e6e9ec;
    font-size: 18px;
    font-weight: normal;
    color: #4a72ae;

    .resetAllBtn {
      width: 72px;
      height: 28px;
      line-height: 0;
      background: #4a72ae;
      border-radius: 2px;
      color: #fff;
    }
  }

  .module-title {
    margin-top: 28px;
    margin-bottom: 24px;
    font-size: 16px;
    color: #38435a;
  }

  .reset-btn {
    color: #4a72ae;
    cursor: pointer;
  }

  .module-line {
    cursor: pointer;
    padding-left: 5px;
    height: 38px;
    line-height: 38px;

    &:hover {
      background: #f6f8fa;
    }

    .selectOption {
      color: #4b99f1;
      font-size: 14px;
    }

    .num {
      color: #959ea9;
      font-size: 14px;
    }
  }

  .selectedLine {
    background: #f6f8fa;

    .selectOption {
      color: #0366d6;
    }
  }
}
.dot {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.main-warp {
  padding-top: 14px;
  margin-left: 248px;

  .selectForm {
    width: 100%;

    .selectInput {
      float: right;
    }
  }
}
.search-box {
  text-align: center;
}
.sca-list {
  background: #fff;
  margin-bottom: 24px;
  padding: 6px 12px;
  .pagination {
    padding: 8px 0;
    display: flex;
    justify-content: flex-end;
  }
}
.sca-list-table {
  margin-top: 16px;
  &.el-table {
    /deep/th {
      line-height: 0;
      padding: 6px 0;
      background: #f6f8fa;
    }
  }
}
</style>
