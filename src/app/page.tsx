"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const modules = [
  {
    number: "01",
    title: "Заказы и клиники",
    text: "Единый реестр заказов, карточки пациентов, сроки, приоритеты и вся история взаимодействия с клиникой.",
    accent: "violet",
  },
  {
    number: "02",
    title: "Производство",
    text: "Маршрут работы по этапам: моделирование, изготовление, контроль качества и готовность к выдаче.",
    accent: "blue",
  },
  {
    number: "03",
    title: "Команда",
    text: "Персональные рабочие зоны, календарь, загрузка сотрудников и понятная ответственность за каждую задачу.",
    accent: "cyan",
  },
  {
    number: "04",
    title: "Склад и закупки",
    text: "Остатки, нормы расхода, инвентаризации, поставщики и предупреждения о критичных материалах.",
    accent: "amber",
  },
  {
    number: "05",
    title: "Финансы и документы",
    text: "Оплаты, начисления, сверка, акты выполненных работ и финансовый контур без ручного переноса данных.",
    accent: "emerald",
  },
  {
    number: "06",
    title: "Аналитика",
    text: "Сроки, загрузка производства, структура заказов и ключевые показатели лаборатории — в одном экране.",
    accent: "rose",
  },
];

const workflow = [
  {
    number: "01",
    title: "Заказ принят",
    text: "Клиника, пациент, конструкция, материалы и срок собраны в одной карточке.",
  },
  {
    number: "02",
    title: "Работа распределена",
    text: "Система формирует задачи и показывает загрузку нужных специалистов.",
  },
  {
    number: "03",
    title: "Этапы под контролем",
    text: "Диспетчер видит движение заказа, задержки и ответственных в реальном времени.",
  },
  {
    number: "04",
    title: "Результат зафиксирован",
    text: "Готовность, документы, оплата и история заказа остаются в едином контуре.",
  },
];

const roles = [
  {
    role: "Руководитель",
    label: "Вся лаборатория",
    text: "Показатели, узкие места, финансы и решения — без ручных отчётов.",
  },
  {
    role: "Диспетчер",
    label: "Каждый заказ",
    text: "Сроки, приоритеты и статусы производства в одном рабочем экране.",
  },
  {
    role: "Техник",
    label: "Только важное",
    text: "Персональный список задач, календарь и понятные требования к работе.",
  },
  {
    role: "Финансист",
    label: "Цифры сходятся",
    text: "Оплаты, начисления, документы и сверка связаны с заказами.",
  },
];

const productScreens = [
  {
    src: "/screens/crm-warehouse.png",
    number: "04",
    title: "Склад",
    text: "Остатки, зона риска и история движений материалов",
  },
  {
    src: "/screens/crm-clinics.png",
    number: "05",
    title: "Клиники",
    text: "Реестр партнёров и статистика заказов",
  },
  {
    src: "/screens/crm-laboratory.png",
    number: "06",
    title: "Лаборатория",
    text: "Команда, справочники и готовность к работе",
  },
  {
    src: "/screens/crm-employees.png",
    number: "07",
    title: "Сотрудники",
    text: "Загрузка, результативность и соблюдение сроков",
  },
  {
    src: "/screens/crm-work-types.png",
    number: "08",
    title: "Типы работ",
    text: "Каталог услуг и производственных маршрутов",
  },
  {
    src: "/screens/crm-process-builder.png",
    number: "09",
    title: "Конструктор процессов",
    text: "Настройка этапов для каждого типа работы",
  },
  {
    src: "/screens/crm-finance-report.png",
    number: "10",
    title: "Финансовый отчёт",
    text: "Выручка, расходы, прибыль и маржинальность",
  },
  {
    src: "/screens/crm-finance-reconciliation.png",
    number: "11",
    title: "Сверка бухгалтерии",
    text: "Автоматический поиск финансовых расхождений",
  },
  {
    src: "/screens/crm-payroll.png",
    number: "12",
    title: "Зарплаты",
    text: "Расчёт по сотрудникам, периодам и зарплатным планам",
  },
  {
    src: "/screens/crm-invoices.png",
    number: "13",
    title: "Счета и оплаты",
    text: "Выставление счетов и контроль задолженности",
  },
  {
    src: "/screens/crm-completed-work-act.png",
    number: "14",
    title: "Документы",
    text: "Акты выполненных работ с экспортом в Excel и PDF",
  },
];

