<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <article v-if="isShow">
        <section class="sec">
          <div class="sec-container">
            <h2 class="sec-container__hd2">
              「{{ symptoms[Number(symptomIds) - 1].name }}」 に関する商品
            </h2>
            <div class="sort">
              <a href="" class="sp-filer-btn sp">フィルター</a>
              <div class="sort-left">
                <div class="accordion" id="js-filter">
                  <div class="accordion__container">
                    <a class="accordion__title js-accordion-title"
                      >症状で探す</a
                    >
                    <div class="accordion__content">
                      <ul class="sort-inner-list">
                        <li
                          class="sort-inner-item"
                          v-for="symptom in symptoms"
                          v-bind:key="symptom.id"
                        >
                          <input
                            type="checkbox"
                            :id="'symptom-' + String(symptom.id)"
                            name="categories"
                            :value="symptom.id"
                            v-model="symptomIds"
                            class="sort-inner-item__check"
                            :checked="symptomIds.includes(symptom.id)"
                          />
                          <label
                            :for="'symptom-' + String(symptom.id)"
                            class="sort-inner-item__label"
                            >{{ symptom.name }}</label
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="accordion__container">
                    <a class="accordion__title js-accordion-title">味で探す</a>
                    <div class="accordion__content">
                      <ul class="sort-inner-list">
                        <li
                          class="sort-inner-item"
                          v-for="taste in tastes"
                          v-bind:key="taste.id"
                        >
                          <input
                            type="checkbox"
                            :id="'taste-' + String(taste.id)"
                            name="categories"
                            :value="taste.id"
                            v-model="tasteIds"
                            class="sort-inner-item__check"
                            :checked="tasteIds.includes(taste.id)"
                          />
                          <label
                            :for="'taste-' + String(taste.id)"
                            class="sort-inner-item__label"
                            >{{ taste.name }}</label
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="accordion__container">
                    <a class="accordion__title js-accordion-title"
                      >ハーブで探す</a
                    >
                    <div class="accordion__content">
                      <ul class="sort-inner-list">
                        <li
                          class="sort-inner-item"
                          v-for="material in materials"
                          v-bind:key="material.id"
                        >
                          <input
                            type="checkbox"
                            :id="'material-' + String(material.id)"
                            name="categories"
                            :value="material.id"
                            v-model="materialIds"
                            class="sort-inner-item__check"
                            :checked="materialIds.includes(material.id)"
                          />
                          <label
                            :for="'material-' + String(material.id)"
                            class="sort-inner-item__label"
                            >{{ material.name }}</label
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="accordion__container pc">
                    <a class="clearall" v-on:click="clearAll($event)"
                      >CLEAR ALL</a
                    >
                  </div>
                  <div class="accordion__container pc">
                    <a class="clearall" v-on:click="toSearch($event)">検索</a>
                  </div>
                  <a class="backBtn sp" href="">一覧へ</a>
                  <div class="btn-container sp">
                    <a
                      class="btn-container__clear"
                      v-on:click="clearAll($event)"
                      >クリア</a
                    >
                    <a
                      class="btn-container__search"
                      v-on:click="toSearch($event)"
                      >検索</a
                    >
                  </div>
                </div>
              </div>
              <div class="clearfix">
                <div class="sort-right">
                  <div class="accordion">
                    <div class="accordion__container accordion__container--pr0">
                      <a
                        class="accordion__title accordion__title--exc js-accordion-title"
                        >並び替え</a
                      >
                      <div class="accordion__content">
                        <ul class="sort-inner-list">
                          <li
                            class="sort-inner-item"
                            v-on:click="changeSortOrder('popularity_asc')"
                          >
                            人気順
                          </li>
                          <li
                            class="sort-inner-item"
                            v-on:click="changeSortOrder('price_asc')"
                          >
                            値段順
                          </li>
                          <li
                            class="sort-inner-item"
                            v-on:click="changeSortOrder('product_no_asc')"
                          >
                            商品番号
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul class="product-list clearfix" v-if="products.length !== 0">
              <li
                class="product-item"
                data-anime="fadeup"
                :data-category="'att-' + String(product.id)"
                v-for="(product, index) in products"
                v-bind:key="index"
              >
                <router-link
                  :to="'/product/' + String(product.id)"
                  class="product-item__link"
                >
                  <img :src="product.upload_files[0].url" alt="" />
                </router-link>
                <span class="product-item__sub">
                  {{ product.category.name }}
                </span>
                <br/>
                <span class="product-item__name">
                  {{ product.category.series_name }}
                </span>
                <div class="origin-section">
                  <p class="product-item__ttl">
                    <span class="product-item__ttl-num">{{
                      product.product_no
                    }}</span>
                    <span>|</span>
                    <span class="product-item__ttl-main"
                      >{{ product.name2 }}　¥{{ product.prices[0].price }}</span
                    >
                  </p>
                </div>

                <div class="xd-section">
                  <p class="product-item__ttl-xd">
                    <span class="product-item__ttl-num">{{
                      product.product_no
                    }}</span>
                    <span>|</span>
                    <span class="product-item__ttl-main"
                      >{{ product.name2 }}</span
                    >
                  </p>
                  <p class="product-item__ttl">
                    <span class="product-item__ttl-main"
                      >¥{{ product.prices[0].price }}</span
                    >
                  </p>
                </div>
                <span class="product-item__material">
                  {{
                    pageService.cutText(
                      20,
                      "…",
                      pageService.implode(
                        "、",
                        pageService.pluck("name", product.materials)
                      )
                    )
                  }}
                </span>
                <div class="a-btn">
                  <router-link
                    :to="'/product/' + String(product.id)"
                    class="a-btn__link"
                  >
                    詳細を見る
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CommonScriptService } from "@/services/CommonScriptService";
import { PageService } from "@/services/PageService";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import ValidateError from "@/components/ValidateError.vue";
import { indexProductApi } from "@/api/products";
import { indexCategoriesApi } from "@/api/products";

