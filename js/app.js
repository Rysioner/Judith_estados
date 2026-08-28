(() => {

      const root =
        document.getElementById("judithApp");

      const cardsEl =
        root.querySelector("#cards");

      const modal =
        root.querySelector("#modal");

      const title =
        root.querySelector("#letterTitle");

      const text =
        root.querySelector("#letterText");

      const art =
        root.querySelector("#letterArt");

      const artImg =
        art.querySelector("img");

      const defaultArt =
        artImg.getAttribute("src");

      const letterIcon =
        root.querySelector("#letterIcon");

      const navListEl =
        root.querySelector("#navList");

      const bookMain =
        root.querySelector(".book-main");

      const letterEl =
        root.querySelector(".letter");

      const envelopeEl =
        root.querySelector("#envelope");

      const envelopeSeal =
        root.querySelector("#envelopeSeal");


      /* =========================
         CARTAS
      ========================== */

      const data = [

        {
          id: "triste",
          icon: "☁",
          title: "Estoy triste",
          desc: "Para esos días en los que el corazón pesa.",
          tone: "#31455a",

          image: "assets/cartas/triste.png",

          /* Fondo de la tarjeta CERRADA (grilla + barra lateral). */
          cover: "assets/cartas/tarjeta-triste.png",

          text: [
            `Judith,`,

            `Si hoy estás triste, puedes estarlo. No tienes que fingir que estás bien conmigo, ni buscar una explicación perfecta para sentirte así.`,

            `Puedes descansar un ratito. Puedes llorar. Puedes no tener ganas de hablar.`,

            `Solo quería recordarte que hay alguien por aquí que te quiere muchísimo y que, aunque no pueda estar físicamente a tu lado, desearía poder sentarse contigo, abrazarte fuerte y decirte: “Ya, gatita. No tienes que poder con todo hoy.”`,

            `Mañana será otro día. Por ahora, respira.`,

            `Estoy aquí. Y no tienes que hacer nada para merecer ese cariño.`
          ]
        },


        {
          id: "abrazo",
          icon: "♡",
          title: "Necesito un abrazo",
          desc: "Si pudiera, este papel sería un abrazo.",
          tone: "#69464a",

          image: "assets/cartas/abrazo.png",

          /* Fondo de la tarjeta CERRADA (grilla + barra lateral). */
          cover: "assets/cartas/tarjeta-abrazo.png",

          text: [
            `Ven acá, gatita.`,

            `No voy a preguntarte qué pasó. No voy a pedirte que me expliques nada. Solo quiero abrazarte.`,

            `De esos abrazos que duran un poquito más de lo normal, donde puedes dejar de pensar durante unos minutos y simplemente quedarte ahí.`,

            `Y cuando te quieras separar, todavía voy a estar.`,

            `Porque sí, Judith. Te quiero muchísimo.`,

            `Y a veces querer a alguien también significa simplemente querer que descanse un poquito entre tus brazos.`
          ]
        },


        {
          id: "dormir",
          icon: "☾",
          title: "No puedo dormir",
          desc: "Para las noches demasiado ruidosas.",
          tone: "#202d46",

          image: "assets/cartas/dormir.png",

          /* Fondo de la tarjeta CERRADA (grilla + barra lateral). */
          cover: "assets/cartas/tarjeta-dormir.png",

          text: [
            `Si el mundo está demasiado ruidoso esta noche, quédate aquí un ratito.`,

            `Cierra los ojitos.`,

            `No tienes que resolver mañana esta noche. No tienes que pensar en todo lo que hiciste mal, en todo lo que falta, ni en todo lo que podría pasar.`,

            `Mañana podrás encargarte de eso. Esta noche solo quiero que descanses.`,

            `Imagíname diciéndote bajito: “Ya está, gatita. Por hoy fue suficiente.”`,

            `Respira despacito. Que el mundo espere un poquito. Tú también mereces descansar.`
          ]
        },


        {
          id: "mal",
          icon: "❀",
          title: "Hoy me siento mal conmigo",
          desc: "Para cuando seas demasiado dura contigo.",
          tone: "#55434b",

          image: "assets/cartas/mal.png",

          /* Fondo de la tarjeta CERRADA (grilla + barra lateral). */
          cover: "assets/cartas/tarjeta-mal.png",

          text: [
            `No seas tan cruel con la niña que eres.`,

            `Judith, sé que a veces miras tus errores y haces que parezcan muchísimo más grandes de lo que son.`,

            `Pero quiero pedirte algo: no conviertas un error en una sentencia contra ti misma.`,

            `Puedes equivocarte y seguir siendo una persona maravillosa. Puedes arrepentirte sin castigarte. Puedes querer mejorar sin tener que odiar la versión de ti que todavía está aprendiendo.`,

            `Yo he visto cosas bonitas en ti que quizá tú no alcanzas a ver cuando estás así.`,

            `Y si algún día tú no puedes mirarte con cariño, déjame recordarte que alguien sí puede hacerlo.`
          ]
        },


        {
          id: "estres",
          icon: "✧",
          title: "Estoy estresada",
          desc: "Una cosa a la vez, mi niña.",
          tone: "#485344",

          image: "assets/cartas/estres.png",

          /* Fondo de la tarjeta CERRADA (grilla + barra lateral). */
          cover: "assets/cartas/tarjeta-estres.png",

          text: [
            `No tienes que resolver tu vida completa hoy.`,

            `Una cosa. Luego otra. Y si necesitas parar, paras.`,

            `Sé que a veces quieres hacerlo todo bien, cumplir con todo y no fallarle a nadie. Pero no tienes que demostrar tu valor siendo productiva todo el tiempo.`,

            `Tu valor no desaparece cuando descansas.`,

            `Así que respira. Toma agua. Descansa un poquito. Y después, cuando tengas fuerzas, seguimos.`,

            `Yo prefiero saber que estás bien antes que saber que hiciste todo.`
          ]
        },


        {
          id: "sola",
          icon: "♧",
          title: "Quiero estar solita",
          desc: "Tu espacio también merece cariño.",
          tone: "#50615b",

          image: "assets/cartas/sola.png",

          /* Fondo de la tarjeta CERRADA (grilla + barra lateral). */
          cover: "assets/cartas/tarjeta-sola.png",

          text: [
            `Entonces quédate solita un ratito.`,

            `No pasa nada. No tienes que contestarme. No tienes que entretenerme. No tienes que explicarme por qué necesitas estar sola.`,

            `Si hoy tu cabecita necesita silencio, dale silencio.`,

            `Puedes desaparecer un ratito. Puedes descansar. Puedes tener tu mundo.`,

            `Y cuando quieras volver, aquí habrá alguien feliz de verte otra vez.`,

            `Sin reclamos. Sin condiciones. Solo cariño.`
          ]
        },


        {
          id: "querida",
          icon: "♥",
          title: "Necesito recordar que me quieren",
          desc: "Por si hoy se te olvidó.",
          tone: "#76515a",

          image: "assets/cartas/querida.png",

          /* Fondo de la tarjeta CERRADA (grilla + barra lateral). */
          cover: "assets/cartas/tarjeta-querida.png",

          text: [
            `Por si hoy se te olvidó: eres muy querida. Muchísimo.`,

            `Me gusta tu forma de ser. Me gusta cómo te emocionas con las cosas que quieres, tus ocurrencias, tus momentos de quedarte colgada y esas pequeñas cosas que tú quizá consideras defectos.`,

            `Me gusta conocerte. Y me alegra muchísimo que hayas entrado en mi vida.`,

            `No tienes que hacer nada especial para que te quiera. No tienes que ser perfecta.`,

            `Solo tienes que ser Judith. Y para mí, eso ya es alguien tremendamente especial.`
          ]
        },


        {
          id: "feliz",
          icon: "☼",
          title: "Hoy estoy feliz",
          desc: "Esta carta solo viene a celebrar contigo.",
          tone: "#806a35",

          image: "assets/cartas/feliz.png",

          /* Fondo de la tarjeta CERRADA (grilla + barra lateral). */
          cover: "assets/cartas/tarjeta-feliz.png",

          text: [
            `¡Mira quién está feliz!`,

            `Esta carta no necesita arreglar nada. Solo quería acompañarte.`,

            `Si hoy algo bonito te pasó, disfrútalo muchísimo. Ríete. Emociónate. Guarda este día.`,

            `Me encanta imaginarte teniendo uno de esos momentos en los que simplemente estás bien.`,

            `Y si pudiera estar ahí, probablemente estaría mirándote con una sonrisa de idiota pensando: “Qué bonita se ve cuando está feliz.”`,

            `Así que sí. Hoy también me toca alegrarme porque tú estás feliz.`
          ]
        },


        {
          id: "bonito",
          icon: "✦",
          title: "Quiero algo bonito",
          desc: "Sin razones profundas. Solo cariño.",
          tone: "#66536e",

          image: "assets/cartas/bonito.png",

          /* Fondo de la tarjeta CERRADA (grilla + barra lateral). */
          cover: "assets/cartas/tarjeta-bonito.png",

          text: [
            `Dijiste que querías algo bonito.`,

            `Así que aquí tienes.`,

            `Esta carta no tiene un mensaje profundo.
No tienes que sanar nada.
No tienes que aprender nada.
No tienes que reflexionar sobre tu vida.`,

            `Solo vine a recordarte algo:

Eres mi gatita preciosa :3`,

            `Y también mereces recibir cariño sin que haya una razón detrás.

No porque hayas hecho algo especial.
No porque estés pasando por un mal momento.
No porque tengas que devolverlo.

Simplemente porque sí. ♡`,

            `Porque a veces uno solo quiere recibir un poquito de cariño, y está bien.

Así que toma: un poquito de cariño para ti. ♡

No tienes que hacer nada con él.
Solo quería que lo tuvieras.

Y ahora puedes seguir con tu día.

Atentamente,
alguien que te quiere demasiado.`
          ]
        },


        {
          id: "decirme",
          icon: "✉",
          title: "Solo quiero saber qué me dirías",
          desc: "Una carta para cuando no sepas cuál abrir.",
          tone: "#5d4937",

          image: "assets/cartas/decirme.png",

          /* Fondo de la tarjeta CERRADA (grilla + barra lateral). */
          cover: "assets/cartas/tarjeta-decirme.png",

          text: [
            `Judith:`,

            `No sé en qué momento te convertiste en alguien tan importante para mí. Solo sé que pasó.`,

            `Y desde entonces he querido conocer cada parte de ti: la que se ríe, la que se preocupa demasiado, la que necesita estar sola, la que se emociona, la que se equivoca, la que tiene miedo, la que sigue intentando aunque esté cansada.`,

            `No quiero solamente estar cuando estés feliz. Quiero que sepas que también existe un lugar donde puedes venir cuando no tengas fuerzas para serlo.`,

            `No tienes que darme nada a cambio. No tienes que encontrar las palabras correctas.`,

            `Hay alguien al otro lado del mundo que piensa en ti con muchísimo cariño y que se alegra profundamente de que existas.`,

            `Hago todo lo que hago por ti porque eres mi persona favorita. No te pido que me ames ahora, solo déjame quedarme cerca de ti hasta que descubras cuánto puedo llegar a amarte. ♡`,

            `Cuídate mucho, gatita. Y cuando se te olvide cuánto vales, vuelve aquí. Yo te lo recordaré las veces que haga falta.`
          ]
        }

      ];


      /* =========================
         CREAR CARTAS
      ========================== */

      const book =
        root.querySelector("#book");

      const footer =
        root.querySelector("#footer");

      const hero =
        root.querySelector(".hero");


      /* =========================
         FONDOS PERSONALES DE CADA CARTA

         Intenta cargar la imagen de d.image (por ejemplo
         "assets/cartas/triste.png"). Si el archivo todavía no
         existe, no pasa nada: la tarjeta se queda con el
         degradado de color de siempre, sin romper el diseño.
         En cuanto agregues la imagen con ese nombre, aparecerá
         sola la próxima vez que se cargue la página.
      ========================== */

      function loadThumbBackground(el, url) {

        if (!url) {
          return;
        }

        /* Ojo: si guardamos la ruta tal cual ("assets/cartas/…")
           en una variable de CSS, el navegador la vuelve a
           resolver cuando se usa dentro de styles.css, tomando
           como base la carpeta del CSS (no la de index.html).
           Por eso la convertimos a una URL absoluta primero. */
        const absoluteUrl =
          new URL(url, document.baseURI).href;

        const probe = new Image();

        probe.onload = () => {
          el.style.setProperty(
            "--thumb-image",
            `url("${absoluteUrl}")`
          );

          el.classList.add("has-image");
        };

        probe.src = absoluteUrl;

      }


      data.forEach((d) => {

        const button =
          document.createElement("button");

        button.className = "card";

        button.style.setProperty(
          "--tone",
          d.tone
        );

        button.innerHTML = `
          <div class="card-body">

            <div class="icon">
              ${d.icon}
            </div>

            <h3>
              ${d.title}
            </h3>

            <p>
              ${d.desc}
            </p>

          </div>
        `;

        button.addEventListener(
          "click",
          () => showEnvelope(d)
        );

        cardsEl.appendChild(button);

        loadThumbBackground(
          button,
          d.cover
        );


        /* ---- Ítem correspondiente en la barra lateral del libro ---- */

        const navButton =
          document.createElement("button");

        navButton.type = "button";

        navButton.className = "nav-item";

        navButton.dataset.id = d.id;

        navButton.style.setProperty(
          "--tone",
          d.tone
        );

        navButton.innerHTML = `
          <span class="nav-thumb"></span>

          <span class="nav-item-title">
            ${d.icon} ${d.title}
          </span>
        `;

        navButton.addEventListener("click", () => {

  // Quitar la selección de todas las pestañas
  root
    .querySelectorAll(".nav-item")
    .forEach((btn) => {
      btn.classList.remove("active");
    });

  // Marcar únicamente la que acabamos de pulsar
  navButton.classList.add("active");

  // Abrir el sobre correspondiente
  showEnvelope(d);

});

        navListEl.appendChild(navButton);

        loadThumbBackground(
          navButton.querySelector(".nav-thumb"),
          d.cover
        );

      });


      /* =========================
         ABRIR LIBRO
      ========================== */

      root
        .querySelector("#openBook")
        .addEventListener("click", () => {

          /* La portada se desvanece primero... */
          hero.classList.add("hero-leaving");

          window.setTimeout(() => {

            hero.hidden = true;

            book.hidden = false;

            footer.hidden = false;

            root.classList.add("book-open");

            /* ...y el libro aparece justo después. */
            requestAnimationFrame(() => {
              book.classList.add("book-enter");
              footer.classList.add("book-enter");
            });

          }, 550);

        });


      /* =========================
         ABRIR CARTA
      ========================== */

      let pendingCard = null;


      /* Llena el contenido de la carta (no la muestra todavía). */

      function fillLetter(d) {

        title.textContent =
          d.title;

        if (letterIcon) {
          letterIcon.textContent = d.icon;
        }

        text.innerHTML =
          d.text
            .map(
              paragraph =>
                `<p>${paragraph}</p>`
            )
            .join("");

        art.style.setProperty(
          "--modalTone",
          d.tone
        );

        /* Ilustración propia de esta carta. Si el archivo
           todavía no existe, vuelve sola a la imagen por
           defecto en vez de mostrarse rota. */
        artImg.onerror = () => {
          artImg.onerror = null;
          artImg.src = defaultArt;
        };

        artImg.src = d.image || defaultArt;

        root.querySelectorAll(".nav-item").forEach((btn) => {
  btn.classList.remove("active");
});

const activeBtn = root.querySelector(
  `.nav-item[data-id="${d.id}"]`
);

if (activeBtn) {
  activeBtn.classList.add("active");
}

      }


      /* Paso 1: se hace clic en una carta → aparece el sobre
         cerrado con el sello. La carta todavía no se muestra. */

      function showEnvelope(d) {

        pendingCard = d;

        modal.classList.add("open");

        modal.setAttribute(
          "aria-hidden",
          "false"
        );

        letterEl.setAttribute("aria-hidden", "true");
        letterEl.classList.remove("opening");

        if (envelopeEl) {
          envelopeEl.hidden = false;
          envelopeEl.classList.remove("opening");
        }

      }


      /* Paso 2: se hace clic en el sello → el sobre se abre
         y, de ahí adentro, sale la carta de siempre. */

      function revealLetter() {

        if (!pendingCard || !envelopeEl) {
          return;
        }

        fillLetter(pendingCard);

        envelopeEl.classList.add("opening");

        /* La carta empieza a salir mientras la solapa del
           sobre todavía se está abriendo, para que se vea
           como si viniera de adentro. */
        window.setTimeout(() => {

          letterEl.setAttribute("aria-hidden", "false");

          /* Se quita y se vuelve a poner la clase (con un
             reflow en medio) para que la animación se repita
             cada vez, aunque sea la misma carta. */
          letterEl.classList.remove("opening");
          void letterEl.offsetWidth;
          letterEl.classList.add("opening");

          /* Que la carta empiece siempre desde el inicio. */
          if (bookMain) {
            bookMain.scrollTop = 0;

            requestAnimationFrame(() => {
              bookMain.scrollTop = 0;
            });
          }

        }, 380);

        /* El sobre, ya vacío, se retira del todo cuando
           termina de desvanecerse. */
        window.setTimeout(() => {
          envelopeEl.hidden = true;
        }, 950);

      }


      if (envelopeSeal) {
        envelopeSeal.addEventListener(
          "click",
          revealLetter
        );
      }


      /* =========================
         CERRAR CARTA
      ========================== */

      function close() {

        modal.classList.remove("open");

        modal.setAttribute(
          "aria-hidden",
          "true"
        );

      }


      root
        .querySelector("#closeBtn")
        .addEventListener(
          "click",
          close
        );


      root
        .querySelector("#backBtn")
        .addEventListener(
          "click",
          close
        );


      modal.addEventListener(
        "click",
        (event) => {

          if (event.target === modal) {
            close();
          }

        }
      );

    })();