const featuredScreens = [
  {
    src: "/screens/crm-dashboard.png",
    number: "01",
    title: "Производственный поток",
    text: "Все этапы и задачи лаборатории на одном экране",
  },
  {
    src: "/screens/crm-analytics.png",
    number: "02",
    title: "Аналитика",
    text: "Нагрузка, сроки, материалы и оплаты",
  },
  {
    src: "/screens/crm-workspace.png",
    number: "03",
    title: "Рабочая зона",
    text: "Личный календарь и задачи по этапам",
  },
];

const lightboxScreens = [
  {
    src: "/screens/crm-orders.png",
    number: "00",
    title: "Реестр заказов",
    text: "Заказы, статусы, стоимость и производственные показатели",
  },
  ...featuredScreens,
  ...productScreens,
];

export default function Home() {
  const [activeScreen, setActiveScreen] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState("");

  const openScreen = (src: string) => {
    const screenIndex = lightboxScreens.findIndex((screen) => screen.src === src);
    if (screenIndex >= 0) setActiveScreen(screenIndex);
  };

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      "Здравствуйте! Хочу узнать подробнее о TeethTech CRM.",
      `Имя: ${String(data.get("name") ?? "")}`,
      `Телефон: ${String(data.get("phone") ?? "")}`,
      `Лаборатория / клиника: ${String(data.get("company") ?? "Не указано")}`,
      `Комментарий: ${String(data.get("message") ?? "Не указан")}`,
    ].join("\n");

    window.open(
      `https://wa.me/77054703104?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setFormStatus("Заявка подготовлена — отправьте сообщение в открывшемся WhatsApp.");
    form.reset();
  };

  useEffect(() => {
    if (activeScreen === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveScreen(null);
      if (event.key === "ArrowLeft") {
        setActiveScreen((current) =>
          current === null
            ? null
            : (current - 1 + lightboxScreens.length) % lightboxScreens.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveScreen((current) =>
          current === null ? null : (current + 1) % lightboxScreens.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeScreen]);

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="TeethTech CRM — на главную">
            <Image
              src="/teethtech-logo.svg"
              width={156}
              height={48}
              alt="TeethTech CRM"
              priority
            />
          </a>
          <nav className="main-nav" aria-label="Основная навигация">
            <a href="#interface">Интерфейс</a>
            <a href="#modules">Возможности</a>
            <a href="#workflow">Как работает</a>
            <a href="#roles">Для команды</a>
            <a href="#contact">Контакты</a>
          </nav>
          <a className="nav-cta" href="#contact">
            Оставить заявку
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              CRM для зуботехнических лабораторий
            </div>
            <h1>
              Лаборатория работает
              <span> как система.</span>
            </h1>
            <p className="hero-lead">
              TeethTech CRM связывает клиники, заказы, производство, команду,
              склад и финансы в одном цифровом контуре.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#interface">
                Посмотреть интерфейс
                <span aria-hidden="true">→</span>
              </a>
              <a className="button button-secondary" href="#workflow">
                Как проходит заказ
              </a>
            </div>
            <div className="hero-proof" aria-label="Ключевые преимущества">
              <div>
                <strong>1 контур</strong>
                <span>вместо чатов и таблиц</span>
              </div>
              <div>
                <strong>3 языка</strong>
                <span>RU · KZ · EN</span>
              </div>
              <div>
                <strong>По ролям</strong>
                <span>каждому свой экран</span>
              </div>
            </div>
          </div>

          <div
            className="product-stage product-stage-real"
            aria-label="Реальный интерфейс TeethTech CRM"
          >
            <div className="floating-note floating-note-top">
              <span className="status-pulse" />
              Реальный интерфейс продукта
            </div>
            <div className="product-screenshot-frame">
              <div className="product-shot-bar">
                <div className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <span>TeethTech CRM · Реестр заказов</span>
                <b>RU</b>
              </div>
              <button
                className="screenshot-trigger hero-shot-trigger"
                type="button"
                onClick={() => openScreen("/screens/crm-orders.png")}
                aria-label="Увеличить скриншот реестра заказов"
              >
                <Image
                  className="hero-product-shot"
                  src="/screens/crm-orders.png"
                  width={1920}
                  height={900}
                  alt="Рабочий реестр заказов в TeethTech CRM"
                  priority
                />
                <span className="zoom-hint" aria-hidden="true">Увеличить ↗</span>
              </button>
            </div>
            <div className="floating-note floating-note-bottom actual-note">
              <strong>RU · KZ · EN</strong>
              <span>интерфейс по ролям</span>
            </div>
          </div>
        </div>
        <div className="container signal-strip" aria-label="Модули платформы">
          <span>Заказы</span>
          <i />
          <span>Производство</span>
          <i />
          <span>Команда</span>
          <i />
          <span>Склад</span>
          <i />
          <span>Финансы</span>
          <i />
          <span>Аналитика</span>
        </div>
      </section>

      <section className="platform section" id="platform">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="section-label">Один рабочий контур</span>
              <h2>Весь путь заказа. Без потерь между этапами.</h2>
            </div>
            <p>
              Каждый участник видит нужную часть процесса, а руководитель —
              лабораторию целиком. Данные появляются один раз и работают на
              всех этапах.
            </p>
          </div>

          <div className="system-map">
            <div className="system-copy">
              <span className="system-index">01 / Система</span>
              <h3>От входящего заказа до финансового результата</h3>
              <p>
                TeethTech CRM превращает разрозненные действия в единый
                управляемый процесс: со сроками, ответственными, материалами и
                прозрачным результатом.
              </p>
              <ul>
                <li>
                  <span>01</span>
                  Единая карточка заказа
                </li>
                <li>
                  <span>02</span>
                  Живые статусы производства
                </li>
                <li>
                  <span>03</span>
                  Связанные склад и финансы
                </li>
              </ul>
            </div>
            <div className="system-visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="system-core">
                <span>TeethTech</span>
                <strong>CRM</strong>
                <small>единый контур</small>
              </div>
              <div className="system-node node-one">
                <b>01</b>
                <span>Клиника</span>
              </div>
              <div className="system-node node-two">
                <b>02</b>
                <span>Заказ</span>
              </div>
              <div className="system-node node-three">
                <b>03</b>
                <span>Команда</span>
              </div>
              <div className="system-node node-four">
                <b>04</b>
                <span>Результат</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modules section" id="modules">
        <div className="container">
          <div className="section-heading centered-heading">
            <span className="section-label">Возможности платформы</span>
            <h2>Всё, что держит лабораторию в движении</h2>
            <p>
              Модули работают не отдельно, а передают друг другу контекст
              заказа — от первого обращения до закрывающего документа.
            </p>
          </div>
          <div className="module-grid">
            {modules.map((item) => (
              <article className={`module-card accent-${item.accent}`} key={item.number}>
                <div className="module-top">
                  <span>{item.number}</span>
                  <i />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="module-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="interface-showcase section" id="interface">
        <div className="container">
          <div className="section-heading split-heading interface-heading">
            <div>
              <span className="section-label light-label">Реальные экраны CRM</span>
              <h2>Не концепт. Интерфейс действующего проекта.</h2>
            </div>
            <p>
              На скриншотах — текущая версия TeethTech CRM: производственный
              дэшборд, аналитика и персональная зона сотрудника.
            </p>
          </div>

          <div className="showcase-grid">
            <figure className="showcase-card showcase-card-wide">
              <button
                className="screenshot-trigger"
                type="button"
                onClick={() => openScreen("/screens/crm-dashboard.png")}
                aria-label="Увеличить производственный дэшборд"
              >
                <Image
                  src="/screens/crm-dashboard.png"
                  width={1920}
                  height={900}
                  alt="Производственный дэшборд TeethTech CRM"
                />
                <span className="zoom-hint" aria-hidden="true">Увеличить ↗</span>
              </button>
              <figcaption>
                <span>01 · Производственный поток</span>
                <strong>Все этапы и задачи лаборатории на одном экране</strong>
              </figcaption>
            </figure>

            <div className="showcase-side">
              <figure className="showcase-card">
                <button
                  className="screenshot-trigger"
                  type="button"
                  onClick={() => openScreen("/screens/crm-analytics.png")}
                  aria-label="Увеличить экран аналитики"
                >
                  <Image
                    src="/screens/crm-analytics.png"
                    width={1920}
                    height={900}
                    alt="Аналитика производственной нагрузки TeethTech CRM"
                  />
                  <span className="zoom-hint" aria-hidden="true">Увеличить ↗</span>
                </button>
                <figcaption>
                  <span>02 · Аналитика</span>
                  <strong>Нагрузка, сроки, материалы и оплаты</strong>
                </figcaption>
              </figure>

              <figure className="showcase-card">
                <button
                  className="screenshot-trigger"
                  type="button"
                  onClick={() => openScreen("/screens/crm-workspace.png")}
                  aria-label="Увеличить экран рабочей зоны"
                >
                  <Image
                    src="/screens/crm-workspace.png"
                    width={1920}
                    height={913}
                    alt="Персональная рабочая зона сотрудника TeethTech CRM"
                  />
                  <span className="zoom-hint" aria-hidden="true">Увеличить ↗</span>
                </button>
                <figcaption>
                  <span>03 · Рабочая зона</span>
                  <strong>Личный календарь и задачи по этапам</strong>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="screen-library-heading">
            <span>Ещё 11 рабочих разделов</span>
            <p>От склада и справочников до бухгалтерии и документов</p>
          </div>
          <div className="screen-library">
            {productScreens.map((screen) => (
              <figure className="screen-card" key={screen.src}>
                <button
                  className="screenshot-trigger"
                  type="button"
                  onClick={() => openScreen(screen.src)}
                  aria-label={`Увеличить экран «${screen.title}»`}
                >
                  <Image
                    src={screen.src}
                    width={1920}
                    height={900}
                    alt={`${screen.title} в TeethTech CRM`}
                  />
                  <span className="zoom-hint" aria-hidden="true">Увеличить ↗</span>
                </button>
                <figcaption>
                  <span>{screen.number}</span>
                  <div>
                    <strong>{screen.title}</strong>
                    <p>{screen.text}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="showcase-disclaimer">
            Данные на экранах демонстрационные и показывают реальные сценарии
            работы системы.
          </p>
        </div>
      </section>

      <section className="workflow section" id="workflow">
        <div className="container workflow-grid">
          <div className="workflow-intro">
            <span className="section-label light-label">Сквозной процесс</span>
            <h2>Заказ движется. Команда знает, что делать дальше.</h2>
            <p>
              Никаких потерянных сообщений и ручного уточнения статусов.
              Следующий шаг виден до того, как он станет проблемой.
            </p>
            <div className="workflow-summary">
              <span>Клиника</span>
              <i>→</i>
              <span>Лаборатория</span>
              <i>→</i>
              <span>Результат</span>
            </div>
          </div>
          <div className="workflow-list">
            {workflow.map((item) => (
              <article className="workflow-item" key={item.number}>
                <span className="workflow-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="roles section" id="roles">
        <div className="container">
          <div className="section-heading split-heading roles-heading">
            <div>
              <span className="section-label">Работа по ролям</span>
              <h2>Одна система. Свой фокус для каждого.</h2>
            </div>
            <p>
              Интерфейс не перегружает лишним: команда получает понятную
              рабочую зону, а управление — общую картину.
            </p>
          </div>
          <div className="roles-list">
            {roles.map((item, index) => (
              <article className="role-row" key={item.role}>
                <span className="role-index">0{index + 1}</span>
                <h3>{item.role}</h3>
                <strong>{item.label}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <span className="section-label light-label">TeethTech CRM</span>
            <h2>Меньше ручного контроля. Больше управляемой работы.</h2>
          </div>
          <div className="final-cta-action">
            <p>
              Соберите заказы, производство, команду и экономику лаборатории в
              одном понятном пространстве.
            </p>
            <a className="button button-white" href="#contact">
              Обсудить подключение
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="section-label">Связаться с TeethTech</span>
            <h2>Покажем CRM на ваших процессах</h2>
            <p>
              Оставьте контакты — обсудим задачи лаборатории, покажем рабочие
              разделы и ответим на вопросы по подключению.
            </p>
          </div>

          <form className="lead-form" onSubmit={handleLeadSubmit}>
            <div className="lead-form-heading">
              <span>Заявка на демонстрацию</span>
              <strong>Расскажите, как с вами связаться</strong>
            </div>

            <label>
              <span>Ваше имя *</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Как к вам обращаться"
                required
              />
            </label>

            <label>
              <span>Телефон *</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+7 ___ ___ __ __"
                required
              />
            </label>

            <label>
              <span>Лаборатория или клиника</span>
              <input
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Название компании"
              />
            </label>

            <label>
              <span>Что хотите улучшить?</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Например: контроль заказов, производство, склад или финансы"
              />
            </label>

            <button className="lead-submit" type="submit">
              Отправить заявку в WhatsApp
              <span aria-hidden="true">→</span>
            </button>

            <p className="lead-form-note">
              Нажимая кнопку, вы откроете WhatsApp с готовым сообщением.
            </p>
            {formStatus && (
              <p className="lead-form-status" role="status">
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#top" aria-label="TeethTech CRM">
            <Image
              src="/teethtech-logo.svg"
              width={148}
              height={46}
              alt="TeethTech CRM"
            />
          </a>
          <p>Цифровая система для зуботехнической лаборатории.</p>
          <div className="footer-links">
            <a href="#interface">Интерфейс</a>
            <a href="#modules">Возможности</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      </footer>

      {activeScreen !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Просмотр экрана «${lightboxScreens[activeScreen].title}»`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveScreen(null);
          }}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setActiveScreen(null)}
            aria-label="Закрыть увеличенный скриншот"
          >
            ×
          </button>

          <button
            className="lightbox-arrow lightbox-arrow-left"
            type="button"
            onClick={() =>
              setActiveScreen(
                (activeScreen - 1 + lightboxScreens.length) %
                  lightboxScreens.length,
              )
            }
            aria-label="Предыдущий скриншот"
          >
            ←
          </button>

          <div className="lightbox-content">
            <Image
              src={lightboxScreens[activeScreen].src}
              width={1920}
              height={900}
              alt={`${lightboxScreens[activeScreen].title} — увеличенный экран TeethTech CRM`}
              priority
            />
            <div className="lightbox-caption">
              <div>
                <span>{lightboxScreens[activeScreen].number}</span>
                <strong>{lightboxScreens[activeScreen].title}</strong>
              </div>
              <p>{lightboxScreens[activeScreen].text}</p>
              <small>
                {activeScreen + 1} / {lightboxScreens.length}
              </small>
            </div>
          </div>

          <button
            className="lightbox-arrow lightbox-arrow-right"
            type="button"
            onClick={() =>
              setActiveScreen((activeScreen + 1) % lightboxScreens.length)
            }
            aria-label="Следующий скриншот"
          >
            →
          </button>
        </div>
      )}
    </main>
  );
}
