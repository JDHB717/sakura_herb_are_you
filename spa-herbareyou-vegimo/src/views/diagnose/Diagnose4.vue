<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <article id="app" v-if="isShow">
        <section class="sec">
          <div class="sec-container">
            <p class="sec-container__name">{{ this.name }}さん</p>
            <h2 class="sec-container__hd3">
              ハーブティーに どのような効果を期待しますか？
            </h2>
            <div class="sec-container__form">
              <div class="sec-container__form-parts">
                <input
                  type="radio"
                  name="condition"
                  :value="1"
                  id="condition1"
                  v-model="condition"
                />
                <label for="condition1" class="sec-container__form-label"
                  >むくみを解消したい</label
                >
              </div>
              <div class="sec-container__form-parts">
                <input
                  type="radio"
                  name="condition"
                  :value="2"
                  id="condition2"
                  v-model="condition"
                />
                <label for="condition2" class="sec-container__form-label"
                  >身体をスマートにしたい</label
                >
              </div>
              <div class="sec-container__form-parts">
                <input
                  type="radio"
                  name="condition"
                  :value="5"
                  id="condition3"
                  v-model="condition"
                />
                <label for="condition3" class="sec-container__form-label"
                  >ストレスが気になる</label
                >
              </div>
              <div class="sec-container__form-parts">
                <input
                  type="radio"
                  name="condition"
                  :value="6"
                  id="condition4"
                  v-model="condition"
                />
                <label for="condition4" class="sec-container__form-label"
                  >しっかり眠りたい</label
                >
              </div>
              <div class="sec-container__form-parts">
                <input
                  type="radio"
                  name="condition"
                  :value="10"
                  id="condition5"
                  v-model="condition"
                />
                <label for="condition5" class="sec-container__form-label"
                  >美容につなげたい</label
                >
              </div>
              <div class="sec-container__form-parts">
                <input
                  type="radio"
                  name="condition"
                  :value="11"
                  id="condition6"
                  v-model="condition"
                />
                <label for="condition6" class="sec-container__form-label"
                  >疲れを取りたい</label
                >
              </div>
              <div class="sec-container__form-parts">
                <input
                  type="radio"
                  name="condition"
                  :value="12"
                  id="condition7"
                  v-model="condition"
                />
                <label for="condition7" class="sec-container__form-label"
                  >女性の不調を整えたい</label
                >
              </div>
              <div class="sec-container__form-parts">
                <input
                  type="radio"
                  name="condition"
                  :value="13"
                  id="condition8"
                  v-model="condition"
                />
                <label for="condition8" class="sec-container__form-label"
                  >気持ちを前向きにしたい</label
                >
              </div>
              <div class="sec-container__form-parts">
                <input
                  type="radio"
                  name="condition"
                  :value="18"
                  id="condition9"
                  v-model="condition"
                />
                <label for="condition9" class="sec-container__form-label"
                  >身体を温めたい</label
                >
              </div>
              <div class="sec-container__form-parts">
                <input
                  type="radio"
                  name="condition"
                  :value="19"
                  id="condition10"
                  v-model="condition"
                />
                <label for="condition10" class="sec-container__form-label"
                  >おいしいハーブティーを楽しみたい</label
                >
              </div>
              <div class="sec-container__form-parts"></div>
            </div>
            <div class="sec-container__btn">
              <button class="sec-container__btn-inner" v-on:click="nextPage()">
                次の質問へ
              </button>
            </div>
            <div class="sec-container__back">
              <a href="/diagnose2" class="sec-container__back-inner"
                >前のページへ戻る</a
              >
            </div>
          </div>
        </section>
      </article>

      <article id="app" v-if="isSecondShow">
        <section class="sec">
          <div class="sec-container">
            <p class="sec-container__name">
              {{ diagnoseData.diagnose0.name }}さん
            </p>

            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 4"
            >
              ミントを使用しても大丈夫ですか？
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 7"
            >
              どのような原因からだと考えられますか？
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 8"
            >
              どのような痛みですか？
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 9"
            >
              どのようなかぜですか？
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 14"
            >
              身体のめぐりを良くしましょう！
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 15"
            >
              ミントを使用しても大丈夫ですか？
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 16"
            >
              ミネラルを取り入れましょう！
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 17"
            >
              どのような胃腸の悩みがありますか？
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 1"
            >
              水分の巡りを良くしましょう！
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 2"
            >
              身体を整えてボディフルネスを！
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 5"
            >
              どのようにストレスを感じていますか？
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 6"
            >
              どのような眠りの悩みですか？
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 10"
            >
              最も興味があるのはどれですか？
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 11"
            >
              どこが疲れていますか？
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 12"
            >
              ハーブティーでペースを取り戻しましょう
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 13"
            >
              ハーブティーで前向きな気持ちに
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 18"
            >
              ハーブティーで身体をポカポカ温めよう
            </h2>
            <h2
              class="sec-container__hd2"
              v-if="diagnoseData.diagnose2.condition === 19"
            >
              おいしいハーブティーで素敵な毎日を
            </h2>

            <h2 class="sec-container__hd3">
              味と香りの好みを選択してください。(複数可)
            </h2>

            <h2 class="sec-container__hd2">味の特徴</h2>
            <div class="sec-container__form">
              <div
                class="sec-container__form-parts"
                v-for="taste in tastes"
                v-bind:key="taste.id"
              >
                <input
                  type="checkbox"
                  name="condition1"
                  :value="taste.id"
                  :id="String(taste.name)"
                  v-model="tasteIds"
                  :checked="tasteIds.includes(taste.id)"
                />
                <label
                  :for="String(taste.name)"
                  class="sec-container__form-label"
                  >{{ taste.name }}</label
                >
              </div>
            </div>

            <h2 class="sec-container__hd2">香りの特徴</h2>
            <div class="sec-container__form">
              <div
                class="sec-container__form-parts"
                v-for="flavor in flavors"
                v-bind:key="flavor.id"
              >
                <input
                  type="checkbox"
                  name="condition"
                  :value="flavor.id"
                  :id="String(flavor.name)"
                  v-model="flavorIds"
                  :checked="flavorIds.includes(flavor.id)"
                />
                <label
                  :for="String(flavor.name)"
                  class="sec-container__form-label"
                  >{{ flavor.name }}</label
                >
              </div>
            </div>

            <div class="sec-container__btn">
              <button
                type="button"
                class="sec-container__btn-inner"
                v-on:click="nextPage()"
              >
                なるほど…
              </button>
            </div>

            <div class="sec-container__back">
              <router-link
                :to="{ name: backPath }"
                class="sec-container__back-inner"
              >
                前のページへ戻る
              </router-link>
            </div>
          </div>
        </section>
      </article>

      <div class="deco">
        <img src="@/assets/img/diagnose/dogtor.gif" alt="" class="deco__img" />
      </div>
    </main>
    <!-- <Footer /> -->
    <div class="footer-div"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { CommonScriptService } from "@/services/CommonScriptService";