export default defineComponent({
  name: "SymptomIndex",
  watch: {},
  data() {
    return {
      isShow: false,
      message: "",
      validateErrors: {} as any,
      tastes: [] as any[],
      flavors: [] as any[],
      materials: [] as any[],
      symptoms: [] as any[],
      products: [] as any[],
      tasteIds: [] as number[],
      flavorIds: [] as number[],
      materialIds: [] as number[],
      symptomIds: [] as number[],
      sortOrder: "" as string,
      commonScriptService: new CommonScriptService(),
      pageService: new PageService(),
    };
  },
  components: {
    Footer,
    Header,
    ValidateError,
  },
  created: async function () {},
  mounted: async function (): Promise<void> {
    document.body.className = "index";

    // urlのqueryparamから選択されているカテゴリを配列に入れる
    this.setSearch(this.pageService.getQueryObjectForUrl());
    // 選択するカテゴリの取得
    let ProductCategoriesApiresult = await indexCategoriesApi();
    if (!ProductCategoriesApiresult.success) {
      this.commonError(ProductCategoriesApiresult);
      return;
    }
    this.tastes = ProductCategoriesApiresult.data.tastes;
    this.flavors = ProductCategoriesApiresult.data.flavors;
    this.materials = ProductCategoriesApiresult.data.materials;
    this.symptoms = ProductCategoriesApiresult.data.symptoms;

    console.log("symptoms:", this.symptoms);

    // 商品の検索を行う
    let productApiresult = await indexProductApi(this.getSearchData());

    console.log("searchData:", productApiresult);
    if (!productApiresult.success) {
      this.commonError(productApiresult);
      return;
    }
    this.products = productApiresult.data;
    this.isShow = true;
    this.$nextTick(function () {
      this.commonScriptService.execute();
    });
  },
  methods: {
    commonError: function (result: any = null): void {
      if (result.status === 422) {
        this.validateErrors = result.data;
      }
      if (result.message !== "") {
        this.message = result.message;
      }
    },
    // urlのqueryparamから選択されているカテゴリを配列に入れる
    setSearch: function (queryParams: any): any {
      this.tasteIds = queryParams.taste_ids
        ? queryParams.taste_ids.split(",")
        : [];
      this.flavorIds = queryParams.flavor_ids
        ? queryParams.flavor_ids.split(",")
        : [];
      this.materialIds = queryParams.material_ids
        ? queryParams.material_ids.split(",")
        : [];
      this.symptomIds = queryParams.symptom_ids
        ? queryParams.symptom_ids.split(",")
        : [];
      this.sortOrder = queryParams.order_by ?? "";
    },
    changeSortOrder: function (sortOrder: string): void {
      this.sortOrder = sortOrder;
      this.goToSearch();
    },
    clearAll: function (e: any): void {
      e.preventDefault();
      location.href = location.pathname;
    },
    // 商品検索用のデータを取得する
    getSearchData(): any {
      return {
        taste_ids: this.pageService.implode(",", this.tasteIds),
        flavor_ids: this.pageService.implode(",", this.flavorIds),
        material_ids: this.pageService.implode(",", this.materialIds),
        symptom_ids: this.pageService.implode(",", this.symptomIds),
        per_page: -1,
        order_by: this.sortOrder,
      };
    },
    toSearch(e: any) {
      e.preventDefault();
      this.goToSearch();
    },
    goToSearch() {
      const query: string =
        "?" +
        "taste_ids=" +
        this.pageService.implode(",", this.tasteIds) +
        "&flavor_ids=" +
        this.pageService.implode(",", this.flavorIds) +
        "&material_ids=" +
        this.pageService.implode(",", this.materialIds) +
        "&symptom_ids=" +
        this.pageService.implode(",", this.symptomIds) +
        "&order_by=" +
        this.sortOrder;
      location.href = location.pathname + query;
      return;
    },
  },
});
</script>
<style scoped src="@/assets/css/product.css"></style>
