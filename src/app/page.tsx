import Image from "next/image";

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

const orderColumns = [
  {
    title: "Новые",
    count: "8",
    items: [
      { id: "TT-1248", name: "Коронка ZrO₂", meta: "Dental City · 14:30" },
      { id: "TT-1247", name: "Виниры · 6 ед.", meta: "Nova Dent · завтра" },
    ],
  },
  {
    title: "В работе",
    count: "14",
    items: [
      { id: "TT-1241", name: "Мост · 3 ед.", meta: "CAD/CAM · 72%" },
      { id: "TT-1239", name: "Протез", meta: "Полимеризация · 54%" },
    ],
  },
  {
    title: "Контроль",
    count: "5",
    items: [
      { id: "TT-1234", name: "Коронка E-max", meta: "ОТК · сегодня" },
      { id: "TT-1228", name: "Имплант", meta: "Финиш · 16:00" },
    ],
  },
];

export default function Home() {
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
            <a href="#platform">Платформа</a>
            <a href="#modules">Возможности</a>
            <a href="#workflow">Как работает</a>
            <a href="#roles">Для команды</a>
          </nav>
          <a className="nav-cta" href="#modules">
            Что внутри
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
              <a className="button button-primary" href="#platform">
                Посмотреть платформу
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

          <div className="product-stage" aria-label="Интерфейс TeethTech CRM">
            <div className="floating-note floating-note-top">
              <span className="status-pulse" />
              Производство онлайн
            </div>
            <div className="app-window">
              <div className="window-bar">
                <div className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="window-address">app.teethtech.crm</div>
                <div className="window-user">AZ</div>
              </div>
              <div className="app-body">
                <aside className="app-sidebar" aria-label="Навигация приложения">
                  <div className="app-mark">T</div>
                  <div className="side-item active">01</div>
                  <div className="side-item">02</div>
                  <div className="side-item">03</div>
                  <div className="side-item">04</div>
                  <div className="side-item">05</div>
                </aside>
                <div className="app-content">
                  <div className="app-heading">
                    <div>
                      <span className="app-kicker">Главный экран</span>
                      <h2>Заказы</h2>
                    </div>
                    <div className="app-heading-actions">
                      <span>30 июля</span>
                      <b>+ Новый заказ</b>
                    </div>
                  </div>
                  <div className="metrics-row">
                    <div className="metric-card">
                      <span>В работе</span>
                      <strong>27</strong>
                      <small className="positive">+4 сегодня</small>
                    </div>
                    <div className="metric-card">
                      <span>Готово вовремя</span>
                      <strong>94%</strong>
                      <small>за 30 дней</small>
                    </div>
                    <div className="metric-card metric-chart">
                      <span>Загрузка</span>
                      <div className="mini-bars" aria-hidden="true">
                        <i style={{ height: "35%" }} />
                        <i style={{ height: "55%" }} />
                        <i style={{ height: "45%" }} />
                        <i style={{ height: "76%" }} />
                        <i style={{ height: "64%" }} />
                        <i style={{ height: "88%" }} />
                      </div>
                      <small>стабильно</small>
                    </div>
                  </div>
                  <div className="kanban">
                    {orderColumns.map((column, columnIndex) => (
                      <div className="kanban-column" key={column.title}>
                        <div className="kanban-title">
                          <span>{column.title}</span>
                          <b>{column.count}</b>
                        </div>
                        {column.items.map((item, itemIndex) => (
                          <div className="order-card" key={item.id}>
                            <div className="order-topline">
                              <span>{item.id}</span>
                              <i className={`priority priority-${columnIndex + itemIndex}`} />
                            </div>
                            <strong>{item.name}</strong>
                            <small>{item.meta}</small>
                            <div className="order-progress">
                              <i
                                style={{
                                  width: `${38 + columnIndex * 24 + itemIndex * 8}%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-note floating-note-bottom">
              <strong>94%</strong>
              <span>заказов в срок</span>
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
            <a className="button button-white" href="#modules">
              Посмотреть модули
              <span aria-hidden="true">↑</span>
            </a>
          </div>
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
            <a href="#platform">Платформа</a>
            <a href="#modules">Возможности</a>
            <a href="#workflow">Процесс</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
