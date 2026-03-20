export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ИМПЕРИЯ-А</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">Банкеты</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
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
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Забронировать зал
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
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

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР ШЕФА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/bc220711-1379-4846-a096-3deb4f17ec03/files/23a7206f-dd6b-423f-8e7e-16fc84e8ba26.jpg"
                alt="Хинкали"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Хинкали с мясом</h3>
                  <span className="price">от 80 ₽/шт</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Тесто ручной раскатки, сочная начинка из говядины и свинины с пряными травами и бульоном внутри.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Фирменное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/bc220711-1379-4846-a096-3deb4f17ec03/files/4c583591-b37e-4e93-9258-5b4e1bae1978.jpg"
                alt="Шашлык"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Шашлык из баранины</h3>
                  <span className="price">от 650 ₽/порц</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Молодой барашек, маринованный в луке и специях. Жарим на живом угле только при вас.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/bc220711-1379-4846-a096-3deb4f17ec03/files/80834bee-b5d3-4eb0-8c2c-ac7823ab914d.jpg"
                alt="Плов"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Плов из казана</h3>
                  <span className="price">от 450 ₽/порц</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Настоящий узбекский плов с бараниной, нутом и изюмом. Готовится в большом казане по старинному рецепту.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">БАНКЕТ ДО 100 ЧЕЛОВЕК.</h2>
            <p className="vibe-text">
              Свадьбы, юбилеи, корпоративы — мы берём на себя всё. Просторный зал с живой музыкой, горячие блюда прямо с мангала и настоящая кавказская щедрость. Вам остаётся только радоваться вместе с гостями.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Узнать об условиях
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @KAVKAZ.HOUSE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=400&q=80"
                alt="Кавказская кухня"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80"
                alt="Шашлык на мангале"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                alt="Кавказские блюда"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
                alt="Банкетный зал"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ИМПЕРИЯ-А</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Кафе и банкетный зал кавказской кухни «Империя-А». Вместимость до 100 человек. Настоящие рецепты, настоящее гостеприимство.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Банкеты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
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
            <li>+7 (000) 000-00-00</li>
            <li>info@kavkaz-house.ru</li>
            <li style={{ marginTop: "10px" }}>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}