import { showDetailedFlavorsApi } from "@/api/detailed-flavors";
import { showDetailedTastesApi } from "@/api/detailed-tastes";

export default defineComponent({
  name: "Diagnose4",
  watch: {},
  data() {
    return {
      isShow: true,
      isSecondShow: false,
      condition: 0 as number,
      name: "" as string,
      condition1: [] as any[],
      condition2: [] as any[],
      nextPath: "Diagnose6",
      flavorIds: [] as any[],
      tasteIds: [] as any[],
      flavors: [] as any[],
      tastes: [] as any[],
      diagnoseData: {} as any,
      backPath: "Diagnose2",
    };
  },
  components: {
    Footer,
    Header,
  },
  created: async function () {},
  mounted: async function (): Promise<void> {
    this.$nextTick(function () {
      this.commonScriptService.execute();
    });

    const diagnoseJsonData = localStorage.getItem("diagnoseJsonData");
    if (!diagnoseJsonData) {
      this.$router.push({
        name: "Diagnose0",
      });
      return;
    }
    const diagnoseData = JSON.parse(diagnoseJsonData);
    this.name = diagnoseData?.diagnose0?.name;
    if (!diagnoseData?.diagnose2) {
      this.$router.push({
        name: this.backPath,
      });
      return;
    }
    this.diagnoseData = diagnoseData;
    console.log("detailedSymptomsID:", this.diagnoseData.diagnose2.condition);

    if (
      this.diagnoseData.diagnose2.condition === 20 ||
      this.diagnoseData.diagnose2.condition === 21
    ) {
      this.isSecondShow = false;
      this.isShow = true;
    }
    if (
      this.diagnoseData.diagnose2.condition !== 20 &&
      this.diagnoseData.diagnose2.condition !== 21
    ) {
      if (
        this.diagnoseData.diagnose3.condition === "当てはまるものがない" ||
        this.diagnoseData.diagnose3.condition === "分からない"
      ) {
        this.isShow = false;
        const result = await showDetailedFlavorsApi(3);
        console.log("data:", result);
        this.flavors = result.data;

        const result1 = await showDetailedTastesApi(3);
        console.log("data:", result1);
        this.tastes = result1.data;

        this.isSecondShow = true;
      }
    }
  },
  beforeDestroy: function (): void {},
  methods: {
    nextPage: function () {
      // alert(this.condition);
      if (this.isShow === true) {
        if (this.condition === 0) {
          return;
        }
        this.diagnoseData.diagnose4 = {
          condition: this.condition,
        };
        localStorage.setItem(
          "diagnoseJsonData",
          JSON.stringify(this.diagnoseData)
        );
        if (this.condition !== 20) {
          this.$router.push({
            name: this.nextPath,
          });
        } else {
          this.$router.push({
            name: this.nextPath1,
          });
        }
      }
      if (this.isSecondShow === true) {
        // alert(1);
        // alert(this.condition);
        // if (this.condition === 0) {
        //   return;
        // }
        // alert(2);
        if (this.tasteIds.length === 0 && this.flavorIds.length === 0) {
          return;
        }
        const query: string =
          "?" +
          "taste_ids=" +
          this.tasteIds +
          "&flavor_ids=" +
          this.flavorIds +
          "&material_ids=" +
          "" +
          "&symptom_ids=" +
          "" +
          "&order_by=" +
          "" +
          "&recommendation_kind=" +
          "";
        location.href = location.origin + "/diagnoseproduct" + query;
      }
    },
  },
});
</script>
<style scoped src="@/assets/css/diagnose-4.css"></style>
