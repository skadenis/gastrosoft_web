<template>
  <div>
    <!-- Модальное окно -->
    <div v-show="this.thanks_wrapper" class="thanks--wrapper">
      <div class="thanks--wrapper__block">
        <div class="thanks--wrapper__check"></div>
        <h3>Спасибо, ваша заявка успешно оформлена!</h3>
        <p>Наш менеджер свяжется с вами в ближайшее время</p>
      </div>
    </div>
    <header>
      <div class="content--layout">
        <div class="header--logo">
          <img src="@/assets/images/GastroSoft.svg" style="width: 250px" />
        </div>
        <div class="header__wrapper">
          <div>
            <p class="header--question">Вы собственник кафе или ресторана?</p>
            <h1>
              Зарабатывайте <span class="h1__accent">на 30% больше </span><br />
              с приложением и сайтом от GastroSoft
            </h1>
            <div class="header--form">
              <div class="header--form__name">Получить доступ к демоверсии</div>
              <input
                class="header--form__input"
                id="header--form__input"
                type="text"
                placeholder="Телефон"
                v-mask="'+375(##)###-##-##'"
                v-model="form.phone"
              />
              <button class="header--form__btn" @click="headerForm">
                Оставить заявку
              </button>
            </div>
          </div>
          <img class="header__image" src="@/assets/images/header/phone.png" />
        </div>
      </div>
    </header>
    <div class="bottom--wave"></div>
    <div class="green--layout">
      <div class="content--layout">
        <div class="features">
          <div class="feature">
            <img
              class="feature__icon"
              width="95"
              height="88"
              src="@/assets/images/features/noInvestmentsIcon.png"
              alt="Без стартовых вложений"
            />
            <h3 class="feature__name">Без стартовых вложений</h3>
            <p class="feature__description">
              Вы можете начать работать бесплатно и платить только за
              оформленные заказы
            </p>
          </div>
          <div class="feature">
            <img
              class="feature__icon"
              width="89"
              height="85"
              src="@/assets/images/features/allSitesIcon.png"
              alt="На всех площадках"
            />
            <h3 class="feature__name">На всех площадках</h3>
            <p class="feature__description">
              Разработанное приложение мы разместим на самых популярных
              платформах
              <span class="feature__description__apps">
                <img
                  class="feature__description__appstore"
                  src="@/assets/images/features/appStoreIcon.png"
                  alt="appStore"
                />
                <img
                  class="feature__description__google"
                  src="@/assets/images/features/googlePlayIcon.png"
                  alt="googlePlay"
                />
              </span>
            </p>
          </div>
          <div class="feature">
            <img
              class="feature__icon"
              width="90"
              height="88"
              src="@/assets/images/features/withAdvertisingIcon.png"
              alt="Сразу с рекламой"
            />
            <h3 class="feature__name">Сразу с рекламой</h3>
            <p class="feature__description">
              Поможем разобраться и запустить рекламные кампании для вашего
              приложения
            </p>
          </div>
        </div>
        <a class="main--cta button" href="#request--access__form"
          >Получить доступ к демоверсии</a
        >
        <div class="specifications">
          <div class="specification">
            <img
              class="specification__image"
              src="@/assets/images/specifications/fast.png"
              alt="Мобильное приложение и сайт для ресторана за 14 дней"
              width="296"
              height="225"
            />
            <h3>Мобильное приложение и сайт для ресторана за 14 дней</h3>
            <p class="specification__content">
              Вместе с вами мы определимся с цветовой гаммой, подготовим дизайн
              первой страницы и иконки. Запустим приложение на платформы и
              создадим сайт.
            </p>
          </div>
          <div class="specification">
            <img
              class="specification__image"
              src="@/assets/images/specifications/free.png"
              alt="Разработка и поддержка"
              width="296"
              height="225"
            />
            <h3>Разработка <br />и поддержка</h3>
            <p class="specification__content">
              Никакой абонентской платы. Вы платите только за разработку и 3% от
              принятых заказов согласно выбранному пакету услуг. Поддержку
              системы вы получаете БЕСПЛАТНО.
            </p>
          </div>
          <div class="specification">
            <img
              class="specification__image"
              src="@/assets/images/specifications/help.png"
              alt="Поможем раскрутить сайт и приложение"
              width="303"
              height="239"
            />
            <h3>Поможем раскрутить сайт и приложение</h3>
            <p class="specification__content">
              Мы предоставляем широкий набор инструментов для продвижения вашего
              приложения и сайта как платных, так и бесплатных
            </p>
          </div>
          <div class="specification">
            <img
              class="specification__image"
              src="@/assets/images/specifications/connect.png"
              alt="Взаимодействуйте с аудиторией приложения абсолютно бесплатно"
              width="303"
              height="237"
            />
            <h3>
              Взаимодействуйте с аудиторией приложения абсолютно бесплатно
            </h3>
            <p class="specification__content">
              Рассылка Push-уведомлений пользователя ваших ресурсов абсолютно
              бесплатна. Информируйте их о свежих акциях и получите армию
              постоянных клиентов
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="top--wave"></div>
    <div class="request--access">
      <div class="content--layout">
        <div class="request--access__wrapper">
          <div class="request--access__form" id="request--access__form">
            <h2>Получить доступ к пробному мобильному приложению</h2>
            <input
              class="request--access__form__input"
              type="text"
              placeholder="Имя"
              v-model="form.name"
            />
            <input
              class="request--access__form__input"
              id="request--access__form__input"
              type="text"
              placeholder="Телефон"
              v-model="form.phone"
            />
            <button
              class="request--access__form__btn"
              @click="requestAccessForm"
            >
              Оставить заявку
            </button>
          </div>
          <img
            class="request--access__image"
            src="@/assets/images/request/image.png"
            alt="Оставить заявку"
          />
        </div>
      </div>
    </div>
    <div class="bottom--wave"></div>
    <div class="green--layout">
      <div class="content--layout">
        <div class="conditions">
          <h2>Наши условия и цены</h2>
          <div class="conditions__blocks">
            <div class="conditions__block">
              <img
                class="conditions__block__image"
                src="@/assets/images/conditions/discount.png"
                alt="Комиссия 3% с каждого заказа"
                width="101"
                height="101"
              />
              <h3>Пакет + комиссия 3% <br />с каждого заказа</h3>
              <p class="conditions__block__content">
                Вы платите только за результат. Приложение работает – все
                получают выгоду.
              </p>
            </div>
            <div class="conditions__block">
              <img
                class="conditions__block__image"
                src="@/assets/images/conditions/wallet.png"
                alt="Полный выкуп за 15000 BYN"
                width="92"
                height="101"
              />
              <h3>
                Полный выкуп за <br />
                15000 BYN
              </h3>
              <p class="conditions__block__content">
                В любой момент вы можете перестать платить комиссию и стать
                полноценным владельцем приложения.
              </p>
            </div>
          </div>
        </div>
        <div class="contacts">
          <h2>Контактная информация</h2>
          <div class="contacts__wrapper">
            <div>
              <p class="contacts__info">
                <img
                  class="contacts__info__icon"
                  src="@/assets/images/contacts/location.png"
                  alt="Беларусь"
                  width="29"
                  height="29"
                />г. Минск, ул. Волгоградская 86, оф. 1Н
              </p>
              <p class="contacts__info">
                <img
                  class="contacts__info__icon"
                  src="@/assets/images/contacts/phone.png"
                  alt="телефон"
                  width="30"
                  height="30"
                />
                <a href="tel:+375293532728">+375 (29) 353-27-28</a>
              </p>
              <p class="contacts__info">
                <img
                  class="contacts__info__icon"
                  src="@/assets/images/contacts/email.png"
                  alt="почта"
                  width="30"
                  height="30"
                />
                <a href="mailto:alex.kozhukhov@gmail.com"
                  >sales@gastrosoft.by</a
                >
              </p>
              <img
                class="contacts__image"
                src="@/assets/images/contacts/image.png"
                width="311"
                height="276"
              />
            </div>
            <div class="contacts__form">
              <h3 class="contacts__form__title">
                Получить доступ к пробному мобильному приложению
              </h3>
              <input
                class="contacts__form__input"
                type="text"
                placeholder="Имя"
                v-model="form.name"
              />
              <input
                class="contacts__form__input"
                id="contacts__form__input"
                type="text"
                placeholder="Телефон"
                v-model="form.phone"
              />
              <button class="contacts__form__btn" @click="ContactsForm">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="content--layout">
        <div class="footer--logo">
          <img src="@/assets/images/GastroSoft.svg" style="width: 250px" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Inputmask from "inputmask";
