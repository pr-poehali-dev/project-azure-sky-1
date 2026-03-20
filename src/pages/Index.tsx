export default function Index() {
  const menuItems = [
    {
      category: "Шашлыки",
      items: [
        { name: "Шашлык свиной", price: "550 ₽/порц", desc: "Свинина на живом угле, маринованная в луке и специях. Сочно, ароматно, по-кавказски." },
        { name: "Шашлык из баранины", price: "700 ₽/порц", desc: "Молодой барашек, маринованный в луке и специях. Жарим на живом угле только при вас." },
      ],
    },
    {
      category: "Гарниры на мангале",
      items: [
        { name: "Картошка на мангале", price: "200 ₽/порц", desc: "Картофель целиком на углях — хрустящая корочка, нежная серединка." },
        { name: "Грибы на мангале", price: "250 ₽/порц", desc: "Шампиньоны на решётке с маслом и зеленью. Идеальный гарнир к шашлыку." },
      ],
    },
    {
      category: "Хинкали",
      items: [
        { name: "Хинкали с мясом", price: "80 ₽/шт", desc: "Тесто ручной раскатки, сочная начинка из говядины и свинины с пряными травами." },
      ],
    },
    {
      category: "Горячее",
      items: [
        { name: "Плов из казана", price: "от 450 ₽/порц", desc: "Настоящий плов с бараниной, нутом и изюмом. Готовится в большом казане по старинному рецепту." },
      ],
    },
  ];

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ИМПЕРИЯ-А</div>
        <nav>
          <a href="#menu">Меню</a>
          <a href="#fullmenu">Все блюда</a>
          <a href="#banket">Банкеты</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a href="tel:89092322777">
          <button className="btn-cta">Позвонить</button>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ИМ<span>ПЕРИЯ</span>
              <br />
              ВКУСА
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Кафе и банкетный зал кавказской кухни «Империя-А». Вместимость до 100 гостей. Хинкали, шашлык и плов — по рецептам, которые не меняются поколениями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="tel:89092322777">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Позвонить нам
                </button>
              </a>
              <a href="#fullmenu">
                <button className="btn-cta" style={{ background: "white" }}>
                  Смотреть меню
                </button>
              </a>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/bc220711-1379-4846-a096-3deb4f17ec03/files/d56f6583-43d1-412a-b467-5886e6704c0f.jpg)` }}>
            <div className="sticker">
              ДО 100
              <br />
              ГОСТЕЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #КАВКАЗ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ОГОНЬ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ХИНКАЛИ РУЧНОЙ ЛЕПКИ * ШАШЛЫК НА МАНГАЛЕ * БАНКЕТЫ ДО 100 ЧЕЛОВЕК * НАСТОЯЩИЙ КАВКАЗ * ПЛОВ ИЗ КАЗАНА * ХИНКАЛИ РУЧНОЙ ЛЕПКИ * ШАШЛЫК НА МАНГАЛЕ * БАНКЕТЫ ДО 100 ЧЕЛОВЕК * НАСТОЯЩИЙ КАВКАЗ * ПЛОВ ИЗ КАЗАНА
          </div>
        </div>

        {/* Хиты раздел */}
        <section id="menu" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР ШЕФА</h2>
            <a
              href="#fullmenu"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню ↓
            </a>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Хит</span>
              <img
                src="https://cdn.poehali.dev/projects/bc220711-1379-4846-a096-3deb4f17ec03/files/cee73688-e8f8-4d9f-aa66-3825113a6612.jpg"
                alt="Шашлык свиной"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Шашлык свиной</h3>
                  <span className="price">550 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Свинина на живом угле, маринованная в луке и специях. Сочно, ароматно, по-кавказски.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Фирменное</span>
              <img
                src="https://cdn.poehali.dev/projects/bc220711-1379-4846-a096-3deb4f17ec03/files/4c583591-b37e-4e93-9258-5b4e1bae1978.jpg"
                alt="Шашлык из баранины"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Шашлык из баранины</h3>
                  <span className="price">700 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Молодой барашек, маринованный в луке и специях. Жарим на живом угле только при вас.</p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Популярное</span>
              <img
                src="https://cdn.poehali.dev/projects/bc220711-1379-4846-a096-3deb4f17ec03/files/23a7206f-dd6b-423f-8e7e-16fc84e8ba26.jpg"
                alt="Хинкали"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Хинкали с мясом</h3>
                  <span className="price">80 ₽/шт</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Тесто ручной раскатки, сочная начинка из говядины и свинины с пряными травами.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Полное меню */}
        <section id="fullmenu" style={{ borderTop: "var(--border)", borderBottom: "var(--border)", padding: "60px 20px", background: "white" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 className="section-title" style={{ textAlign: "center", marginBottom: "60px" }}>ПОЛНОЕ МЕНЮ</h2>
            {menuItems.map((cat) => (
              <div key={cat.category} style={{ marginBottom: "48px" }}>
                <h3 style={{
                  fontFamily: "Unbounded, sans-serif",
                  fontSize: "20px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  borderBottom: "var(--border)",
                  paddingBottom: "12px",
                  marginBottom: "24px",
                  color: "var(--primary)"
                }}>
                  {cat.category}
                </h3>
                {cat.items.map((item) => (
                  <div key={item.name} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "16px 0",
                    borderBottom: "1px dashed #ddd",
                    gap: "20px"
                  }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "16px", marginBottom: "4px" }}>{item.name}</div>
                      <div style={{ fontSize: "14px", color: "#666" }}>{item.desc}</div>
                    </div>
                    <div style={{
                      fontFamily: "Unbounded, sans-serif",
                      fontWeight: 800,
                      fontSize: "16px",
                      color: "var(--dark)",
                      whiteSpace: "nowrap",
                      background: "var(--accent)",
                      border: "var(--border)",
                      padding: "6px 14px",
                      boxShadow: "3px 3px 0 var(--dark)"
                    }}>
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <a href="tel:89092322777">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white", fontSize: "16px", padding: "16px 40px" }}>
                  Позвонить и заказать: 8 909 232-27-77
                </button>
              </a>
            </div>
          </div>
        </section>

        <section id="banket" className="retro-vibe">
          <div>
            <h2 className="vibe-title">БАНКЕТ ДО 100 ЧЕЛОВЕК.</h2>
            <p className="vibe-text">
              Свадьбы, юбилеи, корпоративы — мы берём на себя всё. Просторный зал с живой музыкой, горячие блюда прямо с мангала и настоящая кавказская щедрость. Вам остаётся только радоваться вместе с гостями.
            </p>
            <a href="tel:89092322777">
              <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
                Позвонить по банкету
              </button>
            </a>
          </div>
          <div className="vibe-img" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/bc220711-1379-4846-a096-3deb4f17ec03/bucket/b296e23b-3874-454c-9f25-2a66b4a1c343.jpeg)`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @IMPERIYA_A
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=400&q=80" alt="Кавказская кухня" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" alt="Шашлык на мангале" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/bc220711-1379-4846-a096-3deb4f17ec03/files/d21d3192-1dea-4fc5-a473-39d7c9dad474.jpg" alt="Гарниры на мангале" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80" alt="Банкетный зал" />
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts">
        <div>
          <div className="footer-logo">ИМПЕРИЯ-А</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Кафе и банкетный зал кавказской кухни «Империя-А». Вместимость до 100 человек. Настоящие рецепты, настоящее гостеприимство.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#menu" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#fullmenu" style={{ color: "inherit", textDecoration: "none" }}>Все блюда</a></li>
            <li><a href="#banket" style={{ color: "inherit", textDecoration: "none" }}>Банкеты</a></li>
            <li><a href="#contacts" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 12:00–23:00</li>
            <li>Сб–Вс: 11:00–00:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 700 }}>
              Банкеты — по договорённости
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="tel:89092322777" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 700 }}>
                8 909 232-27-77
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}