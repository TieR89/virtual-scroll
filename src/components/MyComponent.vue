<!-- отображение данных с виртуальной прокруткой https://www.npmjs.com/package/vue-virtual-scroller -->
<template>
  <div id="app">
    <!-- Компонент из vue-virtual-scroller, который обеспечивает виртуальную прокрутку. -->
    <RecycleScroller
      :items="items"
      :item-size="60"
      key-field="id"
      class="scroller"
    >
      <template #default="{ item }">
        <div class="row">
          <div
            v-for="(square, index) in item.squares"
            :key="index"
            class="square"
            :style="{ borderRadius: square.borderRadius }"
            @mouseover="shrinkSquare"
            @mouseout="resetSquare"
          >
            {{ square.number }}
          </div>
        </div>
      </template>
    </RecycleScroller>
  </div>
</template>

<script>
import { RecycleScroller } from 'vue-virtual-scroller';
import data from '../data/data-generator';

export default {
  name: 'MyComponent',
  components: {
    RecycleScroller,
  },
  data() {
    return {
      items: data.map((row, index) => ({ id: index, squares: row })), // Преобразование данных для использования в компоненте
    };
  },
  methods: {
    shrinkSquare(event) {
      event.target.style.transform = 'scale(0.8)'; // Уменьшение квадрата до 80% от его исходного размера при наведении
    },
    resetSquare(event) {
      event.target.style.transform = 'scale(1)'; // Восстановление квадрата до исходного размера при убирании курсора
    },
  },
};
</script>

<style>
@import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  height: 100vh;
  overflow: hidden;
}

.scroller {
  height: 100%;
  overflow-y: auto;
}

.row {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
}

.square {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  background-color: #333;
  color: white;
  transition: transform 0.2s;
}
/* #app: Основные стили для контейнера приложения.
.scroller: Стили для контейнера с виртуальной прокруткой.
.row: Стили для строки, содержащей квадраты.
.square: Стили для квадратов, включая начальные размеры и анимацию при изменении размера. */
</style>