// import ApplicationApi from "../../api/ApplicationApi";
let request = require("request-promise");
let config = require("../config");

export default {
  data() {
    return {
      thanks_wrapper: false,
      form: {
        name: null,
        phone: null,
      },
    };
  },
  mounted() {
    let im = new Inputmask("+375(99)999-99-99");
    im.mask(document.getElementById("header--form__input"));
    im.mask(document.getElementById("request--access__form__input"));
    im.mask(document.getElementById("contacts__form__input"));
  },
  methods: {
    sendForm: async function () {
      let data = this.form;

      let options = {
        uri: `https://api.telegram.org/bot${
          config.telegram.token
        }/sendMessage?chat_id=${
          config.telegram.chatId
        }&parse_mode=html&text=${`Имя: ${data.name}, Номер телефона: ${data.phone}`}`,
        method: "POST",
      };

      await request(options)
        .then(async function (error, response) {
          console.log(response);
          return { status: 200 };
        })
        .catch(async function (error) {
          console.log(error);

          let data = JSON.parse(error.error);

          if (data.ok === false) {
            switch (data.error_code) {
              case 400:
                if (
                  data.description ===
                  "Bad Request: group chat was upgraded to a supergroup chat"
                ) {
                  await this.sendForm(config.telegram.chatId, data);
                }
                break;
            }
          }
        });
    },
    headerForm: function () {
      this.sendForm();
    },
    requestAccessForm: function () {
      this.sendForm();
    },
    ContactsForm: function () {
      this.sendForm();
    },
    showThanksWrapper: function () {
      this.thanks_wrapper = true;
      setTimeout(() => {
        this.thanks_wrapper = false;
      }, 5000);
    },
  },
};
</script>

<style scoped></style>
