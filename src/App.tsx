import philrozenthalworldFeature from "./images/philrozenthalworld-feature.png";
import nitFeature from "./images/nit.png";
import echoboomerFeature from "./images/echoboomer-feature.jpeg";
import gelatoCounter from "./images/artisan-gelato-lisbon.jpeg";
import pistachioGelato from "./images/pistachio-gelato-chiado.jpeg";
import interiorPhoto from "./images/aroma-interior-gelato.jpeg";
import coffeetechnology from "./images/best-coffee-technology-lisbon.jpeg";
import aromainteriorcones from "./images/aroma-interior-cones.jpeg";
import pasteldenata from "./images/pastel-de-nata-chiado.jpeg";
import cakepops from "./images/cakepops-lisbon.jpeg";
import coffeePhoto from "./images/specialty-coffee-lisbon.jpeg";
export default function App() {
  const colors = {
    bg: "#f8f4f2",
    bgAlt: "#f3d9de",
    text: "#241e1f",
    textSoft: "#5b4c4f",
    gold: "#c8a36a",
  };
  const fadeSection = {
    opacity: 1,
    transform: "translateY(0)",
    transition: "all 0.8s ease",
  };
  return (
    <div
      style={{
        background: colors.bg,
        minHeight: "100vh",
        color: colors.text,
        fontFamily: "Georgia, serif",
      }}
    >
      <style>
  {`
    html {
      scroll-behavior: smooth;
    }

    @media (max-width: 768px) {

      .grid-3,
      .grid-4,
      .grid-2 {
        grid-template-columns: 1fr !important;
      }

      .hero-title {
        font-size: 46px !important;
      }

      .section-padding {
        padding: 70px 24px !important;
      }

      .floating-cta {
        display: none !important;
      }

      .mobile-directions {
        display: block !important;
      }
    }
  `}
</style>
      {/* NAVBAR */}
<nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 100,
    background: "rgba(248,244,242,0.92)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #ead8dc",
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "18px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div
      style={{
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: 600,
      }}
    >
      aROMA
    </div>

    <div
      style={{
        display: "flex",
        gap: 30,
        fontSize: 14,
        letterSpacing: 1,
      }}
    >
      <a href="#menu" style={{ color: colors.text, textDecoration: "none" }}>
        MENU
      </a>

      <a href="#visit" style={{ color: colors.text, textDecoration: "none" }}>
        VISIT
      </a>

      <a href="#reviews" style={{ color: colors.text, textDecoration: "none" }}>
        REVIEWS
      </a>
    </div>
  </div>
</nav>
      {/* HERO */}
      <section
        style={{
          height: "90vh",
          backgroundImage:
          `linear-gradient(rgba(36,30,31,0.65), rgba(36,30,31,0.82)), url(${interiorPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: 20,
        }}
      >
        <div>
          <div
            style={{
              letterSpacing: 3,
              fontSize: 12,
              marginBottom: 20,
            }}
          >
            aROMA GELATO EXPERIENCE • LISBON
          </div>
          <div
  style={{
    width: 80,
    height: 2,
    background: colors.gold,
    margin: "0 auto 30px auto",
  }}
/>
          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 84px)",
              fontWeight: 300,
              marginBottom: 20,
            }}
          >
            Best Artisan Gelato in Lisbon
          </h1>

          <p
  style={{
    fontSize: 18,
    maxWidth: 620,
    lineHeight: 1.8,
    margin: "0 auto",
    textAlign: "center",
  }}
>
            Handmade Italian gelato • Specialty coffee • Cakes & pastries •
            Dolceria experience in Chiado
          </p>

          <a
  href="#menu"
  style={{
    display: "inline-block",
    marginTop: 30,
    background: colors.gold,
    border: "none",
    padding: "14px 28px",
    borderRadius: 999,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: colors.text,
    textDecoration: "none",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
  }}
>
  Explore Menu
</a>
        </div>
      </section>

      {/* CREAM SECTION */}
      <section
        style={{
          background: colors.bg,
          padding: "80px 40px",
          ...fadeSection,
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: 36,
              marginBottom: 20,
              fontWeight: 300,
            }}
          >
            Boutique Gelato Experience
          </h2>

          <p
            style={{
              color: colors.textSoft,
              lineHeight: 1.8,
              fontSize: 18,
            }}
          >
            aROMA Gelato Experience blends artisan Italian craftsmanship,
            specialty coffee culture and refined dolceria traditions into a
            luxury Lisbon dessert destination.
          </p>
        </div>
      </section>
      {/* FEATURED VIDEO */}
      <video
  autoPlay
  muted
  playsInline
  controls
  onEnded={(e) => {
    const video = e.currentTarget;

    if (!video.dataset.playedOnce) {
      video.dataset.playedOnce = "true";
      video.play();
    }
  }}
  style={{
    width: "100%",
    maxWidth: "900px",
    height: "auto",
    maxHeight: "70vh",
    objectFit: "cover",
    borderRadius: 28,
    boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
    display: "block",
    margin: "0 auto",
  }}
>
  <source
    src="https://www.dropbox.com/scl/fi/v9hvuvofpt13t437cdqgm/aroma-gelato-lisbon-reel.MP4?rlkey=wya3vdsja4hk1gmn8eababjso&st=pc9xfo8f&raw=1"
    type="video/mp4"
  />
</video>  
<section
  id="menu"
  style={{
    background: colors.bg,
    padding: "100px 40px",
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        fontSize: 42,
        fontWeight: 300,
        marginBottom: 50,
        textAlign: "center",
      }}
    >
      Gelato • Coffee • Dolceria
    </h2>

    <div
  className="grid-3"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  }}
>
      {[
        {
          title: "Gelato",
          image: aromainteriorcones,
          items: [
            "Madagascar Vanilla",
            "Sicilian Pistachio",
            "Tiramisu",
            "Rum Raisin",
            "36 flavours to choose from",
          ],
        },
        {
          title: "Specialty Coffee",
          image: coffeetechnology,
          items: [
            "Espresso",
            "Flat White",
            "Affogato",
            "Cold Brew",
          ],
        },
        {
          title: "Dolceria",
          image: cakepops,
          items: [
            "Tiramisu",
            "Cheesecake",
            "Lava Cake",
            "6 flavours of pie",
          ],
        },
      ].map((section) => (
        <div
          key={section.title}
          style={{
            backgroundImage:
  `linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.88)), url(${section.image})`,
backgroundSize: "cover",
backgroundPosition: "center",
            borderRadius: 24,
            padding: 40,
            border: "1px solid #ead8dc",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              marginBottom: 20,
              fontSize: 28,
              fontWeight: 400,
            }}
          >
            {section.title}
          </h3>

          {section.items.map((item) => (
            <p
              key={item}
              style={{
                marginBottom: 12,
                color: colors.textSoft,
              }}
            >
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
    <div style={{ textAlign: "center", marginTop: 50 }}>
  <a
    href="/aroma-full-menu.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: colors.gold,
      color: colors.text,
      padding: "16px 32px",
      borderRadius: 999,
      textDecoration: "none",
      fontWeight: 600,
      letterSpacing: 1,
      boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
    }}
  >
    View Full Menu
  </a>
</div>
  </div>
</section>
{/* REVIEWS */}
<section
  id="reviews"
  style={{
    background: colors.bgAlt,
    padding: "100px 40px",
  }}
>
  <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: 42, fontWeight: 300, marginBottom: 20 }}>
      Loved by Guests in Lisbon
    </h2>

    <p style={{ color: colors.textSoft, marginBottom: 50 }}>
      Customer experiences from locals, tourists and dessert lovers.
    </p>

    <div
  className="grid-3"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  }}
>
      {[
        {
          name: "Claire K.",
          text: "Amei este achado no Chiado, O atendimento e cada detalhe do lugar são incríveis. Com certeza voltarei em breve ❤️",
        },
        {
          name: "Randal A.",
          text: "Ambiente super aconchegante. Estou em uma relação séria com o gelato de chocolate negro vegano.",
        },
        {
          name: "thao I.",
          text: "Best gelato in Lisbon tastes just like the real deal in Rome 😊 super authentic, beautifully kept cover nice decor also, especially the service is 10/10 so underrated highly recommend.",
        },
      ].map((review) => (
        <div
          key={review.name}
          style={{
            background: "#fffdfc",
            borderRadius: 24,
            padding: 32,
            border: "1px solid #ead8dc",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ color: colors.gold, marginBottom: 14 }}>★★★★★</div>
          <p style={{ color: colors.textSoft, lineHeight: 1.7 }}>
            “{review.text}”
          </p>
          <strong>{review.name}</strong>
        </div>
      ))}
    </div>
  </div>
</section>

{/* MEDIA MENTIONS */}
<section
  style={{
    background: colors.bg,
    padding: "100px 40px",
  }}
>
  <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: 42, fontWeight: 300, marginBottom: 20 }}>
      Featured in Lisbon Media
    </h2>

    <p style={{ color: colors.textSoft, lineHeight: 1.8, marginBottom: 40 }}>
      aROMA Gelato Experience has been recognised by local media for its
      artisan gelato, specialty coffee and boutique dolceria experience in
      Chiado.
    </p>

    <div
      className="grid-3"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
      }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.72)), url(${philrozenthalworldFeature})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 24,
          padding: 32,
          minHeight: 320,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          color: "white",
        }}
      >
        <h3>Netflix culinary travel program, Somebody Feed Phil.</h3>
        <p>“During his Croatian island-hopping adventure, he stopped by their Hvar location to try their standout, dance-inducing gelato.”</p>
        <a href="https://www.philrosenthalworld.com/cities/croatia" target="_blank" style={{ color: "#f3d6b6", fontWeight: 600 }}>
          Explore Phil Rosenthal World →
        </a>
      </div>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.72)), url(${nitFeature})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 24,
          padding: 32,
          minHeight: 320,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          color: "white",
        }}
      >
        <h3>Featured by NiT</h3>
        <p>“La Dolceria aROMA: a nova gelataria italiana do Chiado tem pastéis de nata com gelado.”</p>
        <a href="https://www.nit.pt/comida/cafes-e-bares/la-dolceria-aroma-a-nova-gelataria-italiana-do-chiado-tem-pasteis-de-nata-com-gelado" target="_blank" style={{ color: "#f3d6b6", fontWeight: 600 }}>
          Read More NiT →
        </a>
      </div>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.72)), url(${echoboomerFeature})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 24,
          padding: 32,
          minHeight: 320,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          color: "white",
        }}
      >
        <h3>Featured by Echo Boomer Tech and Lifestyle</h3>
        <p>“aROMA Gelato abre no Chiado a sua primeira gelataria em Portugal.”</p>
        <a href="https://echoboomer.pt/la-dolceria-aroma-chiado-primeira-loja-portugal/" target="_blank" style={{ color: "#f3d6b6", fontWeight: 600 }}>
          Read More Echo Boomer →
        </a>
      </div>
    </div>
  </div>
</section>
{/* INSTAGRAM GALLERY */}
<section
  style={{
    background: colors.bgAlt,
    padding: "100px 40px",
  }}
>
  <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: 42, fontWeight: 300, marginBottom: 20 }}>
      Follow the aROMA Experience
    </h2>

    <p style={{ color: colors.textSoft, marginBottom: 50 }}>
      Gelato, coffee, dolceria and everyday moments from Lisbon.
    </p>

    <div
  className="grid-4"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
  }}
>
      {[
  gelatoCounter,
  coffeePhoto,
  interiorPhoto,
  pistachioGelato,
].map((img) => (
        <img
          key={img}
          src={img}
          loading="lazy"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 22,
          }}
        />
      ))}
    </div>

    <a
      href="https://instagram.com"
      target="_blank"
      style={{
        display: "inline-block",
        marginTop: 40,
        background: colors.text,
        color: "white",
        padding: "14px 28px",
        borderRadius: 999,
        textDecoration: "none",
      }}
    >
      Follow us on Instagram
    </a>
  </div>
</section>

{/* GOOGLE MAPS / VISIT */}
<section
  id="visit"
  style={{
    background: colors.bg,
    padding: "100px 40px",
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "center",
    }}
  >
    <div>
      <h2 style={{ fontSize: 42, fontWeight: 300, marginBottom: 20 }}>
        Visit Us in Chiado
      </h2>

      <p style={{ color: colors.textSoft, lineHeight: 1.8, fontSize: 18 }}>
        Rua do Loreto 18, 1200-086 Lisboa, Portugal
        <br />
        <br />
        Open daily from 10:00 to 23:00
        <br />
        <br />
        Enjoy artisan gelato, specialty coffee, cakes and pastries in one of
        Lisbon’s most beautiful historic districts.
      </p>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Rua%20do%20Loreto%2018%20Lisboa"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: 30,
          background: colors.gold,
          color: colors.text,
          padding: "14px 28px",
          borderRadius: 999,
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Get Directions
      </a>
    </div>

    <iframe
      title="aROMA Gelato Lisbon Google Map"
      loading="lazy"
      src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Rua%20do%20Loreto%2018%20Lisboa&t=&z=15&ie=UTF8&iwloc=B&output=embed"
      width="100%"
      height="380"
      style={{
        border: "none",
        borderRadius: 28,
        boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
      }}
    />
  </div>
</section>
      {/* PINK SECTION */}
      <section
        style={{
          background: colors.bg,
          padding: "80px 40px",
          ...fadeSection,
        }}
      >
        <div
  className="grid-3"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  }}
>
<img
  src={cakepops}
  style={{
    width: "100%",
    height: 320,
    objectFit: "cover",
    borderRadius: 20,
  }}
/>

<img
  src={coffeePhoto}
  style={{
    width: "100%",
    height: 320,
    objectFit: "cover",
    borderRadius: 20,
  }}
/>

<img
  src={pasteldenata}
  style={{
    width: "100%",
    height: 320,
    objectFit: "cover",
    borderRadius: 20,
  }}
/>
        </div>
      </section>
      {/* FLOATING DESKTOP CTA */}
<a
  className="floating-cta"
  href="https://www.google.com/maps/search/?api=1&query=Rua%20do%20Loreto%2018%20Lisboa"
  target="_blank"
  style={{
    position: "fixed",
    right: 24,
    bottom: 24,
    zIndex: 999,
    background: colors.gold,
    color: colors.text,
    padding: "14px 24px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 600,
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  }}
>
  Get Directions
</a>

{/* STICKY MOBILE CTA */}
<a
  className="mobile-directions"
  href="https://www.google.com/maps/search/?api=1&query=Rua%20do%20Loreto%2018%20Lisboa"
  target="_blank"
  style={{
    display: "none",
    position: "fixed",
    left: 16,
    right: 16,
    bottom: 16,
    zIndex: 999,
    background: colors.gold,
    color: colors.text,
    padding: "16px 24px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 700,
    textAlign: "center",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  }}
>
  Get Directions to aROMA
</a>

    </div>
  );
}